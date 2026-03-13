/**
 * @file clientStepUpController.js
 * @description Universal Endpoint Verifikasi.
 * Mengelola pembuktian dari Client (melalui Cryptographic Signature atau OTP).
 */

const javaClient = require('../../services/JavaAuthClient');
const prisma = require('../../config/db');

exports.getUnifiedChallenge = async (req, res) => {
    try {
        const challengeData = await javaClient.getUnifiedChallenge();
        res.json({ 
            success: true, 
            challenge: challengeData.challenge || challengeData 
        });
    } catch (err) {
        console.error("[Step-Up] Get Challenge Error:", err);
        res.status(500).json({ error: 'Failed to generate security challenge' });
    }
};

exports.verifyStepUp = async (req, res) => {
    const { method, payload, deviceId } = req.body;
    const userId = req.user.id;

    try {
        if (method === 'FIDO2' || method === 'BIOMETRIC') {
            await javaClient.fidoVerifyResponse('AUTHENTICATION', payload);
            return res.json({ success: true, message: 'FIDO2 Verified' });
        } 
        
        else if (['PIN', 'BIO_LEGACY', 'PUSH_APPROVAL'].includes(method)) {
            const { challenge, signature } = payload; 
            
            if (!challenge || !signature || !deviceId) {
                return res.status(400).json({ error: 'Challenge, signature, and deviceId are required' });
            }

            await javaClient.verifyUnifiedAuth({ 
                userId: userId, 
                deviceId: deviceId, 
                authType: method, 
                challenge: challenge, 
                signature: signature 
            });
            
            return res.json({ success: true, message: `${method} Verified via Engine Signature` });
        }

        else if (method === 'TOTP') {
            if (!payload.code) return res.status(400).json({ error: 'TOTP code is required' });

            await javaClient.verifyUnifiedAuth({ 
                userId: userId, 
                deviceId: deviceId || 'unknown', 
                authType: 'TOTP_SOFT', 
                otp: payload.code 
            });
            return res.json({ success: true, message: 'TOTP Verified' });
        }

        else if (method === 'EMAIL_OTP') {
            if (!payload.code) return res.status(400).json({ error: 'Email code is required' });

            const tokenRecord = await prisma.authTotpToken.findFirst({ 
                where: { userId, tokenType: 'EMAIL_OTP', status: 'PENDING' }, 
                orderBy: { createdAt: 'desc' }
            });
            
            if (!tokenRecord || tokenRecord.encryptedSeed !== payload.code) {
                return res.status(400).json({ error: 'Invalid or Expired OTP' });
            }
            
            await prisma.authTotpToken.delete({ where: { id: tokenRecord.id } });
            return res.json({ success: true, message: 'Email OTP Verified' });
        }

        return res.status(400).json({ error: 'Unsupported authentication method' });

    } catch (err) {
        console.error(`[Step-Up] Verification Error for method ${method}:`, err.message || err);
        res.status(err.status || 500).json({ error: err.message || 'Verification failed' });
    }
};