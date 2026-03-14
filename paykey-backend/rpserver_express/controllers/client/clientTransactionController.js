

// /**
//  * @file clientTransactionController.js
//  * @description Controller khusus untuk SDK. Berfungsi murni untuk Analisa Risiko 
//  * dan Pencatatan Riwayat (tanpa memotong saldo finansial).
//  */

// const prisma = require('../../config/db');
// const javaClient = require('../../services/JavaAuthClient');
// const { createRichAuthLog } = require('../../utils/richLogger');

// const RiskEngine = require('../../utils/riskEngine'); 
// const PolicyEngine = require('../../utils/authPolicies');

// exports.initiateTransaction = async (req, res) => {
//     // 1. Tangkap Payload dari SDK (Sesuai kebutuhan Risk Engine)
//     const { 
//         email, cifNumber, 
//         amount, currency, 
//         beneficiaryAccount, merchantName, 
//         description, type, telemetry 
//     } = req.body;
    
//     // Deteksi Channel dari API Key (Web/Mobile)
//     const channel = req.apiClient ? req.apiClient.channel : 'MOBILE';
//     const ipAddress = req.ip;

//     try {
//         // Validasi input dasar
//         if (!email || !cifNumber || !amount || !currency) {
//             return res.status(400).json({ error: "Missing required fields (email, cifNumber, amount, currency)" });
//         }

//         // 2. Sinkronisasi Identitas User
//         const user = await prisma.user.findUnique({ 
//             where: { email: email.toLowerCase() } 
//         });

//         if (!user || user.cifNumber !== cifNumber) {
//             return res.status(401).json({ error: 'User not found or CIF mismatch' });
//         }

//         const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';

//         // 3. Susun Konteks Risiko (TANPA HARDCODE)
//         const riskContext = {
//             userId: user.id,
//             email: user.email,
//             userSegment: segment,
//             channel: channel,
//             amount: Number(amount),
//             currency: currency.toUpperCase(), // Dinamis dari Client SDK
//             ipAddress: ipAddress,
//             deviceId: telemetry?.device_id || 'unknown',
//             beneficiaryAccount: beneficiaryAccount || null,
//             merchantName: merchantName || null,
//             telemetry: telemetry || {} 
//         };

//         // 4. Kalkulasi Risiko oleh Risk Engine
//         const riskResult = await RiskEngine.calculateRisk(riskContext);
//         console.log(`[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`);

//         // 5. Evaluasi Kebijakan berdasarkan Skor
//         const policyResult = await PolicyEngine.evaluateAuthPolicy({
//             segment: segment,
//             channel: channel,
//             action: 'TRANSACTION',
//             riskScore: riskResult.score
//         });

//         const policyDecision = policyResult.decision;
        
//         // Draft data transaksi untuk dikembalikan ke SDK
//         const transactionDraft = { amount, currency, beneficiaryAccount, merchantName, description, type };

//         // =========================================================
//         // 6. KEPUTUSAN FINAL KE SDK
//         // =========================================================
//         if (policyDecision.status === 'APPROVED') {
//             await createRichAuthLog(req, user, { 
//                 eventType: 'TRANSACTION_INIT', status: 'APPROVED',
//                 riskScore: riskResult.score, 
//                 metadata: { beneficiaryAccount, merchantName, amount, currency, decision: 'AUTO_APPROVED', factors: riskResult.factors }
//             });

//             return res.json({ 
//                 status: 'ready_to_execute', 
//                 riskScore: riskResult.score, 
//                 riskFactors: riskResult.factors, 
//                 data: transactionDraft 
//             });
//         } 
//         else if (policyDecision.status === 'CHALLENGED') {
//             // Minta String Challenge Acak dari Java Server untuk ditandatangani oleh HP
//             const challengeRes = await javaClient.getUnifiedChallenge();
            
//             await createRichAuthLog(req, user, { 
//                 eventType: 'TRANSACTION_INIT', status: 'CHALLENGED',
//                 riskScore: riskResult.score, 
//                 metadata: { beneficiaryAccount, merchantName, amount, currency, requestedMethods: policyDecision.allowedMethods, factors: riskResult.factors }
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
//                 eventType: 'TRANSACTION_INIT', status: 'BLOCKED', failureReason: 'Blocked by Risk Policy',
//                 riskScore: riskResult.score, metadata: { beneficiaryAccount, merchantName, amount, currency, factors: riskResult.factors }
//             });
//             return res.status(403).json({ error: 'Transaction Blocked due to High Risk or Policy' });
//         }
//     } catch (err) { 
//         console.error("Init Trx Error:", err);
//         res.status(500).json({ error: 'Transaction Initialization Failed' }); 
//     }
// };

