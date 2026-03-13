// const prisma = require('../../config/db');
// const javaClient = require('../../services/JavaAuthClient');
// const { createRichAuthLog } = require('../../utils/richLogger');

// const RiskEngine = require('../../utils/riskEngine'); 
// const PolicyEngine = require('../../utils/authPolicies');

// exports.initiateTransaction = async (req, res) => {
//     // TANGKAP TELEMETRY DARI SDK
//     const { amount, fromAccount, toAccount, description, type, telemetry } = req.body;
//     const userId = req.user.id;
//     const channel = req.apiClient ? req.apiClient.channel : 'MOBILE';
//     const ipAddress = req.ip;

//     try {
//         const user = await prisma.user.findUnique({ where: { id: userId } });
        
//         if (Number(user.balance) < Number(amount)) {
//             return res.status(400).json({ error: 'Insufficient Balance' });
//         }

//         const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';

//         // PERBAIKAN: Masukkan SEMUA konteks untuk Evaluator
//         const riskContext = {
//             userId: user.id,
//             email: user.email,
//             userSegment: segment,
//             channel: channel,
//             amount: Number(amount),
//             currency: 'MYR',
//             ipAddress: ipAddress,
//             deviceId: req.body.deviceId || 'unknown',
//             beneficiaryAccount: toAccount,
//             telemetry: telemetry || {} 
//         };

//         const riskResult = await RiskEngine.calculateRisk(riskContext);
//         console.log(`[TRX] User: ${user.email} | Risk Score: ${riskResult.score}`);

//         const policyResult = await PolicyEngine.evaluateAuthPolicy({
//             segment: segment,
//             channel: channel,
//             action: 'TRANSACTION',
//             riskScore: riskResult.score
//         });

//         const policyDecision = policyResult.decision;
//         const transactionDraft = { amount, toAccount, description, type };

//         if (policyDecision.status === 'APPROVED') {
//             await createRichAuthLog(req, user, { 
//                 eventType: 'TRANSACTION_INIT', status: 'APPROVED',
//                 riskScore: riskResult.score, metadata: { toAccount, amount, decision: 'AUTO_APPROVED', factors: riskResult.factors }
//             });
//             return res.json({ status: 'ready_to_execute', riskScore: riskResult.score, riskFactors: riskResult.factors, data: transactionDraft });
//         } 
//         else if (policyDecision.status === 'CHALLENGED') {
//             const challengeRes = await javaClient.getUnifiedChallenge();
//             await createRichAuthLog(req, user, { 
//                 eventType: 'TRANSACTION_INIT', status: 'CHALLENGED',
//                 riskScore: riskResult.score, metadata: { toAccount, amount, requestedMethods: policyDecision.allowedMethods, factors: riskResult.factors }
//             });

//             return res.json({
//                 status: 'challenge_required',
//                 riskScore: riskResult.score,
//                 transactionData: transactionDraft,
//                 challenge: challengeRes.challenge || challengeRes,
//                 allowedMethods: policyDecision.allowedMethods, 
//                 requirements: policyDecision.requirements,
//                 message: 'Transaction requires step-up authentication'
//             });
//         } 
//         else {
//             await createRichAuthLog(req, user, { 
//                 eventType: 'TRANSACTION_INIT', status: 'BLOCKED', failureReason: 'Blocked by Risk Engine',
//                 riskScore: riskResult.score, metadata: { toAccount, amount, factors: riskResult.factors }
//             });
//             return res.status(403).json({ error: 'Transaction Blocked due to High Risk' });
//         }
//     } catch (err) { res.status(500).json({ error: 'Transaction Initialization Failed' }); }
// };

/**
 * @file clientTransactionController.js
 * @description Controller khusus untuk SDK. Berfungsi murni untuk Analisa Risiko 
 * dan Pencatatan Riwayat (tanpa memotong saldo finansial).
 */

const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');

const RiskEngine = require('../../utils/riskEngine'); 
const PolicyEngine = require('../../utils/authPolicies');

