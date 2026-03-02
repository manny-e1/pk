const bcrypt = require('bcrypt');
const prisma = require('../../config/db');
const { sendTokenCookie } = require('../../utils/jwt');
const { createRichAuthLog } = require('../../utils/richLogger');
const javaClient = require('../../services/JavaAuthClient');
// IMPORT ENGINE
const PolicyEngine = require('../../utils/authPolicies'); 

// 1. REGISTER (User Baru)
exports.registerUser = async (req, res) => {
    const { email, password, fullName, mobile, companyName, cifNumber } = req.body;
    
    try {
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) return res.status(400).json({ error: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Buat User dengan Balance Default
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword,
                fullName,
                mobile,
                cifNumber,
                companyName,
                role: 'USER',
                balance: 0,
                status: 'active'
            }
        });

        sendTokenCookie(res, user);
        
        // Log Activity
        await createRichAuthLog(req, user, { eventType: 'REGISTER_SUCCESS', status: 'SUCCESS' });

        res.json({ 
            status: 'success', 
            userId: user.id, 
            message: 'Registration successful. Please setup authentication.' 
        });

    } catch (err) {
        console.error("Register Error:", err);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// 2. LOGIN STEP 1 (Password -> Policy Check)
exports.loginStep1 = async (req, res) => {
    const { email, password, deviceId } = req.body;
    const channel = req.apiClient ? req.apiClient.type : 'WEB'; 

    try {
        // A. Validasi Password
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
            await createRichAuthLog(req, user, { eventType: 'LOGIN_FAIL', status: 'FAILED' });
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // B. INTEGRASI POLICY ENGINE
        // Tentukan segment user
        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';
        
        // Evaluasi Policy (Risk score login biasanya statis rendah, kecuali ada anomali IP)
        const decision = await PolicyEngine.evaluate({
            segment: segment,
            channel: channel,
            action: 'LOGIN',
            riskScore: 10 // Bisa di-hook ke RiskEngine jika ingin deteksi login anomali
        });

        // C. Eksekusi Keputusan
        if (decision.status === 'ALLOW') {
            sendTokenCookie(res, user);
            await createRichAuthLog(req, user, { eventType: 'LOGIN_SUCCESS', status: 'SUCCESS' });
            return res.json({ status: 'complete', userId: user.id });
        } 
        else if (decision.status === 'CHALLENGE') {
            return res.json({
                status: 'challenge_required',
                userId: user.id,
                nextStep: decision.requirements[0], // e.g. "PIN"
                message: 'Additional verification required'
            });
        } 
        else {
            return res.status(403).json({ error: 'Login Denied by Policy' });
        }

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: 'System Error' });
    }
};

// 3. MFA VERIFY (Jembatan ke Java Server)
exports.verifyMfa = async (req, res) => {
    const { userId, authType, challenge, signature, otp, deviceId } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Verifikasi Kriptografi (Unified Auth di Java)
        const result = await javaClient.verifyUnifiedAuth({
            userId, deviceId, authType, challenge, signature, otp
        });

        if (result.status !== 'success') throw new Error('Invalid Signature/OTP');

        sendTokenCookie(res, user);
        await createRichAuthLog(req, user, { eventType: 'LOGIN_MFA', status: 'SUCCESS', authMethod: authType });

        res.json({ status: 'success' });
    } catch (err) {
        res.status(401).json({ error: 'Verification Failed' });
    }
};

exports.getChallenge = async (req, res) => {
    try {
        const result = await javaClient.getChallenge();
        res.json(result);
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
};