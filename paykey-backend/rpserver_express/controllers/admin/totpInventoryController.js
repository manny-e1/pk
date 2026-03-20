const prisma = require('../../config/db');
const xlsx = require('xlsx');
const CryptoJS = require('crypto-js');
const javaClient = require('../../services/JavaAuthClient');
const speakeasy = require('speakeasy');
const ENCRYPTION_SECRET = process.env.PAYKEY_SECURITY_AES_SECRET || "PayKeySuperSecretMasterKey2026";

exports.getInventoryData = async (req, res) => {
    try {
        const tokens = await prisma.totpHardwareInventory.findMany({
            include: {
                user: { select: { id: true, fullName: true, email: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        const statsAggregation = await prisma.totpHardwareInventory.groupBy({
            by: ['status'],
            _count: true
        });

        const stats = {
            available: 0, assigned: 0, suspended: 0, revoked: 0, expired: 0, total: tokens.length
        };
        
        statsAggregation.forEach(item => {
            if (stats[item.status] !== undefined) {
                stats[item.status] = item._count;
            }
        });

        const ninetyDaysFromNow = new Date();
        ninetyDaysFromNow.setDate(ninetyDaysFromNow.getDate() + 90);
        
        stats.expiringSoon = await prisma.totpHardwareInventory.count({
            where: { expiryDate: { lte: ninetyDaysFromNow }, status: { not: 'revoked' } }
        });

        res.json({ success: true, stats, tokens });
    } catch (error) {
        console.error("[Inventory] Get Data Error:", error);
        res.status(500).json({ success: false, error: 'Error occurred while fetching inventory data' });
    }
};

exports.importTokenBatch = async (req, res) => {
    try {
        const { vendor, batchId, decryptionKey, period, algorithm } = req.body;
        const file = req.file;

        if (!file) return res.status(400).json({ error: 'File Seed (.xlsx / .csv) tidak ditemukan' });
        if (!vendor || !batchId || !decryptionKey) {
            return res.status(400).json({ error: 'Vendor, Batch ID, dan Decryption Key wajib diisi' });
        }

        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const rawData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        if (rawData.length === 0) return res.status(400).json({ error: 'File Excel/CSV kosong' });

        let importedCount = 0;
        let failedCount = 0;

        for (const row of rawData) {
            const serial = row.SerialNumber || row.serial;
            const secret = row.SecretKey || row.seed || row.secret;
            const expiry = row.ExpiryDate || row.expiry;

            if (!serial || !secret) {
                failedCount++;
                continue;
            }

            const encryptedSeed = CryptoJS.AES.encrypt(secret, ENCRYPTION_SECRET).toString();

            try {
                await prisma.totpHardwareInventory.create({
                    data: {
                        serialNumber: String(serial),
                        vendor: vendor.toLowerCase(),
                        batchId: batchId,
                        secretKey: encryptedSeed,
                        expiryDate: expiry ? new Date(expiry) : new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
                        status: 'available',
                        
                        period: period ? parseInt(period) : 30,
                        algorithm: algorithm ? algorithm.toUpperCase() : 'SHA1'
                    }
                });
                importedCount++;
            } catch (dbErr) {
                failedCount++;
            }
        }

        return res.status(200).json({ 
            success: true, 
            message: `Import selesai. Berhasil: ${importedCount}, Gagal/Duplikat: ${failedCount}`,
            importedCount 
        });

    } catch (error) {
        console.error("[Inventory] Import Error:", error);
        return res.status(500).json({ success: false, error: 'Terjadi kesalahan saat memproses file import' });
    }
};


exports.updateTokenStatus = async (req, res) => {
    try {
        const { serial } = req.params;
        const { status } = req.body;

        if (!['suspended', 'available', 'revoked'].includes(status)) {
            return res.status(400).json({ error: 'Status not valid' });
        }

        const updated = await prisma.totpHardwareInventory.update({
            where: { serialNumber: serial },
            data: { status }
        });

        res.json({ success: true, message: `Token ${serial} updated to ${status}`, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error updating token status' });
    }
};

exports.assignToken = async (req, res) => {
    try {
        const { serial } = req.params;
        const { userId, verificationCode } = req.body;

        if (!userId || typeof userId !== 'string') {
            return res.status(400).json({ success: false, error: 'User ID tidak valid atau kosong.' });
        }
        if (!verificationCode || typeof verificationCode !== 'string' || verificationCode.length < 6) {
            return res.status(400).json({ success: false, error: 'Kode Verifikasi 6 digit wajib diisi.' });
        }

        const [user, tokenData] = await Promise.all([
            prisma.user.findUnique({ where: { id: userId } }),
            prisma.totpHardwareInventory.findUnique({ where: { serialNumber: serial } })
        ]);

        if (!user) {
            return res.status(404).json({ success: false, error: 'User tidak ditemukan di database.' });
        }
        if (!tokenData || tokenData.status !== 'available') {
            return res.status(400).json({ success: false, error: 'Token fisik tidak ditemukan atau sudah digunakan.' });
        }

        const bytes = CryptoJS.AES.decrypt(tokenData.secretKey, ENCRYPTION_SECRET);
        const decryptedSeed = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedSeed) {
            throw new Error('Dekripsi Seed gagal. Kunci master (APP_SECRET_KEY) mungkin tidak cocok.');
        }

        const encodingType = /^[0-9A-Fa-f]+$/.test(decryptedSeed) ? 'hex' : 'base32';
        const tokenPeriod = tokenData.period || 30;
        const tokenAlgorithm = (tokenData.algorithm || 'sha1').toLowerCase();

        const isValidOTP = speakeasy.totp.verify({
            secret: decryptedSeed,
            encoding: encodingType,
            algorithm: tokenAlgorithm,
            step: tokenPeriod,
            token: verificationCode,
            window: 2
        });

        if (!isValidOTP) {
            return res.status(400).json({ 
                success: false,
                error: `Kode Verifikasi Salah. Pastikan Anda memasukkan angka yang sedang menyala di token saat ini.` 
            });
        }

        try {
            await javaClient.registerCustomKey({
                userId: userId,
                deviceId: serial, 
                publicKey: decryptedSeed,
                type: 'TOTP_HARDWARE',
                period: tokenPeriod,
                algorithm: tokenAlgorithm
            });
        } catch (kdcError) {
            console.error('[KDC Integration Error]:', kdcError.message);
            return res.status(502).json({
                success: false,
                error: 'Gagal menyinkronkan kunci dengan Java Security Vault. Proses Assign dibatalkan.'
            });
        }
        

        await prisma.$transaction([
            prisma.userKey.upsert({
                where: { 
                    credentialId: `HW_TOTP_${serial}` 
                },
                update: {
                    userId: userId,
                    status: "ACTIVE",
                    deviceTelemetry: JSON.stringify({ 
                        device_type: "hardware", 
                        device_vendor: tokenData.vendor,
                        otp_period: tokenPeriod,
                        otp_algorithm: tokenAlgorithm
                    })
                },
                create: {
                    credentialId: `HW_TOTP_${serial}`,
                    userId: userId,
                    deviceName: `Hardware Token (${tokenData.vendor.toUpperCase()})`,
                    transports: JSON.stringify(["HARDWARE_TOTP"]), 
                    publicKey: "STORED_IN_JAVA_VAULT", 
                    status: "ACTIVE",
                    signCounter: 0,
                    deviceTelemetry: JSON.stringify({ 
                        device_type: "hardware", 
                        device_vendor: tokenData.vendor,
                        otp_period: tokenPeriod,
                        otp_algorithm: tokenAlgorithm
                    }),
                    aaguid: "00000000-0000-0000-0000-000000000000"
                }
            }),
            prisma.totpHardwareInventory.update({
                where: { serialNumber: serial },
                data: { 
                    status: 'assigned', 
                    userId: userId, 
                    assignedAt: new Date() 
                }
            })
        ]);

        return res.status(200).json({ 
            success: true, 
            message: `Token Fisik berhasil ditautkan ke pengguna ${user.fullName}` 
        });

    } catch (error) {
        console.error("[Assign Token Fatal Error]:", error);
        return res.status(500).json({ 
            success: false, 
            error: 'Terjadi kesalahan sistem internal saat mencoba menautkan token.' 
        });
    }
};

exports.unassignToken = async (req, res) => {
    try {
        const { serial } = req.params;

        await prisma.totpHardwareInventory.update({
            where: { serialNumber: serial },
            data: { 
                status: 'available', 
                userId: null, 
                assignedAt: null 
            }
        });
        await prisma.userKey.deleteMany({
            where: { credentialId: `HW_TOTP_${serial}` }
        });

        res.json({ success: true, message: `Hardware token successfully unassigned` });
    } catch (error) {
        console.error("Unassign Token Error:", error);
        res.status(500).json({ success: false, error: 'Error unassigning hardware token' });
    }
};