exports.initiateTransaction = async (req, res) => {
    // 1. Tangkap Payload dari SDK (Sesuai kebutuhan Risk Engine)
    const { 
        email, cifNumber, 
        amount, currency, 
        beneficiaryAccount, merchantName, 
        description, type, telemetry 
    } = req.body;
    
    // Deteksi Channel dari API Key (Web/Mobile)
    const channel = req.apiClient ? req.apiClient.channel : 'MOBILE';
    const ipAddress = req.ip;

    try {
        // Validasi input dasar
        if (!email || !cifNumber || !amount || !currency) {
            return res.status(400).json({ error: "Missing required fields (email, cifNumber, amount, currency)" });
        }

        // 2. Sinkronisasi Identitas User
        const user = await prisma.user.findUnique({ 
            where: { email: email.toLowerCase() } 
        });

        if (!user || user.cifNumber !== cifNumber) {
            return res.status(401).json({ error: 'User not found or CIF mismatch' });
        }

        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';

        // 3. Susun Konteks Risiko (TANPA HARDCODE)
        const riskContext = {
            userId: user.id,
            email: user.email,
            userSegment: segment,
            channel: channel,
            amount: Number(amount),
            currency: currency.toUpperCase(), // Dinamis dari Client SDK
            ipAddress: ipAddress,
            deviceId: telemetry?.device_id || 'unknown',
            beneficiaryAccount: beneficiaryAccount || null,
            merchantName: merchantName || null,
            telemetry: telemetry || {} 
        };

        // 4. Kalkulasi Risiko oleh Risk Engine
        const riskResult = await RiskEngine.calculateRisk(riskContext);
        console.log(`[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`);

        // 5. Evaluasi Kebijakan berdasarkan Skor
        const policyResult = await PolicyEngine.evaluateAuthPolicy({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION',
            riskScore: riskResult.score
        });

        const policyDecision = policyResult.decision;
        
        // Draft data transaksi untuk dikembalikan ke SDK
        const transactionDraft = { amount, currency, beneficiaryAccount, merchantName, description, type };

        // =========================================================
        // 6. KEPUTUSAN FINAL KE SDK
        // =========================================================
        if (policyDecision.status === 'APPROVED') {
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', status: 'APPROVED',
                riskScore: riskResult.score, 
                metadata: { beneficiaryAccount, merchantName, amount, currency, decision: 'AUTO_APPROVED', factors: riskResult.factors }
            });

            return res.json({ 
                status: 'ready_to_execute', 
                riskScore: riskResult.score, 
                riskFactors: riskResult.factors, 
                data: transactionDraft 
            });
        } 
        else if (policyDecision.status === 'CHALLENGED') {
            // Minta String Challenge Acak dari Java Server untuk ditandatangani oleh HP
            const challengeRes = await javaClient.getUnifiedChallenge();
            
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', status: 'CHALLENGED',
                riskScore: riskResult.score, 
                metadata: { beneficiaryAccount, merchantName, amount, currency, requestedMethods: policyDecision.allowedMethods, factors: riskResult.factors }
            });

            return res.json({
                status: 'challenge_required',
                riskScore: riskResult.score,
                transactionData: transactionDraft,
                challenge: challengeRes.challenge || challengeRes,
                allowedMethods: policyDecision.allowedMethods, 
                requirements: policyDecision.requirements,
                message: 'Transaction requires step-up authentication'
            });
        } 
        else {
            await createRichAuthLog(req, user, { 
                eventType: 'TRANSACTION_INIT', status: 'BLOCKED', failureReason: 'Blocked by Risk Policy',
                riskScore: riskResult.score, metadata: { beneficiaryAccount, merchantName, amount, currency, factors: riskResult.factors }
            });
            return res.status(403).json({ error: 'Transaction Blocked due to High Risk or Policy' });
        }
    } catch (err) { 
        console.error("Init Trx Error:", err);
        res.status(500).json({ error: 'Transaction Initialization Failed' }); 
    }
};

/**
 * @description Fungsi ini TIDAK memotong saldo. 
 * Dipanggil oleh SDK APABILA transaksi di server utama mereka telah berhasil,
 * agar Risk Engine kita bisa "belajar" dan mencatat riwayat (Velocity & Trust Beneficiary).
 */
exports.executeTransaction = async (req, res) => {
    const { 
        email, cifNumber, 
        amount, currency, 
        beneficiaryAccount, merchantName, 
        description, type, status 
    } = req.body;
    
    try {
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user || user.cifNumber !== cifNumber) {
            return res.status(401).json({ error: 'User not found or CIF mismatch' });
        }

        // Catat transaksi di database HANYA sebagai "Log Pembelajaran" untuk Risk Engine
        const newTrx = await prisma.transaction.create({
            data: {
                userId: user.id,
                type: type || 'TRANSFER',
                amount: Number(amount),
                toAccount: beneficiaryAccount || merchantName || 'Unknown',
                merchantName: merchantName || null,
                description: description || `Trx to ${beneficiaryAccount || merchantName}`,
                status: status || 'SUCCESS', 
                riskScore: req.body.riskScore || 0,
                riskLevel: req.body.riskLevel || 'LOW'
            }
        });

        await createRichAuthLog(req, user, { 
            eventType: 'TRANSACTION_RECORDED', 
            status: status || 'SUCCESS',
            metadata: { transactionId: newTrx.id, beneficiaryAccount, merchantName, amount, currency }
        });

        res.json({
            success: true,
            message: 'Transaction Record Saved to Risk Engine',
            data: {
                transactionId: newTrx.id,
                recordedStatus: newTrx.status
            }
        });

    } catch (err) {
        console.error("Execute Transaction Error:", err);
        res.status(500).json({ error: 'Failed to record transaction history' });
    }
};