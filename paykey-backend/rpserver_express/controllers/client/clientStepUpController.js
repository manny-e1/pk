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
    const { method, payload, deviceId, userId } = req.body;
    
    // Fallback: Jika punya token pakai req.user.id, jika tidak pakai userId
    const finalUserId = userId || (req.user ? req.user.id : null);

    if (!finalUserId) return res.status(400).json({ error: 'User ID is required' });

    try {
        const user = await prisma.user.findUnique({ where: { id: finalUserId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (method === 'FIDO2' || method === 'BIOMETRIC') {
            await javaClient.fidoVerifyResponse('AUTHENTICATION', payload);
            
            if (!req.user) sendTokenCookie(res, user);
            await createRichAuthLog(req, user, { eventType: 'LOGIN_MFA', status: 'SUCCESS', authMethod: method });
            return res.json({ success: true, message: 'FIDO2 Verified' });
        } 
        
        // KUNCI PERUBAHAN: Masukkan 'PIN' ke kelompok ini agar divalidasi oleh Java Server
        else if (['PIN', 'BIO_LEGACY', 'PUSH_APPROVAL'].includes(method)) {
            const { challenge, signature } = payload; 
            
            if (!challenge || !signature || !deviceId) {
                return res.status(400).json({ error: 'Challenge, signature, and deviceId are required' });
            }

            // Java Server akan memvalidasi Digital Signature
            await javaClient.verifyUnifiedAuth({ 
                userId: finalUserId, 
                deviceId: deviceId, 
                authType: method, 
                challenge: challenge, 
                signature: signature 
            });
            
            if (!req.user) sendTokenCookie(res, user);
            await createRichAuthLog(req, user, { eventType: 'LOGIN_MFA', status: 'SUCCESS', authMethod: method });
            return res.json({ success: true, message: `${method} Verified via PKI Signature` });
        }

        else if (method === 'EMAIL_OTP') {
             // ... (Kode EMAIL_OTP Anda tetap sama seperti sebelumnya) ...
        }

        return res.status(400).json({ error: 'Unsupported authentication method' });

    } catch (err) {
        console.error(`[Step-Up] Verification Error for method ${method}:`, err.message || err);
        res.status(err.status || 500).json({ error: err.message || 'Verification failed' });
    }
};