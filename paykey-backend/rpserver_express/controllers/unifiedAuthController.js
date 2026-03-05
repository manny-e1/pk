const crypto = require('crypto');
const bcrypt = require('bcrypt');
const prisma = require('../config/db');
const { sendTokenCookie } = require('../utils/jwt');
const { createRichAuthLog } = require('../utils/richLogger');
const emailService = require('../services/emailService');
const javaClient = require('../services/javaApiClient');

const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};


exports.requestEmailOtp = async (req, res) => {
    const { email, type } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        
        if (!user) return res.json({ status: 'success', message: 'OTP sent if email exists' });

        const otp = generateOTP();
        const otpHash = await bcrypt.hash(otp, 10);

        await prisma.authEmailOtp.create({
            data: {
                email,
                otpCode: otpHash,
                expiresAt: new Date(Date.now() + 5 * 60 * 1000),
            }
        });

        await emailService.sendOtpEmail(email, otp);

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
        const record = await prisma.authEmailOtp.findFirst({
            where: {
                email,
                used: false,
                expiresAt: { gt: new Date() }
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!record) return res.status(400).json({ error: 'Invalid or expired OTP' });

        const isValid = await bcrypt.compare(otp, record.otpCode);
        if (!isValid) return res.status(400).json({ error: 'Invalid OTP' });

        await prisma.authEmailOtp.update({
            where: { id: record.id },
            data: { used: true }
        });

        const user = await prisma.user.findUnique({ where: { email } });
        
        await createRichAuthLog(req, user, {
            eventType: 'LOGIN_SUCCESS',
            status: 'SUCCESS',
            authMethod: 'EMAIL_OTP'
        });

        sendTokenCookie(res, user);

        res.json({ status: 'success', userId: user.id });

    } catch (error) {
        console.error('Verify OTP Error:', error);
        res.status(500).json({ error: 'Verification failed' });
    }
};


exports.getAuthChallenge = async (req, res) => {
    try {
        const result = await javaClient.getChallenge();
        res.json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

exports.verifyUnifiedAuth = async (req, res) => {
    const { userId, deviceId, authType, challenge, signature, otp } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        await javaClient.verifyUnifiedAuth({
            userId,
            deviceId,
            authType,
            challenge,
            signature,
            otp
        });


        await createRichAuthLog(req, user, {
            eventType: 'LOGIN_SUCCESS',
            status: 'SUCCESS',
            authMethod: authType,
            data: { deviceId }
        });

        sendTokenCookie(res, user);

        res.json({ status: 'success', message: 'Authenticated successfully' });

    } catch (error) {
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