// /**
//  * @description Fungsi ini TIDAK memotong saldo. 
//  * Dipanggil oleh SDK APABILA transaksi di server utama mereka telah berhasil,
//  * agar Risk Engine kita bisa "belajar" dan mencatat riwayat (Velocity & Trust Beneficiary).
//  */
// exports.executeTransaction = async (req, res) => {
//     const { 
//         email, cifNumber, 
//         amount, currency, 
//         beneficiaryAccount, merchantName, 
//         description, type, status 
//     } = req.body;
    
//     try {
//         const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
//         if (!user || user.cifNumber !== cifNumber) {
//             return res.status(401).json({ error: 'User not found or CIF mismatch' });
//         }

//         // Catat transaksi di database HANYA sebagai "Log Pembelajaran" untuk Risk Engine
//         const newTrx = await prisma.transaction.create({
//             data: {
//                 userId: user.id,
//                 type: type || 'TRANSFER',
//                 amount: Number(amount),
//                 toAccount: beneficiaryAccount || merchantName || 'Unknown',
//                 merchantName: merchantName || null,
//                 description: description || `Trx to ${beneficiaryAccount || merchantName}`,
//                 status: status || 'SUCCESS', 
//                 riskScore: req.body.riskScore || 0,
//                 riskLevel: req.body.riskLevel || 'LOW'
//             }
//         });

//         await createRichAuthLog(req, user, { 
//             eventType: 'TRANSACTION_RECORDED', 
//             status: status || 'SUCCESS',
//             metadata: { transactionId: newTrx.id, beneficiaryAccount, merchantName, amount, currency }
//         });

//         res.json({
//             success: true,
//             message: 'Transaction Record Saved to Risk Engine',
//             data: {
//                 transactionId: newTrx.id,
//                 recordedStatus: newTrx.status
//             }
//         });

//     } catch (err) {
//         console.error("Execute Transaction Error:", err);
//         res.status(500).json({ error: 'Failed to record transaction history' });
//     }
// };



/**
 * @file clientTransactionController.js
 * @description Controller khusus untuk SDK. Berfungsi murni untuk Analisa Risiko 
 * dan Pencatatan Riwayat (tanpa memotong saldo finansial).
 */

const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');
const { createRichAuthLog } = require('../../utils/richLogger');
const { customAlphabet } = require('nanoid');

const RiskEngine = require('../../utils/riskEngine'); 
const PolicyEngine = require('../../utils/authPolicies');

const generatePaymentId = () => `PAY_TX_${customAlphabet('0123456789ABCDEF', 10)()}`;

function getEventDescription(status) {
    switch (status) {
        case 'APPROVED': return 'Payment Risk Approved';
        case 'BLOCKED': return 'Payment Denied';
        case 'CHALLENGED': return 'Approval Requested';
        default: return 'Payment Initiated';
    }
}

// HELPER: Mengamankan data agar selalu berbentuk String Teks (Mencegah Crash Frontend)
const safeStringify = (val) => {
    if (!val) return "Unknown";
    if (typeof val === 'string') return val;
    if (typeof val === 'object') {
        return val.name || val.reason || val.description || val.rule || "Risk Factor";
    }
    return String(val);
};

