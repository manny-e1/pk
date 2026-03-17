const speakeasy = require('speakeasy'); // Library pengganti yang super stabil
const qrcode = require('qrcode');
const { createClient } = require('redis');
const prisma = require('../../config/db');
const { encryptSeedForJava } = require('../../utils/cryptoHelper'); 
const { generateUserId } = require('../../utils/idGenerator'); 

const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
redisClient.connect().catch(console.error);

/**
 * 1. SETUP: Tangkap Email & CIF, Auto-Register, Generate QR
 */
exports.setupSoftToken = async (req, res) => {
    try {
        const { email, cifNumber, name, mobile } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required in payload' });
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Auto-Register User
        let user = await prisma.user.findUnique({ where: { email: normalizedEmail } });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    id: generateUserId(),
                    email: normalizedEmail,
                    fullName: name || normalizedEmail,
                    cifNumber: cifNumber || null,
                    mobile: mobile || null,
                    status: "active"
                }
            });
            console.log(`[TOTP Setup] Auto-registered new user: ${user.id}`);
        }

        // =========================================================
        // GENERATE SECRET MENGGUNAKAN SPEAKEASY
        // =========================================================
        const secretData = speakeasy.generateSecret({
            name: `PayKey Secure (${user.email})` // Nama yang akan muncul di Google Auth HP User
        });

        // Ambil Base32 dan URL-nya
        const secretBase32 = secretData.base32;
        const otpauthUrl = secretData.otpauth_url;
        
        // Buat QR Code
        const qrCodeImageUrl = await qrcode.toDataURL(otpauthUrl);

        // Simpan Base32 secret sementara di Redis (5 Menit)
        await redisClient.set(`soft_totp_setup:${user.id}`, secretBase32, { EX: 300 });

        res.json({
            success: true,
            userId: user.id, 
            qrCode: qrCodeImageUrl,
            manualKey: secretBase32
        });

    } catch (err) {
        console.error("Setup Soft Token Error:", err);
        res.status(500).json({ error: 'Failed to generate Soft Token' });
    }
};

/**
 * 2. ACTIVATE: Validasi OTP, Simpan ke DB
 */
exports.activateSoftToken = async (req, res) => {
    try {
        const { userId, code, deviceId, telemetry } = req.body; 

        if (!userId || !code) {
            return res.status(400).json({ error: 'userId and OTP code are required' });
        }

        const tempSecret = await redisClient.get(`soft_totp_setup:${userId}`);
        if (!tempSecret) return res.status(400).json({ error: 'Setup session expired. Please restart.' });

        // =========================================================
        // VALIDASI OTP MENGGUNAKAN SPEAKEASY
        // =========================================================
        const isValid = speakeasy.totp.verify({
            secret: tempSecret,
            encoding: 'base32',
            token: code,
            window: 1 // Memberikan toleransi waktu +/- 30 detik (menghindari gagal jika jam HP user tidak akurat)
        });

        if (!isValid) return res.status(400).json({ error: 'Invalid OTP Code.' });

        // Enkripsi Secret Base32 agar aman dan bisa dibaca oleh Java Server
        const encryptedSeed = encryptSeedForJava(tempSecret);

        // A. Simpan ke tabel auth_totp_tokens
        await prisma.authTotpToken.create({
            data: {
                serialNumber: `SOFT_${userId}_${Date.now()}`,
                userId: userId,
                tokenType: 'TOTP_SOFT', 
                encryptedSeed: encryptedSeed,
                status: 'ASSIGNED',
                assignedAt: new Date(),
                importedAt: new Date(),
                timeStep: 30,
                digits: 6
            }
        });

        // B. Simpan ke tabel userKey untuk UI
        const deviceName = telemetry?.device_model || 'Google Authenticator (Web)';
        const safeDeviceId = deviceId || `WEB_${Date.now()}`;

        await prisma.userKey.create({
            data: {
                credentialId: `TOTP_SOFT_${safeDeviceId}_${Date.now()}`,
                userId: userId,
                deviceName: deviceName,
                transports: JSON.stringify(["TOTP_SOFT"]),
                publicKey: "N/A",
                status: "ACTIVE",
                signCounter: 0,
                deviceTelemetry: telemetry ? JSON.stringify(telemetry) : "{}",
                aaguid: "00000000-0000-0000-0000-000000000000"
            }
        });

        await redisClient.del(`soft_totp_setup:${userId}`);

        res.json({ success: true, message: 'Google Authenticator linked successfully' });
    } catch (err) {
        console.error("Activate Soft Token Error:", err);
        res.status(500).json({ error: 'Failed to activate Soft Token' });
    }
};