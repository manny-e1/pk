const crypto = require('crypto');
const bcrypt = require('bcrypt');
const prisma = require('../config/db');
const { sendTokenCookie } = require('../utils/jwt'); // Reuse logic login lama
const { createRichAuthLog } = require('../utils/richLogger');
const emailService = require('../services/emailService');
const javaClient = require('../services/javaApiClient');

// --- HELPER: Secure Random OTP ---
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// ============================================================================
// 1. EMAIL OTP LOGIC (Node.js Handler)
// ============================================================================

exports.requestEmailOtp = async (req, res) => {
    const { email, type } = req.body; // type: 'LOGIN', 'TRANSACTION'

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        
        // Security: Silent fail user not found (Avoid Enumeration)
        if (!user) return res.json({ status: 'success', message: 'OTP sent if email exists' });

        // Generate & Hash
        const otp = generateOTP();
        const otpHash = await bcrypt.hash(otp, 10);

        // Save to DB (Prisma)
        await prisma.authEmailOtp.create({
            data: {
                email,
                otpCode: otpHash,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 min
            }
        });

        // Send Email
        await emailService.sendOtpEmail(email, otp);

        // Audit Log
        await createRichAuthLog(req, user, {
            eventType: 'OTP_REQUEST',
            status: 'SUCCESS',
            authMethod: 'EMAIL_OTP',
            data: { type }
        });

        res.json({ status: 'success', message: 'OTP sent to email' });

    } catch (error) {
        console.error('Request OTP Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.verifyEmailOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        // 1. Find Valid OTP
        const record = await prisma.authEmailOtp.findFirst({
            where: {
                email,
                used: false,
                expiresAt: { gt: new Date() }
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!record) return res.status(400).json({ error: 'Invalid or expired OTP' });

        // 2. Verify Hash
        const isValid = await bcrypt.compare(otp, record.otpCode);
        if (!isValid) return res.status(400).json({ error: 'Invalid OTP' });

        // 3. Mark Used
        await prisma.authEmailOtp.update({
            where: { id: record.id },
            data: { used: true }
        });

        // 4. Login Success Action
        const user = await prisma.user.findUnique({ where: { email } });
        
        // Log
        await createRichAuthLog(req, user, {
            eventType: 'LOGIN_SUCCESS',
            status: 'SUCCESS',
            authMethod: 'EMAIL_OTP'
        });

        // Issue JWT Cookie (Final Step)
        sendTokenCookie(res, user);

        res.json({ status: 'success', userId: user.id });

    } catch (error) {
        console.error('Verify OTP Error:', error);
        res.status(500).json({ error: 'Verification failed' });
    }
};

// ============================================================================
// 2. UNIFIED AUTH LOGIC (Bridge to Java)
// Handles: PIN, BIO_LEGACY, TOTP (Soft & Hard)
// ============================================================================

exports.getAuthChallenge = async (req, res) => {
    try {
        // Proxy call to Java
        const result = await javaClient.getChallenge();
        res.json(result); // Return nonce
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.verifyUnifiedAuth = async (req, res) => {
    // Payload dari Mobile App
    const { userId, deviceId, authType, challenge, signature, otp } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // 1. Delegasi Verifikasi ke Java Server
        // Java akan cek Signature Kriptografi atau Validitas TOTP
        await javaClient.verifyUnifiedAuth({
            userId,
            deviceId,
            authType, // e.g., 'PIN', 'TOTP_SOFT'
            challenge,
            signature,
            otp
        });

        // 2. Jika kode di atas tidak throw error, berarti VERIFIED.
        // Node.js sekarang mengambil alih untuk sesi manajemen.

        // Audit Log
        await createRichAuthLog(req, user, {
            eventType: 'LOGIN_SUCCESS',
            status: 'SUCCESS',
            authMethod: authType,
            data: { deviceId }
        });

        // 3. Issue Session (JWT)
        sendTokenCookie(res, user);

        res.json({ status: 'success', message: 'Authenticated successfully' });

    } catch (error) {
        // Log Failure
        if (userId) {
            await createRichAuthLog(req, { id: userId, email: 'unknown' }, {
                eventType: 'LOGIN_FAILED',
                status: 'FAILED',
                authMethod: authType,
                failureReason: error.message
            });
        }
        res.status(error.statusCode || 401).json({ error: error.message });
    }
};