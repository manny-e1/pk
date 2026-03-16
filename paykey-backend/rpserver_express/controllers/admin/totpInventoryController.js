/**
 * @file totpInventoryController.js
 * @description Menangani manajemen inventaris Hardware Token (YubiKey, Feitian, dll)
 */
const prisma = require('../../config/db');
const xlsx = require('xlsx');
const CryptoJS = require('crypto-js');

const ENCRYPTION_SECRET = process.env.APP_SECRET_KEY || 'super-secret-enterprise-key-2026';

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
        res.status(500).json({ success: false, error: 'Gagal mengambil data inventaris' });
    }
};

exports.importTokenBatch = async (req, res) => {
    try {
        const { vendor, batchId, decryptionKey } = req.body;
        const file = req.file;

        if (!file) return res.status(400).json({ error: 'File Seed (.xlsx / .csv) tidak ditemukan' });
        if (!vendor || !batchId || !decryptionKey) return res.status(400).json({ error: 'Vendor, Batch ID, dan Decryption Key wajib diisi' });

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
                        status: 'available'
                    }
                });
                importedCount++;
            } catch (dbErr) {
                failedCount++;
            }
        }

        res.json({ 
            success: true, 
            message: `Import selesai. Berhasil: ${importedCount}, Gagal/Duplikat: ${failedCount}`,
            importedCount 
        });

    } catch (error) {
        console.error("[Inventory] Import Error:", error);
        res.status(500).json({ success: false, error: 'Terjadi kesalahan saat memproses file import' });
    }
};


exports.updateTokenStatus = async (req, res) => {
    try {
        const { serial } = req.params;
        const { status } = req.body;

        if (!['suspended', 'available', 'revoked'].includes(status)) {
            return res.status(400).json({ error: 'Status tidak valid' });
        }

        const updated = await prisma.totpHardwareInventory.update({
            where: { serialNumber: serial },
            data: { status }
        });

        res.json({ success: true, message: `Token ${serial} updated to ${status}`, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Gagal mengubah status token' });
    }
};

exports.assignToken = async (req, res) => {
    try {
        const { serial } = req.params;
        const { userId } = req.body;

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User tidak ditemukan' });

        const updated = await prisma.totpHardwareInventory.update({
            where: { serialNumber: serial },
            data: { 
                status: 'assigned', 
                userId: userId, 
                assignedAt: new Date() 
            }
        });

        res.json({ success: true, message: `Token assigned to ${user.fullName}` });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Gagal meng-assign token' });
    }
};

exports.unassignToken = async (req, res) => {
    try {
        const { serial } = req.params;

        const updated = await prisma.totpHardwareInventory.update({
            where: { serialNumber: serial },
            data: { 
                status: 'available', 
                userId: null, 
                assignedAt: null 
            }
        });

        res.json({ success: true, message: `Token unassigned successfully` });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Gagal melepas token' });
    }
};