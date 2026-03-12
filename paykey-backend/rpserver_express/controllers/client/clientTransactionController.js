const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');

const RiskEngine = require('../../utils/riskEngine'); 
const PolicyEngine = require('../../utils/authPolicies');

/**
 * 1. INITIATE TRANSACTION
 * Alur: Input -> Validasi -> Risk Engine -> Policy Engine -> Response
 */
exports.initiateTransaction = async (req, res) => {
    const { amount, fromAccount, toAccount, description, type } = req.body;
    const userId = req.user.id;
    const channel = req.apiClient ? req.apiClient.type : 'MOBILE';
    const ipAddress = req.ip;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        
        if (user.status === 'suspended') {
             await createRichAuthLog(req, user, {
                eventType: 'Transaction Blocked',
                status: 'BLOCKED',
                authMethod: 'TRANSACTION',
                message: 'Transaction blocked due to suspended account',
                data: {
                    amount: Number(amount),
                    tags: [{ label: 'Account Suspended', class: 'error' }]
                }
            });
            return res.status(403).json({ error: "Account Suspended: Transactions are blocked." });
        }

        const riskContext = {
            userId: user.id,
            email: user.email,
            amount: Number(amount),
            currency: 'MYR',
            ipAddress: ipAddress,
            deviceId: req.body.deviceId || 'unknown',
            beneficiaryAccount: toAccount
        };

        const riskResult = await RiskEngine.calculateRisk(riskContext);
        console.log(`[TRX] User: ${user.email} | Risk Score: ${riskResult.score}`);

        const segment = user.companyName ? 'CORPORATE' : 'CONSUMER';
        
        const policyDecision = await PolicyEngine.evaluate({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION',
            riskScore: riskResult.score
        });

        const transactionDraft = { amount, toAccount, description, type };

        if (policyDecision.status === 'ALLOW') {
            return res.json({ 
                status: 'ready_to_execute', 
                riskScore: riskResult.score,
                riskFactors: riskResult.factors,
                data: transactionDraft 
            });
        } 
        else if (policyDecision.status === 'CHALLENGE') {
            const challengeRes = await javaClient.getChallenge();
            
            return res.json({
                status: 'challenge_required',
                riskScore: riskResult.score,
                transactionData: transactionDraft,
                challenge: challengeRes.challenge,
                nextStep: policyDecision.requirements[0]
            });
        } 
        else {
            return res.status(403).json({ error: 'Transaction Blocked due to High Risk' });
        }

    } catch (err) {
        console.error("Trx Init Error:", err);
        res.status(500).json({ error: 'Transaction Initialization Failed' });
    }
};

/**
 * 2. EXECUTE TRANSACTION
 * Verifikasi Signature -> Mutasi Saldo -> Catat Log
 */
exports.executeTransaction = async (req, res) => {
    const { 
        amount, fromAccount, toAccount, description, type,
        authType, signature, challenge, deviceId, otp,
        riskScore, transactionNo
    } = req.body;
    
    const userId = req.user.id;

    if (deviceId) {
        const userKey = await prisma.userKey.findFirst({ 
            where: { 
                OR: [
                    { credentialId: deviceId },
                    { id: isNaN(deviceId) ? undefined : parseInt(deviceId) }
                ]
            } 
        });
        
        if (userKey) {
            const status = (userKey.status || "").toLowerCase();
            if (status === 'suspended' || status === 'revoked') {
                await createRichAuthLog(req, { id: userId }, { 
                    eventType: `Transaction Blocked - Device ${status}`, 
                    status: 'BLOCKED',
                    authMethod: authType || 'TRANSACTION',
                    data: {
                        amount: Number(amount),
                        tags: [{ label: `Device ${status}`, class: 'error' }]
                    }
                });
                return res.status(403).json({ error: `Transaction blocked: Device is ${status}` });
            }
        }
    }

    try {
        const verifyRes = await javaClient.verifyUnifiedAuth({
            userId, deviceId, authType, challenge, signature, otp
        });

        if (verifyRes.status !== 'success') {
            return res.status(401).json({ error: 'Invalid Transaction Signature' });
        }

        const newTrxNo = transactionNo || `TRX-${Date.now()}`;
        
        await prisma.$transaction([
            prisma.user.update({
                where: { id: userId },
                data: { balance: { decrement: amount } }
            }),
            prisma.transaction.create({
                data: {
                    userId,
                    transactionNo: newTrxNo,
                    amount,
                    toAccount,
                    description,
                    type: type || 'TRANSFER',
                    status: 'SUCCESS',
                    authMethod: authType,
                    riskScore: Number(riskScore) || 0,
                    createdAt: new Date()
                }
            })
        ]);
        
        await createRichAuthLog(req, { id: userId }, { 
            eventType: 'TRANSACTION_SUCCESS', 
            status: 'SUCCESS',
            metadata: { transactionNo: newTrxNo, amount }
        });

        res.json({ status: 'success', transactionNo: newTrxNo });

    } catch (err) {
        console.error("Exec TRX Error:", err);
        res.status(500).json({ error: 'Transaction Execution Failed' });
    }
};