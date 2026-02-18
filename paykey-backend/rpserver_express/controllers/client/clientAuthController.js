const bcrypt = require('bcrypt');
const prisma = require('../../config/db'); // Sesuaikan path relative
const { sendTokenCookie } = require('../../utils/jwt');
const { createRichAuthLog } = require('../../utils/richLogger'); 
const { evaluateAuthPolicy } = require('../../utils/authPolicies');
const javaClient = require('../../services/JavaAuthClient');

// 1. LOGIN STEP 1: Password Check & Policy Decision
exports.login = async (req, res) => {
    const { email, password, deviceId, deviceModel } = req.body;
    const channel = req.headers['x-channel'] || 'MOBILE'; // Header dari App

    try {
        // A. Validasi User
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
            await createRichAuthLog(req, user, { eventType: 'LOGIN_FAIL', status: 'FAILED' });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // B. Evaluasi Policy (Risk Engine)
        const segment = (user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';
        const policyResult = await evaluateAuthPolicy({
            segment,
            channel,
            riskScore: 10, // TODO: Integrasikan Real Risk Score nanti
            deviceId
        });

        const decision = policyResult.decision; // ALLOW atau CHALLENGE

        // C. Response ke Client
        if (decision.status === 'ALLOW') {
            sendTokenCookie(res, user);
            return res.json({ status: 'complete', userId: user.id });
        } 
        else if (decision.status === 'CHALLENGE') {
            // Beritahu Mobile App: "Password OK, tapi sekarang minta PIN"
            return res.json({
                status: 'challenge_required',
                userId: user.id,
                nextStep: decision.requirements[0] || 'PIN', // 'PIN', 'BIO', 'TOTP'
                message: 'Additional verification required'
            });
        } 
        else {
            return res.status(403).json({ error: 'Login blocked by policy' });
        }

    } catch (error) {
        console.error("Client Login Error:", error);
        res.status(500).json({ error: 'System Error' });
    }
};

// 2. LOGIN STEP 2: MFA Verification (PIN/Bio/TOTP)
exports.verifyMfa = async (req, res) => {
    const { userId, authType, challenge, signature, otp, deviceId } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Panggil Java Server untuk verifikasi Kriptografi
        await javaClient.verifyAuth(authType, {
            userId, deviceId, challenge, signature, otp
        });

        // Sukses -> Terbitkan Token
        sendTokenCookie(res, user);
        
        await createRichAuthLog(req, user, { 
            eventType: 'LOGIN_SUCCESS', status: 'SUCCESS', authMethod: authType 
        });

        res.json({ status: 'success', message: 'Welcome back!' });

    } catch (error) {
        res.status(401).json({ error: 'Verification Failed', detail: error.message });
    }
};

// 3. Request Challenge (Nonce) sebelum Sign
exports.getChallenge = async (req, res) => {
    const { userId, authType } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        // Minta Java generate random string
        const result = await javaClient.getAuthChallenge(authType, user, 'paykey.client');
        res.json(result); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. Logout
exports.logout = (req, res) => {
    res.clearCookie('auth_token');
    res.json({ status: 'success' });
};