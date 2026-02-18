const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');
// IMPORT MODULAR ENGINE
const PolicyEngine = require('../../utils/authPolicies');

exports.initiateTransaction = async (req, res) => {
    // 1. Input Detail Transaksi (Sesuai existing code Anda)
    const { amount, fromAccount, toAccount, description, type } = req.body;
    const userId = req.user.id;
    const channel = req.apiClient ? req.apiClient.type : 'MOBILE';

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        
        // Validasi Saldo
        if (Number(user.balance) < Number(amount)) {
            return res.status(400).json({ error: 'Insufficient Balance' });
        }

        // 2. Risk Calculation (Simulasi/Call Risk Engine)
        let riskScore = 10;
        if (amount > 5000000) riskScore = 80; // High Risk

        // 3. --- MENGGUNAKAN MODULAR POLICY ENGINE ---
        const segment = user.companyName ? 'CORPORATE' : 'CONSUMER';
        
        const decision = await PolicyEngine.evaluate({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION', // Action khusus transaksi
            riskScore: riskScore
        });

        // Data draft untuk dikembalikan ke client
        const transactionData = { amount, toAccount, description, type };

        if (decision.status === 'ALLOW') {
            return res.json({ 
                status: 'ready_to_execute', 
                risk: 'LOW', 
                data: transactionData 
            });
        } 
        else if (decision.status === 'CHALLENGE') {
            // Butuh Signing
            const challengeRes = await javaClient.getChallenge();
            
            return res.json({
                status: 'challenge_required',
                transactionData: transactionData,
                challenge: challengeRes.challenge,
                nextStep: decision.requirements[0] // e.g. "PIN", "BIO"
            });
        } 
        else {
            return res.status(403).json({ error: 'Transaction Blocked by Policy' });
        }

    } catch (err) {
        console.error("Trx Init Error:", err);
        res.status(500).json({ error: 'Transaction Init Failed' });
    }
};

exports.executeTransaction = async (req, res) => {
    // Logic eksekusi sama seperti sebelumnya (Verify Java -> Update DB)
    const { authType, signature, challenge, deviceId, otp, amount, transactionNo } = req.body;
    const userId = req.user.id;

    try {
        // Verify Signature
        const verifyRes = await javaClient.verifyUnifiedAuth({
            userId, deviceId, authType, challenge, signature, otp
        });

        if (verifyRes.status !== 'success') return res.status(401).json({ error: 'Invalid Signature' });

        // Execute DB Transaction
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
                    status: 'SUCCESS',
                    authMethod: authType,
                    riskScore: 0
                }
            })
        ]);
        
        await createRichAuthLog(req, { id: userId }, { eventType: 'TRX_SUCCESS', status: 'SUCCESS' });
        res.json({ status: 'success', transactionNo: newTrxNo });

    } catch (err) {
        res.status(500).json({ error: 'Execution Failed' });
    }
};