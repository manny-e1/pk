const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');

const RiskEngine = require('../../utils/riskEngine'); 
const PolicyEngine = require('../../utils/authPolicies');

exports.initiateTransaction = async (req, res) => {
    const { amount, fromAccount, toAccount, description, type } = req.body;
    const userId = req.user.id;
    const channel = req.apiClient ? req.apiClient.type : 'MOBILE';
    const ipAddress = req.ip;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        
        if (Number(user.balance) < Number(amount)) {
            return res.status(400).json({ error: 'Insufficient Balance' });
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

        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';
        
        const policyResult = await PolicyEngine.evaluateAuthPolicy({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION',
            riskScore: riskResult.score
        });

        const policyDecision = policyResult.decision;

        const transactionDraft = { amount, toAccount, description, type };

        if (policyDecision.status === 'APPROVED') {
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', 
                status: 'APPROVED',
                riskScore: riskResult.score,
                metadata: { toAccount, amount, decision: 'AUTO_APPROVED' }
            });

            return res.json({ 
                status: 'ready_to_execute', 
                riskScore: riskResult.score,
                riskFactors: riskResult.factors,
                data: transactionDraft 
            });
        } 
        else if (policyDecision.status === 'CHALLENGED') {
            const challengeRes = await javaClient.getChallenge();
            
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', 
                status: 'CHALLENGED',
                riskScore: riskResult.score,
                metadata: { 
                    toAccount, 
                    amount, 
                    requestedMethods: policyDecision.allowedMethods 
                }
            });

            return res.json({
                status: 'challenge_required',
                riskScore: riskResult.score,
                transactionData: transactionDraft,
                challenge: challengeRes.challenge,
                allowedMethods: policyDecision.allowedMethods, 
                requirements: policyDecision.requirements,
                message: 'Transaction requires step-up authentication'
            });
        } 
        else {
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', 
                status: 'BLOCKED',
                failureReason: 'Blocked by Risk/Policy Engine',
                riskScore: riskResult.score,
                metadata: { toAccount, amount }
            });

            return res.status(403).json({ error: 'Transaction Blocked due to High Risk or Policy' });
        }

    } catch (err) {
        console.error("Trx Init Error:", err);
        res.status(500).json({ error: 'Transaction Initialization Failed' });
    }
};