exports.initiateTransaction = async (req, res) => {
    const { 
        email, cifNumber, amount, currency, beneficiaryAccount, 
        merchantName, description, type, telemetry 
    } = req.body;
    
    const channel = req.apiClient ? req.apiClient.channel : 'MOBILE';
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip;

    try {
        if (!email || !cifNumber || !amount || !currency) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user || user.cifNumber !== cifNumber) {
            return res.status(401).json({ error: 'User not found or CIF mismatch' });
        }

        const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';

        const riskContext = {
            userId: user.id, email: user.email, userSegment: segment, channel: channel,
            amount: Number(amount), currency: currency.toUpperCase(),
            ipAddress: ipAddress, deviceId: telemetry?.device_model || 'unknown',
            beneficiaryAccount: beneficiaryAccount || null, merchantName: merchantName || null,
            telemetry: telemetry || {} 
        };

        const riskResult = await RiskEngine.calculateRisk(riskContext);
        console.log(`[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`);

        const policyResult = await PolicyEngine.evaluateAuthPolicy({
            segment: segment,
            channel: channel,
            action: 'TRANSACTION',
            riskScore: riskResult.score
        });

        const policyDecision = policyResult.decision;
        const transactionDraft = { amount, currency, beneficiaryAccount, merchantName, description, type };
        const trackingId = generatePaymentId(); 

        // =========================================================
        // PENGGABUNGAN KEAMANAN (INTERSECTION)
        // =========================================================
        let finalMethods = policyDecision.allowedMethods || [];
        const amountMandatedMethods = riskResult.amountMandatedMethods || [];

        // 1. Jika tabel limit nominal mewajibkan step-up
        if (amountMandatedMethods.length > 0) {
            policyDecision.status = 'CHALLENGED'; // Paksa minta verifikasi
            if (finalMethods.length === 0) {
                finalMethods = amountMandatedMethods;
            } else {
                // IRISAN: Coret metode dari Policy yang tidak diizinkan oleh aturan Nominal
                finalMethods = finalMethods.filter(method => amountMandatedMethods.includes(method));
            }
        }

        // 2. Evaluasi Pemblokiran Mutlak
        let responseMessage = "Transaction Auto-Approved";
        
        if (riskResult.level === 'CRITICAL' || riskResult.isBlockedByAmount || policyDecision.status === 'REJECTED') {
            policyDecision.status = 'BLOCKED';
            responseMessage = "Transaction Blocked due to Critical Risk or Limits";
        } else if (policyDecision.status === 'CHALLENGED') {
            if (finalMethods.length === 0) {
                // Jika hasil irisan kosong (Misal: Policy cuma izinkan OTP, tapi Nominal mewajibkan FIDO2)
                policyDecision.status = 'BLOCKED';
                responseMessage = "Blocked: Conflicting Security Policies";
            } else {
                responseMessage = "Step-Up Authentication Required";
            }
        }
        
        policyDecision.allowedMethods = finalMethods;

        // Format tags untuk logging
        const factorTags = (riskResult.factors || []).map(f => ({ label: safeStringify(f), class: 'warning' }));
        const combinedTags = [{ label: `${amount} ${currency.toUpperCase()}`, class: 'info' }, ...factorTags];

        const baseLogData = {
            paymentId: trackingId,
            telemetry: telemetry || {},
            amount: Number(amount),
            currency: currency.toUpperCase(),
            merchant: merchantName || beneficiaryAccount || "Unknown",
            tags: combinedTags,
            factors: riskResult.factors
        };

        // =========================================================
        // KEPUTUSAN FINAL KE SDK
        // =========================================================
        if (policyDecision.status === 'APPROVED') {
            await createRichAuthLog(req, user, { 
                eventType: getEventDescription('APPROVED'), status: 'APPROVED',
                riskScore: riskResult.score, message: "Transaction Auto-Approved",
                data: baseLogData 
            });

            return res.json({ 
                status: 'ready_to_execute', transactionId: trackingId,
                riskScore: riskResult.score, riskFactors: riskResult.factors, data: transactionDraft 
            });
        } 
        else if (policyDecision.status === 'CHALLENGED') {
            const challengeRes = await javaClient.getUnifiedChallenge();
            
            await createRichAuthLog(req, user, { 
                eventType: getEventDescription('CHALLENGED'), status: 'CHALLENGED',
                riskScore: riskResult.score, message: "Step-Up Authentication Required",
                data: { ...baseLogData, requestedMethods: policyDecision.allowedMethods }
            });

            return res.json({
                status: 'challenge_required', transactionId: trackingId, riskScore: riskResult.score,
                transactionData: transactionDraft, challenge: challengeRes.challenge || challengeRes,
                allowedMethods: policyDecision.allowedMethods, requirements: policyDecision.requirements,
                message: 'Transaction requires step-up authentication'
            });
        } 
        else {
            await createRichAuthLog(req, user, { 
                eventType: getEventDescription('BLOCKED'), status: 'BLOCKED', 
                riskScore: riskResult.score, message: 'Transaction Blocked due to High Risk or Policy',
                data: baseLogData
            });
            return res.status(403).json({ error: 'Transaction Blocked due to High Risk or Policy' });
        }
    } catch (err) { 
        console.error("Init Trx Error:", err);
        res.status(500).json({ error: 'Transaction Initialization Failed' }); 
    }
};



