const bcrypt = require('bcrypt');
const prisma = require('../../config/db');
const { sendTokenCookie } = require('../../utils/jwt');
const { createRichAuthLog } = require('../../utils/richLogger');
const javaClient = require('../../services/JavaAuthClient');
const PolicyEngine = require('../../utils/authPolicies'); 
const RiskEngine = require('../../utils/riskEngine');
const { generateUserId } = require('../../utils/idGenerator');

exports.registerUser = async (req, res) => {
    const { email, password, fullName, mobile, companyName, cifNumber } = req.body;
    
    try {
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) return res.status(400).json({ error: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await prisma.user.create({
            data: {
                id: generateUserId(),
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
        
        //await createRichAuthLog(req, user, { eventType: 'REGISTER_SUCCESS', status: 'SUCCESS' });

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

exports.loginStep1 = async (req, res) => {
    // TANGKAP TELEMETRY UNTUK RISK ENGINE LOGIN
    const { email, cifNumber, deviceId, telemetry } = req.body;
    const channel = req.apiClient ? req.apiClient.channel : 'MOBILE'; 

    try {
        const user = await prisma.user.findUnique({ where: { email, cifNumber } });

        if (!user || !user.cifNumber) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';
        
        // PERBAIKAN: Hitung risiko login (Geo-Anomaly / New Device)
        const riskContext = {
            userId: user.id, email: user.email, userSegment: segment, channel: channel,
            amount: 0, currency: 'MYR', ipAddress: req.ip,
            deviceId: deviceId || 'unknown',
            telemetry: telemetry || {}
        };

        const riskResult = await RiskEngine.calculateRisk(riskContext);
        console.log(`[LOGIN] User: ${user.email} | Risk Score: ${riskResult.score}`);

        const policyResult = await PolicyEngine.evaluateAuthPolicy({
            segment: segment,
            channel: channel,
            action: 'LOGIN',
            riskScore: riskResult.score // DINAMIS DARI DATABASE!
        });

        const decision = policyResult.decision;

        if (decision.status === 'APPROVED') {
            sendTokenCookie(res, user);
            //await createRichAuthLog(req, user, { eventType: 'LOGIN_SUCCESS', status: 'SUCCESS', riskScore: riskResult.score });
            return res.json({ status: 'complete', userId: user.id });
        } 
        else if (decision.status === 'CHALLENGED') {
            //await createRichAuthLog(req, user, { eventType: 'LOGIN_CHALLENGE', status: 'CHALLENGED', riskScore: riskResult.score });
            
            // ---> TAMBAHKAN 1 BARIS INI <---
            const challengeRes = await javaClient.getUnifiedChallenge();

            return res.json({
                status: 'challenge_required',
                userId: user.id,
                // ---> TAMBAHKAN 1 BARIS INI <---
                challenge: challengeRes.challenge || challengeRes, 
                allowedMethods: decision.allowedMethods, 
                requirements: decision.requirements,     
                message: 'Additional verification required based on current security policy'
            });
        }
        else {
            await createRichAuthLog(req, user, { eventType: 'LOGIN_BLOCKED', status: 'BLOCKED', riskScore: riskResult.score });
            return res.status(403).json({ error: 'Login Denied by Policy' });
        }
    } catch (err) { res.status(500).json({ error: 'System Error' }); }
};

exports.verifyMfa = async (req, res) => {
    const { userId, authType, challenge, signature, otp, deviceId } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const result = await javaClient.verifyUnifiedAuth({
            userId, deviceId, authType, challenge, signature, otp
        });

        if (result.status !== 'success') throw new Error('Invalid Signature/OTP');

        sendTokenCookie(res, user);
        //await createRichAuthLog(req, user, { eventType: 'LOGIN_MFA', status: 'SUCCESS', authMethod: authType });

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