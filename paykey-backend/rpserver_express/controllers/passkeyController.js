const prisma = require('../config/db');
const { createClient } = require('redis');
const { sendTokenCookie } = require('../utils/jwt');
const fidoService = require('../services/fidoService');
const { createRichAuthLog } = require('../utils/richLogger');
const { evaluateAuthPolicy } = require('../utils/authPolicies/index');

const RP_ID = process.env.RP_ID || 'localhost';
const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://:redispass@localhost:6379' });
(async () => { 
    try { await redisClient.connect(); } 
    catch (e) { console.error("[Redis] Error:", e.message); }
})();

// ==========================================
// [PENTING] HELPER FUNCTIONS (JANGAN DIHAPUS)
// ==========================================

const saveContext = async (challenge, sessionId, context) => {
    await redisClient.set(`ctx:${challenge}`, JSON.stringify({ sessionId, ...context }), { EX: 300 });
};

const getContext = async (challenge) => {
    const data = await redisClient.get(`ctx:${challenge}`);
    return data ? JSON.parse(data) : null;
};

// Fungsi untuk menstandarkan input dari Android/Web
const normalizeCredential = (body) => {
    return body.serverPublicKeyCredential || body;
};

// Fungsi untuk mengambil data challenge dan origin dari signature user
const parseClientData = (body) => {
    try {
        const cred = normalizeCredential(body);
        const buffer = Buffer.from(cred.response.clientDataJSON, 'base64');
        return JSON.parse(buffer.toString('utf-8'));
    } catch (e) {
        return {};
    }
};

