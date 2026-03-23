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
    const { mobile, cifNumber, deviceId, telemetry } = req.body;
    const channel = req.apiClient ? req.apiClient.channel : 'MOBILE'; 

    try {
        const user = await prisma.user.findUnique({ where: { mobile, cifNumber } });

        if (!user || !user.cifNumber) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';
        


        const policyResult = await PolicyEngine.evaluateAuthPolicy({
            segment: segment,
            channel: channel,
            action: 'LOGIN',
            riskScore: 10
        });

        const decision = policyResult.decision;

        if (decision.status === 'APPROVED') {
            sendTokenCookie(res, user);
            return res.json({ status: 'complete', userId: user.id });
        } 
        else if (decision.status === 'CHALLENGED') {
            
            const challengeRes = await javaClient.getUnifiedChallenge();

            return res.json({
                status: 'challenge_required',
                userId: user.id,
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

exports.getAvailableEnrollmentMethods = async (req, res) => {
  try {
    const channel = req.apiClient.channel.toUpperCase(); 
    const segment = req.apiClient.consumerType.toUpperCase();

    const policies = await prisma.authPolicy.findMany({
      where: {
        channel: channel,
        segment: segment
      }
    });

    console.log(`[Policy Fetch] Channel: ${channel}, Segment: ${segment}, Policies Found: ${policies.length}`);

    console.log("Policies Detail:", policies.map(p => ({
        id: p.id,
        channel: p.channel,
        segment: p.segment,
        action: p.action,
        condition: JSON.stringify(p.condition),
        metadata: JSON.stringify(p.metadata)
    })));

    const methodSet = new Set();
    
    policies.forEach(policy => {
      let conditions = {};
      
      try {
        if (policy.condition) {
          conditions = typeof policy.condition === 'string' ? JSON.parse(policy.condition) : policy.condition;
          if (typeof conditions === 'string') conditions = JSON.parse(conditions);
        } else if (policy.metadata) {
          conditions = typeof policy.metadata === 'string' ? JSON.parse(policy.metadata) : policy.metadata;
          if (typeof conditions === 'string') conditions = JSON.parse(conditions);
        }
      } catch (err) {
        console.error("Gagal parsing JSON condition:", err);
      }

      const stepUpMethods = conditions.stepUpMethods || conditions.allowedMethods || [];
      
      stepUpMethods.forEach(method => methodSet.add(method.toLowerCase()));
    });

    let availableMethods = Array.from(methodSet);
    
    if (availableMethods.length === 0) {
      availableMethods = ['fido2', 'email_otp', 'totp_soft']; 
    }

    res.json({ 
        success: true, 
        clientApp: req.apiClient.name,
        channelDetected: channel, 
        data: availableMethods 
    });

  } catch (error) {
    console.error("Fetch Available Methods Error:", error);
    res.status(500).json({ error: "Failed to fetch enrollment methods" });
  }
};