/**
 * @description Fungsi ini dipanggil SDK SETELAH transaksi sukses di sisi klien.
 * Akan secara cerdas MENCARI log 'Challenged' terakhir dan MENGGABUNGKANNYA (Update)
 * agar menjadi 1 log utuh dengan status SUCCESS dan Telemetry lengkap.
 */
exports.executeTransaction = async (req, res) => {
    const { 
        email, cifNumber, amount, currency, beneficiaryAccount, merchantName, 
        description, type, status, riskScore, riskLevel
    } = req.body;
    
    try {
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user || user.cifNumber !== cifNumber) {
            return res.status(401).json({ error: 'User not found or CIF mismatch' });
        }

        // 1. CARI LOG TERAKHIR (Dalam 5 menit terakhir)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const recentLogs = await prisma.authLog.findMany({
            where: { 
                email: user.email, 
                status: 'CHALLENGED',
                createdAt: { gte: fiveMinutesAgo }
            },
            orderBy: { createdAt: 'desc' },
            take: 1
        });

        let finalTransactionId = generatePaymentId(); 

        // 2. CATAT TRANSAKSI FINANSIAL KE TABEL 'TRANSACTION'
        const newTrx = await prisma.transaction.create({
            data: {
                id: finalTransactionId, 
                transactionNo: finalTransactionId, 
                userId: user.id, 
                type: type || 'TRANSFER',
                amount: Number(amount), 
                currency: currency || 'IDR',
                toAccount: beneficiaryAccount || merchantName || 'Unknown',
                merchantName: merchantName || null,
                description: description || `Trx to ${beneficiaryAccount || merchantName}`,
                status: status || 'SUCCESS', 
                authResult: 'SUCCESS',
                riskScore: riskScore || 0, 
                riskLevel: riskLevel || 'LOW', 
                timestamp: new Date()
            }
        });

        // 3. UPDATE LOG AUTHENTIKASI MENJADI SATU KESATUAN (MENCEGAH DOUBLE LOG)
        if (recentLogs.length > 0) {
            const targetLog = recentLogs[0];
            
            // Auto-deteksi nama kolom JSON di database Anda (data / riskTags / metadata)
            let jsonColumn = 'data';
            if (targetLog.riskTags !== undefined) jsonColumn = 'riskTags';
            else if (targetLog.metadata !== undefined) jsonColumn = 'metadata';

            const existingJson = typeof targetLog[jsonColumn] === 'object' ? targetLog[jsonColumn] : {};
            const oldTags = existingJson.tags || [];
            
            // Bersihkan tag 'warning' dan tambahkan tag 'Sukses'
            const newTags = [
                ...oldTags.filter(t => t.class !== 'warning'),
                { label: 'Step-Up Verified (FIDO2/PIN)', class: 'success' }
            ];

            // PERBAIKAN: Hapus root `message` dan masukkan ke dalam JSON payload
            await prisma.authLog.update({
                where: { id: targetLog.id },
                data: {
                    status: status === 'SUCCESS' ? 'SUCCESS' : 'FAILED',
                    eventType: 'Payment Approved',
                    [jsonColumn]: {
                        ...existingJson,
                        paymentId: finalTransactionId,
                        transactionNo: finalTransactionId,
                        tags: newTags,
                        message: 'Transaction executed and verified successfully' // Dipindah ke dalam JSON
                    }
                }
            });
            
        } else {
            // FALLBACK: Untuk transaksi "LOW RISK" yang tidak melewati status 'CHALLENGED'
            await createRichAuthLog(req, user, { 
                eventType: 'Payment Approved', 
                status: status || 'SUCCESS',
                riskScore: riskScore || 0, 
                message: "Transaction executed smoothly",
                data: { 
                    paymentId: newTrx.id, 
                    transactionNo: newTrx.transactionNo,
                    merchant: merchantName || beneficiaryAccount, 
                    amount: Number(amount), 
                    currency: currency, 
                    tags: [{ label: `${amount} ${currency.toUpperCase()}`, class: 'success' }]
                }
            });
        }

        res.json({
            success: true, 
            message: 'Transaction Record Saved and Log Updated',
            data: { transactionId: newTrx.id, transactionNo: newTrx.transactionNo, recordedStatus: newTrx.status }
        });

    } catch (err) {
        console.error("Execute Transaction Error:", err);
        res.status(500).json({ error: 'Failed to record transaction history' });
    }
};