// ==========================================
// 1. FLOW REGISTER
// ==========================================
exports.registerStart = async (req, res) => {
    try {
        const { username } = req.body;
        let user = await prisma.user.findUnique({ where: { email: username } });
        if (!user) user = await prisma.user.create({ data: { email: username, fullName: username } });

        const result = await fidoService.initiateChallenge('REGISTRATION', user, RP_ID);
        if (result.status === 200) {
            await saveContext(result.data.challenge, result.data.sessionId, { purpose: 'REG', userId: user.id });
        }
        res.status(result.status).json(result.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.registerComplete = async (req, res) => {
    try {
        const credential = normalizeCredential(req.body);
        const clientData = parseClientData(req.body);
        const challenge = clientData.challenge;

        const context = await getContext(challenge);
        if (!context || context.purpose !== 'REG') return res.status(400).json({ error: "Sesi register expired" });

        const javaPayload = {
            serverPublicKeyCredential: {
                id: credential.id, type: credential.type, response: credential.response, extensions: credential.extensions
            },
            sessionId: context.sessionId, 
            rpId: RP_ID, 
            origin: clientData.origin, // Gunakan origin dinamis dari Android
            tokenBinding: null
        };

        const result = await fidoService.verifyResponse('REGISTRATION', javaPayload);

        if (result.status === 200) {
            // Hapus sesi di Redis setelah sukses
            await redisClient.del(`ctx:${challenge}`);
            
            const user = await prisma.user.findUnique({ where: { id: context.userId } });
            
            // Log Sukses menggunakan Rich Logger
            await createRichAuthLog(req, user, { 
                eventType: 'Passkey Registered', 
                status: 'SUCCESS',
                authMethod: 'FIDO2_PASSKEY',
                data: { 
                telemetry: req.body.device_telemetry,
                tags: [{ label: req.headers['x-client-type'] === 'MOBILE' ? 'Platform' : 'Hardware Key', class: 'success' }] 
            }
            });
        }

        res.status(result.status).json(result.data);

    } catch (err) {
        console.error("RegComplete Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// ==========================================
// 2. FLOW LOGIN (Authentication)
// ==========================================
exports.loginStart = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await prisma.user.findUnique({ where: { email: username } });
        const result = await fidoService.initiateChallenge('AUTH', user || { id: null }, RP_ID);
        
        if (result.status === 200) {
            await saveContext(result.data.challenge, result.data.sessionId, { purpose: 'LOGIN', userId: user?.id });
        }
        res.status(result.status).json(result.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.loginComplete = async (req, res) => {
    try {
        const credential = normalizeCredential(req.body);
        const clientData = parseClientData(req.body);
        const challenge = clientData.challenge;

        const context = await getContext(challenge);
        if (!context || context.purpose !== 'LOGIN') return res.status(400).json({ error: "Sesi login tidak valid" });

        // Susun payload untuk Java Server agar mendukung Origin Mobile
        const javaPayload = {
            serverPublicKeyCredential: {
                id: credential.id,
                type: credential.type,
                response: credential.response,
                extensions: credential.extensions || {}
            },
            sessionId: context.sessionId,
            rpId: RP_ID, 
            origin: clientData.origin, 
            tokenBinding: null
        };

        const result = await fidoService.verifyResponse('AUTH', javaPayload);
        if (result.status !== 200) return res.status(401).json({ error: "Biometrik salah" });

        // Cari User berdasarkan Credential ID
        const userKey = await prisma.userKey.findUnique({ 
            where: { credentialId: credential.id }, 
            include: { user: true } 
        });
        
        if (!userKey || !userKey.user) return res.status(401).json({ error: "Kunci tidak terdaftar" });

        await redisClient.del(`ctx:${challenge}`);
        sendTokenCookie(res, userKey.user);

        await createRichAuthLog(req, userKey.user, {
            eventType: 'Passkey Logged In',
            status: 'SUCCESS',
            authMethod: 'FIDO2_PASSKEY',
            data: { 
                telemetry: req.body.device_telemetry,
                tags: [{ label: req.headers['x-client-type'] === 'MOBILE' ? 'Platform' : 'Hardware Key', class: 'success' }] 
            }
        });

        res.json({ status: 'SUCCESS', user: { email: userKey.user.email } });
    } catch (err) {
        console.error("LoginComplete Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// ==========================================
// 3. FLOW TRANSACTION (Step-Up)
// ==========================================
exports.transactionStepUpStart = async (req, res) => {
    try {
        const { username, transactionId } = req.body;
        const user = await prisma.user.findUnique({ where: { email: username } });
        const result = await fidoService.initiateChallenge('AUTH', user, RP_ID);

        if (result.status === 200) {
            await saveContext(result.data.challenge, result.data.sessionId, { 
                purpose: 'TX_STEPUP', 
                userId: user.id, 
                transactionId 
            });
        }
        res.status(result.status).json(result.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// exports.transactionStepUpComplete = async (req, res) => {
//     try {
//         const credential = normalizeCredential(req.body);
//         const clientData = parseClientData(req.body);
        
//         // 1. CEK TIMEOUT / SESI (Redis)
//         // Jika user tidak scan jari dalam 5 menit (sesuai set di saveContext), data ini akan null.
//         const context = await getContext(clientData.challenge);
        
//         if (!context || context.purpose !== 'TX_STEPUP') {
//             // [HANDLING TIMEOUT]
//             // Sesi Redis sudah mati. Android akan menerima 408 (Request Timeout) atau 400.
//             return res.status(408).json({ 
//                 error: "Sesi transaksi telah berakhir (Timeout). Silakan ulangi transaksi.",
//                 code: "TRANSACTION_TIMEOUT"
//             });
//         }

//         // 2. Verifikasi ke Java Server
//         const javaPayload = {
//             serverPublicKeyCredential: {
//                 id: credential.id,
//                 type: credential.type,
//                 response: credential.response,
//                 extensions: credential.extensions || {}
//             },
//             sessionId: context.sessionId,
//             rpId: RP_ID,
//             origin: clientData.origin,
//             tokenBinding: null
//         };

//         const result = await fidoService.verifyResponse('AUTH', javaPayload);
        
//         // Ambil data transaksi lama untuk menjaga history
//         const existingTx = await prisma.transaction.findUnique({ 
//             where: { id: context.transactionId } 
//         });

//         if (!existingTx) {
//             return res.status(404).json({ error: "Transaksi tidak ditemukan di database" });
//         }

//         // [SOLUSI OVERWRITE] Parsing History Lama
//         let riskHistory = [];
//         try {
//             // Jika riskReason sebelumnya adalah JSON Array string, kita parse.
//             // Jika string biasa, kita jadikan item pertama array.
//             if (existingTx.riskReason) {
//                 if (existingTx.riskReason.startsWith('[')) {
//                     riskHistory = JSON.parse(existingTx.riskReason);
//                 } else {
//                     riskHistory.push({ event: 'INITIATION', note: existingTx.riskReason });
//                 }
//             }
//         } catch (e) {
//             // Fallback jika parsing gagal
//             riskHistory.push({ event: 'LEGACY_DATA', note: existingTx.riskReason });
//         }

//         // ===============================================
//         // SKENARIO 1: BIOMETRIK GAGAL
//         // ===============================================
//         if (result.status !== 200) {
//             // Tambahkan event Gagal ke Timeline
//             riskHistory.push({
//                 event: 'AUTH_FAILED',
//                 verifiedBy: 'FIDO2_BIOMETRIC',
//                 status: 'FAILED',
//                 timestamp: new Date().toISOString(),
//                 reason: "Biometric Mismatch"
//             });

//             await prisma.transaction.update({
//                 where: { id: context.transactionId },
//                 data: { 
//                     authResult: 'FAILED', 
//                     riskReason: JSON.stringify(riskHistory) // Simpan History Lengkap
//                 }
//             });

//             const user = await prisma.user.findUnique({ where: { id: context.userId } });
//             await createRichAuthLog(req, user, { 
//                 eventType: 'PAYMENT_FAILED', status: 'FAILED', message: `Biometric Failed: ${context.transactionId}` 
//             });

//             await redisClient.del(`ctx:${clientData.challenge}`);
//             return res.status(401).json({ error: "Verifikasi Biometrik Gagal" });
//         }

//         // ===============================================
//         // SKENARIO 2: BIOMETRIK SUKSES
//         // ===============================================
        
//         // Tambahkan event Sukses ke Timeline
//         riskHistory.push({
//             event: 'AUTH_SUCCESS',
//             verifiedBy: 'FIDO2_BIOMETRIC',
//             status: 'APPROVED',
//             timestamp: new Date().toISOString()
//         });

//         await prisma.transaction.update({
//             where: { id: context.transactionId },
//             data: { 
//                 authResult: 'SUCCESS', 
//                 riskReason: JSON.stringify(riskHistory) // Simpan History Lengkap (Inisiasi + Approval)
//             }
//         });

//         const user = await prisma.user.findUnique({ where: { id: context.userId } });
//         await createRichAuthLog(req, user, { 
//             eventType: 'PAYMENT_VERIFIED', status: 'SUCCESS', message: `TX ID: ${context.transactionId}` 
//         });

//         await redisClient.del(`ctx:${clientData.challenge}`);
//         res.json({ status: 'SUCCESS', message: 'Pembayaran disetujui' });

//     } catch (err) {
//         console.error("StepUp Error:", err);
//         res.status(500).json({ error: err.message });
//     }
// };

exports.transactionStepUpComplete = async (req, res) => {
    try {
        // Pastikan nama fungsi helper sesuai dengan yang ada di file Anda (normalizeCredential vs normalizeCredentialInput)
        // Di sini saya gunakan normalizeCredential sesuai snippet file Anda.
        const credential = normalizeCredential(req.body); 
        const clientData = parseClientData(req.body);
        
        // 1. Ambil Context dari Redis
        const context = await getContext(clientData.challenge);
        
        if (!context || context.purpose !== 'TX_STEPUP') {
            return res.status(408).json({ 
                error: "Sesi transaksi habis (Timeout).",
                code: "TRANSACTION_TIMEOUT"
            });
        }

        const user = await prisma.user.findUnique({ where: { id: context.userId } });
        if (!user) return res.status(401).json({ error: "User tidak ditemukan" });

        // 2. Verifikasi ke Java Server
        const javaPayload = {
            serverPublicKeyCredential: {
                id: credential.id,
                type: credential.type,
                response: credential.response,
                extensions: credential.extensions || {}
            },
            sessionId: context.sessionId,
            rpId: RP_ID,
            origin: clientData.origin,
            tokenBinding: null
        };

        const result = await fidoService.verifyResponse('AUTH', javaPayload);
        // Note: Jika Anda menggunakan proxyToJava, ganti baris di atas dengan:
        // const result = await proxyToJava('/api/paykey/auth/verify', javaPayload);

        // ============================================================
        // DEFINISI HELPER UPDATE LOG (DI DALAM FUNGSI UTAMA)
        // ============================================================
        const updateExistingLog = async (finalStatus, finalEvent, extraTags) => {
            try {
                // 1. Ambil 20 Log terakhir milik user ini
                const recentLogs = await prisma.authLog.findMany({
                    where: { email: user.email },
                    orderBy: { createdAt: 'desc' }, 
                    take: 20
                });

                // 2. Cari berdasarkan 'paymentId' (sesuai data transactionController Anda)
                const targetLog = recentLogs.find(log => {
                    const data = log.riskTags || {};
                    // Cek kedua kemungkinan key agar aman
                    return data.paymentId === context.transactionId || data.transactionId === context.transactionId; 
                });

                if (targetLog) {
                    // 3. Gabungkan Tags
                    const oldData = targetLog.riskTags || {};
                    const oldTags = oldData.tags || [];
                    
                    const newTagsFiltered = extraTags.filter(nt => 
                        !oldTags.some(ot => ot.label === nt.label)
                    );
                    const mergedTags = [...oldTags, ...newTagsFiltered];

                    // 4. Update Log
                    await prisma.authLog.update({
                        where: { id: targetLog.id },
                        data: {
                            status: finalStatus,       
                            eventType: finalEvent,     
                            riskTags: {                
                                ...oldData,            
                                tags: mergedTags,      
                                updatedAt: new Date().toISOString()
                            }
                        }
                    });
                    console.log(`[RichLog] Log #${targetLog.id} UPDATED -> ${finalStatus}`);
                } else {
                    console.warn(`[RichLog] Warning: Log for TX ${context.transactionId} NOT FOUND.`);
                }
            } catch (logErr) {
                console.error("[RichLog] Error updating log:", logErr.message);
            }
        };

        // ============================================================
        // LOGIKA UTAMA (AWAIT ADA DI SINI, DI DALAM FUNGSI ASYNC)
        // ============================================================

        // Ambil Data Transaksi
        const existingTx = await prisma.transaction.findUnique({ where: { id: context.transactionId } });
        
        let riskHistory = [];
        try {
            if (existingTx && existingTx.riskReason) {
                riskHistory = existingTx.riskReason.startsWith('[') ? JSON.parse(existingTx.riskReason) : [{ note: existingTx.riskReason }];
            }
        } catch (e) {}

        // SKENARIO 1: GAGAL
        if (result.status !== 200) {
            riskHistory.push({ event: 'AUTH_FAILED', timestamp: new Date().toISOString() });
            
            await prisma.transaction.update({
                where: { id: context.transactionId },
                data: { authResult: 'FAILED', riskReason: JSON.stringify(riskHistory) }
            });

            await updateExistingLog('FAILED', 'Payment Denied', [
                { label: 'Biometric Failed', class: 'danger' }
            ]);

            await redisClient.del(`ctx:${clientData.challenge}`);
            return res.status(401).json({ error: "Verifikasi Biometrik Gagal" });
        }

        // SKENARIO 2: SUKSES
        riskHistory.push({ event: 'AUTH_SUCCESS', timestamp: new Date().toISOString() });

        await prisma.transaction.update({
            where: { id: context.transactionId },
            data: { authResult: 'SUCCESS', riskReason: JSON.stringify(riskHistory) }
        });

        // Update Log jadi SUKSES
        await updateExistingLog('SUCCESS', 'Payment Approved', [
            { label: 'Payment Approved', class: 'success' },
            { label: 'Biometric Verified', class: 'success' }
        ]);

        await redisClient.del(`ctx:${clientData.challenge}`);
        res.json({ status: 'SUCCESS', message: 'Pembayaran disetujui' });

    } catch (err) {
        console.error("StepUp Error:", err);
        res.status(500).json({ error: err.message });
    }
}; 