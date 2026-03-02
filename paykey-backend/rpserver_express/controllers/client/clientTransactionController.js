const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');

// IMPORT DUA ENGINE UTAMA
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
        
        // 1. Validasi Saldo
        // if (Number(user.balance) < Number(amount)) {
        //     return res.status(400).json({ error: 'Insufficient Balance' });
        // }

        // 2. HITUNG RISK SCORE (Menggunakan Engine di Utils)
        // RiskEngine butuh data konteks lengkap
        const riskContext = {
            userId: user.id,
            email: user.email,
            amount: Number(amount),
            currency: 'MYR',
            ipAddress: ipAddress,
            deviceId: req.body.deviceId || 'unknown',
            beneficiaryAccount: toAccount
        };

        // Output: { score: 85, factors: ['High Amount', 'New Beneficiary'] }
        const riskResult = await RiskEngine.calculateRisk(riskContext);
        console.log(`[TRX] User: ${user.email} | Risk Score: ${riskResult.score}`);

        // 3. EVALUASI POLICY (Berdasarkan Score dari Risk Engine)
        const segment = user.companyName ? 'CORPORATE' : 'CONSUMER';
        
        const policyDecision = await PolicyEngine.evaluate({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION',
            riskScore: riskResult.score // Integrasi Risk -> Policy
        });

        // 4. PREPARE RESPONSE
        const transactionDraft = { amount, toAccount, description, type };

        if (policyDecision.status === 'ALLOW') {
            // Low Risk: Boleh langsung eksekusi
            return res.json({ 
                status: 'ready_to_execute', 
                riskScore: riskResult.score,
                riskFactors: riskResult.factors,
                data: transactionDraft 
            });
        } 
        else if (policyDecision.status === 'CHALLENGE') {
            // High Risk: Butuh Signing (PIN/Bio)
            const challengeRes = await javaClient.getChallenge();
            
            return res.json({
                status: 'challenge_required',
                riskScore: riskResult.score,
                transactionData: transactionDraft,
                challenge: challengeRes.challenge,
                nextStep: policyDecision.requirements[0] // e.g. "PIN"
            });
        } 
        else {
            // Critical Risk: Blokir
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
        amount, fromAccount, toAccount, description, type, // Data Transaksi
        authType, signature, challenge, deviceId, otp,     // Bukti Auth
        riskScore, transactionNo                           // Metadata
    } = req.body;
    
    const userId = req.user.id;

    try {
        // 1. Verifikasi Signature ke Java Server (Security Core)
        const verifyRes = await javaClient.verifyUnifiedAuth({
            userId, deviceId, authType, challenge, signature, otp
        });

        if (verifyRes.status !== 'success') {
            return res.status(401).json({ error: 'Invalid Transaction Signature' });
        }

        // 2. Eksekusi DB (Atomic)
        const newTrxNo = transactionNo || `TRX-${Date.now()}`;
        
        await prisma.$transaction([
            // Kurangi Saldo
            prisma.user.update({
                where: { id: userId },
                data: { balance: { decrement: amount } }
            }),
            // Catat History Transaksi
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
        
        // 3. Log Audit
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