// // /**
// //  * @file clientEnrollmentController.js
// //  * @description Stateless Enrollment Controller dengan Native Express OTP Handling
// //  */
// // const crypto = require("crypto");
// // const javaClient = require("../../services/JavaAuthClient");
// // const prisma = require("../../config/db");
// // const emailService = require('../../services/emailService');
// // const { generateUserId } = require('../../utils/idGenerator');

// // exports.registerInit = async (req, res) => {
// //   try {
// //     const { cif, name, email, mobile } = req.body;
// //     if (!email || !name) return res.status(400).json({ error: "Email and Name are required" });

// //     const newUserId = generateUserId();

// //     const user = await prisma.user.create({
// //       data: {
// //         id: newUserId,
// //         email: email.toLowerCase().trim(),
// //         fullName: name,
// //         cifNumber: cif || null,
// //         mobile: mobile || null,
// //         status: "active",
// //       },
// //     });

// //     return res.json({ success: true, message: "User created", userId: user.id });
// //   } catch (err) {
// //     console.error("[Enrollment] Init Error:", err.message);
// //     res.status(500).json({ error: "Failed to initialize registration" });
// //   }
// // };

// // exports.enrollOtpStart = async (req, res) => {
// //     try {
// //         const { authType, userId } = req.body;
// //         if (!userId) return res.status(401).json({ error: "Missing User ID" });

// //         const user = await prisma.user.findUnique({ where: { id: userId } });
// //         if (!user) return res.status(404).json({ error: "User not found" });

// //         if (authType === 'EMAIL_OTP') {
// //             await prisma.authTotpToken.updateMany({
// //                 where: { userId: user.id, tokenType: 'EMAIL_OTP', status: 'PENDING' },
// //                 data: { status: 'EXPIRED' }
// //             });

// //             const crypto = require("crypto");
// //             const otpCode = crypto.randomInt(100000, 999999).toString();
            
// //             const uniqueSerialNumber = `EMAIL_OTP_${Date.now()}_${crypto.randomInt(100, 999)}`;

// //             await prisma.authTotpToken.create({
// //                 data: {
// //                     serialNumber: uniqueSerialNumber,
// //                     userId: user.id,
// //                     tokenType: 'EMAIL_OTP',
// //                     encryptedSeed: otpCode,
// //                     status: 'PENDING',
// //                     assignedAt: new Date(),
// //                     importedAt: new Date()
// //                 }
// //             });

// //             console.log(`[Enrollment] Generated OTP for User ${user.id}: ${otpCode} (Serial: ${uniqueSerialNumber})`);

// //             await emailService.sendOTP(user.email, otpCode);

// //             return res.json({ success: true, message: "OTP sent to your email" });
// //         } 

// //         return res.status(400).json({ error: "Unsupported auth type" });
// //     } catch (err) {
// //         console.error("OTP Start Error:", err.message);
// //         res.status(500).json({ success: false, message: "Failed to send OTP email" });
// //     }
// // };

// // exports.verifyOtpEnrolment = async (req, res) => {
// //   try {
// //     const { authType, otp, userId } = req.body;
// //     if (!userId) return res.status(400).json({ error: "userId is required" });

// //     if (authType === 'EMAIL_OTP') {
// //         const tokenRecord = await prisma.authTotpToken.findFirst({
// //             where: { userId, tokenType: 'EMAIL_OTP', status: 'PENDING' },
// //             orderBy: { assignedAt: 'desc' }
// //         });

// //         if (!tokenRecord || tokenRecord.encryptedSeed !== otp) {
// //             return res.status(400).json({ error: 'Invalid OTP Code' });
// //         }

// //         const tokenTime = tokenRecord.assignedAt || tokenRecord.importedAt;
// //         const tokenAge = Date.now() - new Date(tokenTime).getTime();
        
// //         if (tokenAge > 5 * 60 * 1000) { 
// //             await prisma.authTotpToken.update({
// //                 where: { id: tokenRecord.id },
// //                 data: { status: 'EXPIRED' }
// //             });
// //             return res.status(400).json({ error: 'OTP has expired' });
// //         }

// //         await prisma.authTotpToken.delete({ where: { id: tokenRecord.id } });

// //         return res.json({ success: true, message: 'Email OTP Verified Successfully' });
// //     }

// //     return res.status(400).json({ error: "Unsupported verification type" });

// //   } catch (err) {
// //     console.error("Verify OTP Error:", err.message);
// //     res.status(500).json({ error: "Internal server error during verification" });
// //   }
// // };

// // exports.enrollPKIMethod = async (req, res) => {
// //   try {
// //     const { authType, publicKey, deviceId, userId } = req.body;
    
// //     if (!userId) return res.status(400).json({ error: "userId is required" });
// //     if (!publicKey) return res.status(400).json({ error: "publicKey is required" });

// //     // 1. Daftarkan kunci publik ke Java Server sebagai mesin Kriptografi
// //     const javaRes = await javaClient.registerCustomKey({
// //       userId: userId, 
// //       deviceId: deviceId,
// //       publicKey: publicKey,
// //       type: authType,
// //     });

// //     // 2. Simpan referensi kunci perangkat ke database lokal Node.js
// //     await prisma.authDeviceKey.create({
// //       data: {
// //         userId: userId, 
// //         deviceId: deviceId, 
// //         authType: authType,
// //         publicKey: publicKey,
// //         publicKeyHash: "SECURE_PKI_ENROLLED", 
// //         status: "ACTIVE",
// //       },
// //     });
    
// //     res.json(javaRes);
// //   } catch (err) {
// //     console.error("PKI Enrollment Error:", err.message);
// //     res.status(500).json({ error: "Failed to enroll PKI method" });
// //   }
// // };

// // // [TAHAP 2] FIDO2: Start (Minta Challenge dari Java)
// // exports.enrollFidoStart = async (req, res) => {
// //   try {
// //     const { userId } = req.body;
// //     if (!userId) return res.status(400).json({ error: "Missing User ID" });

// //     const user = await prisma.user.findUnique({ where: { id: userId } });
// //     if (!user) return res.status(404).json({ error: "User not found" });

// //     // PERBAIKAN: Gunakan IP lokal mesin Anda (192.168.1.3) atau domain Ngrok Anda.
// //     // Jangan gunakan "localhost". Passkey OS Mobile akan memblokir "localhost".
// //     const RP_ID = process.env.RP_ID || "192.168.1.3"; 

// //     // Minta Challenge ke Java Server dengan RP_ID yang valid
// //     const challengeData = await javaClient.fidoInitiateChallenge("REGISTRATION", user, RP_ID);
    
// //     // Kirim seluruh objek JSON ke Mobile App
// //     res.json(challengeData); 
// //   } catch (err) {
// //     console.error("FIDO Start Error:", err.message);
// //     res.status(500).json({ error: "Failed to initiate FIDO2 challenge" });
// //   }
// // };

// // // [TAHAP 2] FIDO2: Complete (Verifikasi)
// // exports.enrollFidoComplete = async (req, res) => {
// //   try {
// //     const { userId, deviceId, passkeyPayload } = req.body; 
    
// //     if (!userId || !passkeyPayload) return res.status(400).json({ error: "Missing FIDO2 payload" });

// //     // Validasi payload kriptografi ke Java Server
// //     const javaResult = await javaClient.fidoVerifyResponse("REGISTRATION", passkeyPayload);

// //     // Simpan status bahwa perangkat ini sudah memiliki FIDO2
// //     await prisma.authDeviceKey.create({
// //       data: {
// //         userId: userId,
// //         deviceId: deviceId || 'mobile-passkey',
// //         authType: 'FIDO2',
// //         publicKey: "STORED_IN_JAVA_SERVER", 
// //         publicKeyHash: "FIDO2_PASSKEY_ENROLLED",
// //         status: "ACTIVE",
// //       },
// //     });

// //     res.json({ success: true, message: "FIDO2 Passkey enrolled successfully", data: javaResult });
// //   } catch (err) {
// //     console.error("FIDO Complete Error:", err.message);
// //     res.status(400).json({ error: "FIDO2 Verification failed" });
// //   }
// // };

// // // [STEP 3] Register Custom 6-Digit App PIN (Stateless)
// // exports.enrollAppPin = async (req, res) => {
// //   try {
// //     const { pinHash, deviceId, userId } = req.body;
    
// //     if (!userId || !pinHash) return res.status(400).json({ error: "Missing required fields" });

// //     // Simpan Hash PIN ke database lokal (Prisma), kita titipkan di kolom publicKey
// //     await prisma.authDeviceKey.create({
// //       data: {
// //         userId: userId,
// //         deviceId: deviceId,
// //         authType: 'PIN',
// //         publicKey: pinHash, // Kita gunakan kolom ini untuk menyimpan Hash PIN
// //         publicKeyHash: "APP_PIN_HASHED",
// //         status: "ACTIVE",
// //       },
// //     });

// //     res.json({ success: true, message: "App PIN enrolled successfully" });
// //   } catch (err) {
// //     console.error("App PIN Enrollment Error:", err.message);
// //     res.status(500).json({ error: "Failed to enroll App PIN" });
// //   }
// // };
// /**
//  * @file clientEnrollmentController.js
//  * @description Stateless Enrollment Controller dengan Native Express OTP Handling & FIDO2 Bridge
//  */
// const crypto = require("crypto");
// const javaClient = require("../../services/JavaAuthClient");
// const prisma = require("../../config/db");
// const emailService = require('../../services/emailService');
// const { generateUserId } = require('../../utils/idGenerator');

// // =========================================================================
// // PERBAIKAN: IMPORT REDIS UNTUK MENYIMPAN SESSION ID (Meniru passkeyController)
// // =========================================================================
// const { createClient } = require('redis');
// const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://:redispass@localhost:6379' });
// (async () => { 
//     try { await redisClient.connect(); } 
//     catch (e) { console.error("[Redis] Error:", e.message); }
// })();

// const saveContext = async (challenge, sessionId, context) => {
//     await redisClient.set(`ctx:${challenge}`, JSON.stringify({ sessionId, ...context }), { EX: 300 });
// };

// const getContext = async (challenge) => {
//     const data = await redisClient.get(`ctx:${challenge}`);
//     return data ? JSON.parse(data) : null;
// };
// // =========================================================================

// // exports.registerInit = async (req, res) => {
// //   try {
// //     const { cif, name, email, mobile } = req.body;
// //     if (!email || !name) return res.status(400).json({ error: "Email and Name are required" });

// //     const newUserId = generateUserId();

// //     const user = await prisma.user.create({
// //       data: {
// //         id: newUserId,
// //         email: email.toLowerCase().trim(),
// //         fullName: name,
// //         cifNumber: cif || null,
// //         mobile: mobile || null,
// //         status: "active",
// //       },
// //     });

// //     return res.json({ success: true, message: "User created", userId: user.id });
// //   } catch (err) {
// //     console.error("[Enrollment] Init Error:", err.message);
// //     res.status(500).json({ error: "Failed to initialize registration" });
// //   }
// // };

// exports.registerInit = async (req, res) => {
//   try {
//     const { cif, name, email, mobile } = req.body;
//     if (!email || !name) return res.status(400).json({ error: "Email and Name are required" });

//     const normalizedEmail = email.toLowerCase().trim();

//     // PERBAIKAN: Cari user dulu. Jika sudah ada, gunakan ID yang sudah ada!
//     let user = await prisma.user.findUnique({ where: { email: normalizedEmail } });

//     if (!user) {
//         user = await prisma.user.create({
//           data: {
//             id: generateUserId(),
//             email: normalizedEmail,
//             fullName: name,
//             cifNumber: cif || null,
//             mobile: mobile || null,
//             status: "active",
//           },
//         });
//     }

//     // Berhasil masuk meskipun email sudah pernah dipakai di device lain
//     return res.json({ success: true, message: "User ready", userId: user.id });
//   } catch (err) {
//     console.error("[Enrollment] Init Error:", err.message);
//     res.status(500).json({ error: "Failed to initialize registration" });
//   }
// };

// exports.enrollOtpStart = async (req, res) => {
//     try {
//         const { authType, userId } = req.body;
//         if (!userId) return res.status(401).json({ error: "Missing User ID" });

//         const user = await prisma.user.findUnique({ where: { id: userId } });
//         if (!user) return res.status(404).json({ error: "User not found" });

//         if (authType === 'EMAIL_OTP') {
//             await prisma.authTotpToken.updateMany({
//                 where: { userId: user.id, tokenType: 'EMAIL_OTP', status: 'PENDING' },
//                 data: { status: 'EXPIRED' }
//             });

//             const otpCode = crypto.randomInt(100000, 999999).toString();
//             const uniqueSerialNumber = `EMAIL_OTP_${Date.now()}_${crypto.randomInt(100, 999)}`;

//             await prisma.authTotpToken.create({
//                 data: {
//                     serialNumber: uniqueSerialNumber,
//                     userId: user.id,
//                     tokenType: 'EMAIL_OTP',
//                     encryptedSeed: otpCode,
//                     status: 'PENDING',
//                     assignedAt: new Date(),
//                     importedAt: new Date()
//                 }
//             });

//             await emailService.sendOtpEmail(user.email, otpCode);
//             return res.json({ success: true, message: "OTP sent to your email" });
//         } 

//         return res.status(400).json({ error: "Unsupported auth type" });
//     } catch (err) {
//         console.error("OTP Start Error:", err.message);
//         res.status(500).json({ success: false, message: "Failed to send OTP email" });
//     }
// };

// exports.verifyOtpEnrolment = async (req, res) => {
//   try {
//     const { authType, otp, userId } = req.body;
//     if (!userId) return res.status(400).json({ error: "userId is required" });

//     if (authType === 'EMAIL_OTP') {
//         const tokenRecord = await prisma.authTotpToken.findFirst({
//             where: { userId, tokenType: 'EMAIL_OTP', status: 'PENDING' },
//             orderBy: { assignedAt: 'desc' }
//         });

//         if (!tokenRecord || tokenRecord.encryptedSeed !== otp) {
//             return res.status(400).json({ error: 'Invalid OTP Code' });
//         }

//         await prisma.authTotpToken.delete({ where: { id: tokenRecord.id } });
//         return res.json({ success: true, message: 'Email OTP Verified Successfully' });
//     }

//     return res.status(400).json({ error: "Unsupported verification type" });

//   } catch (err) {
//     console.error("Verify OTP Error:", err.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// // exports.enrollPKIMethod = async (req, res) => {
// //   try {
// //     const { authType, publicKey, deviceId, userId } = req.body;
    
// //     if (!userId || !publicKey) return res.status(400).json({ error: "userId and publicKey are required" });

// //     const javaRes = await javaClient.registerCustomKey({
// //       userId: userId, 
// //       deviceId: deviceId,
// //       publicKey: publicKey,
// //       type: authType,
// //     });

// //     await prisma.authDeviceKey.create({
// //       data: {
// //         userId: userId, 
// //         deviceId: deviceId, 
// //         authType: authType,
// //         publicKey: publicKey,
// //         publicKeyHash: "SECURE_PKI_ENROLLED", 
// //         status: "ACTIVE",
// //       },
// //     });
    
// //     res.json(javaRes);
// //   } catch (err) {
// //     console.error("PKI Enrollment Error:", err.message);
// //     res.status(500).json({ error: "Failed to enroll PKI method" });
// //   }
// // };

// exports.enrollPKIMethod = async (req, res) => {
//   try {
//     // PERBAIKAN: Tangkap telemetry dari req.body
//     const { authType, publicKey, deviceId, userId, telemetry } = req.body;
    
//     if (!userId || !publicKey) return res.status(400).json({ error: "userId and publicKey are required" });

//     const javaRes = await javaClient.registerCustomKey({
//       userId: userId, deviceId: deviceId, publicKey: publicKey, type: authType,
//     });

//     await prisma.authDeviceKey.create({
//       data: {
//         userId: userId, 
//         deviceId: deviceId, 
//         authType: authType,
//         publicKey: publicKey,
//         publicKeyHash: "SECURE_PKI_ENROLLED", 
//         status: "ACTIVE",
//         // PERBAIKAN: Simpan telemetry sebagai String JSON ke Database
//         deviceTelemetry: telemetry ? JSON.stringify(telemetry) : null
//       },
//     });
    
//     res.json(javaRes);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to enroll PKI method" });
//   }
// };

// // =========================================================================
// // [TAHAP 2] FIDO2: Start (MENIRU passkeyController.js)
// // =========================================================================
// // exports.enrollFidoStart = async (req, res) => {
// //   try {
// //     const { userId } = req.body;
// //     if (!userId) return res.status(400).json({ error: "Missing User ID" });

// //     const user = await prisma.user.findUnique({ where: { id: userId } });
// //     if (!user) return res.status(404).json({ error: "User not found" });

// //     const RP_ID = process.env.RP_ID || "localhost"; 

// //     // Minta Challenge ke Java Server
// //     const challengeData = await javaClient.fidoInitiateChallenge("REGISTRATION", user, RP_ID);
    
// //     // PERBAIKAN FATAL: Simpan Session ID ke Redis
// //     if (challengeData && challengeData.challenge) {
// //         await saveContext(challengeData.challenge, challengeData.sessionId, { 
// //             userId: user.id 
// //         });
// //     }

// //     res.json(challengeData); 
// //   } catch (err) {
// //     console.error("FIDO Start Error:", err.message);
// //     res.status(500).json({ error: "Failed to initiate FIDO2 challenge" });
// //   }
// // };

// exports.enrollFidoStart = async (req, res) => {
//   try {
//     const { userId, username } = req.body;
//     console.log("body:", req.body);
//     if (!userId) return res.status(400).json({ error: "Missing User ID" });

//     const user = await prisma.user.findUnique({ where: { id: userId } });
//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Sesuaikan RP_ID dengan IP yang Anda gunakan!
//     const RP_ID = process.env.RP_ID || "192.168.1.2"; 

//     const challengeData = await javaClient.fidoInitiateChallenge("REGISTRATION", user, RP_ID);
    
//     // Simpan Session dari Java ke Redis
//     if (challengeData && challengeData.challenge) {
//         await saveContext(challengeData.challenge, challengeData.sessionId, { userId: user.id });
//     }

//     res.json(challengeData); 
//   } catch (err) {
//     console.error("FIDO Start Error:", err.message);
//     res.status(500).json({ error: "Failed to initiate FIDO2 challenge" });
//   }
// };

// // =========================================================================
// // [TAHAP 2] FIDO2: Complete (MENIRU passkeyController.js)
// // =========================================================================
// // exports.enrollFidoComplete = async (req, res) => {
// //   try {
// //     const { userId, deviceId, passkeyPayload } = req.body; 
// //     if (!userId || !passkeyPayload) return res.status(400).json({ error: "Missing FIDO2 payload" });

// //     // 1. Ekstrak Challenge dan Origin dari Android Base64 clientDataJSON
// //     const buffer = Buffer.from(passkeyPayload.response.clientDataJSON, 'base64');
// //     const clientData = JSON.parse(buffer.toString('utf-8'));
// //     const challenge = clientData.challenge;

// //     // 2. Ambil Session ID dari Redis
// //     const context = await getContext(challenge);
// //     if (!context) return res.status(400).json({ error: "Sesi register expired atau tidak valid" });

// //     const RP_ID = process.env.RP_ID || "localhost";

// //     // 3. Rakit Payload KHUSUS untuk Java Server (Sama persis dengan passkeyController.js)
// //     const javaPayload = {
// //         serverPublicKeyCredential: {
// //             id: passkeyPayload.id,
// //             type: passkeyPayload.type,
// //             response: passkeyPayload.response,
// //             extensions: passkeyPayload.extensions || {}
// //         },
// //         sessionId: context.sessionId, // Disuntikkan dari Redis
// //         rpId: RP_ID, 
// //         origin: clientData.origin,    // Disuntikkan dari hasil decode
// //         tokenBinding: null
// //     };

// //     // 4. Validasi payload yang sudah dirakit ke Java Server
// //     const javaResult = await javaClient.fidoVerifyResponse("REGISTRATION", javaPayload);

// //     // Hapus sesi dari Redis jika berhasil
// //     if (javaResult) await redisClient.del(`ctx:${challenge}`);

// //     await prisma.authDeviceKey.create({
// //       data: {
// //         userId: userId,
// //         deviceId: deviceId || 'mobile-passkey',
// //         authType: 'FIDO2',
// //         publicKey: "STORED_IN_JAVA_SERVER", 
// //         publicKeyHash: "FIDO2_PASSKEY_ENROLLED",
// //         status: "ACTIVE",
// //       },
// //     });

// //     res.json({ success: true, message: "FIDO2 Passkey enrolled successfully", data: javaResult });
// //   } catch (err) {
// //     console.error("FIDO Complete Error:", err.message);
// //     res.status(400).json({ error: "FIDO2 Verification failed" });
// //   }
// // };

// exports.enrollFidoComplete = async (req, res) => {
//   try {
//     // PERBAIKAN: Tangkap telemetry dari req.body (Express Wrapper)
//     const { userId, deviceId, passkeyPayload, telemetry } = req.body; 
    
//     if (!passkeyPayload || !passkeyPayload.response) {
//         return res.status(400).json({ error: "Invalid FIDO2 payload" });
//     }

//     const buffer = Buffer.from(passkeyPayload.response.clientDataJSON, 'base64');
//     const clientData = JSON.parse(buffer.toString('utf-8'));
//     const challenge = clientData.challenge;

//     const context = await getContext(challenge);
//     if (!context) return res.status(400).json({ error: "Sesi register expired" });

//     const RP_ID = process.env.RP_ID || "192.168.1.2";

//     const javaPayload = {
//         serverPublicKeyCredential: {
//             id: passkeyPayload.id, type: passkeyPayload.type,
//             response: passkeyPayload.response, extensions: passkeyPayload.extensions || {}
//         },
//         sessionId: context.sessionId,
//         rpId: RP_ID, origin: clientData.origin, tokenBinding: null
//     };

//     const javaResult = await javaClient.fidoVerifyResponse("REGISTRATION", javaPayload);

//     await redisClient.del(`ctx:${challenge}`);

//     await prisma.authDeviceKey.create({
//       data: {
//         userId: userId,
//         deviceId: deviceId || 'Mobile App',
//         authType: 'FIDO2',
//         publicKey: "STORED_IN_JAVA_SERVER", 
//         publicKeyHash: "FIDO2_PASSKEY_ENROLLED",
//         status: "ACTIVE",
//         // PERBAIKAN: Simpan telemetry sebagai String JSON ke Database
//         deviceTelemetry: telemetry ? JSON.stringify(telemetry) : null
//       },
//     });

//     res.json({ success: true, message: "FIDO2 Passkey enrolled", data: javaResult });
//   } catch (err) {
//     res.status(400).json({ error: "FIDO2 Verification failed" });
//   }
// };

// // [STEP 3] Register Custom 6-Digit App PIN
// exports.enrollAppPin = async (req, res) => {
//   try {
//     // PERBAIKAN: Tangkap telemetry dari req.body
//     const { pinHash, deviceId, userId, telemetry } = req.body;
//     if (!userId || !pinHash) return res.status(400).json({ error: "Missing required fields" });

//     await prisma.authDeviceKey.create({
//       data: {
//         userId: userId,
//         deviceId: deviceId,
//         authType: 'PIN',
//         publicKey: pinHash, 
//         publicKeyHash: "APP_PIN_HASHED",
//         status: "ACTIVE",
//         // PERBAIKAN: Simpan telemetry sebagai String JSON ke Database
//         deviceTelemetry: telemetry ? JSON.stringify(telemetry) : null
//       },
//     });

//     res.json({ success: true, message: "App PIN enrolled successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to enroll App PIN" });
//   }
// };

/**
 * @file clientEnrollmentController.js
 * @description Stateless Enrollment Controller dengan Native Express OTP Handling & Unified MFA (UserKey)
 */
const crypto = require("crypto");
const javaClient = require("../../services/JavaAuthClient");
const prisma = require("../../config/db");
const emailService = require('../../services/emailService');
const { generateUserId } = require('../../utils/idGenerator');

const { createClient } = require('redis');
const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://:redispass@localhost:6379' });
(async () => { 
    try { await redisClient.connect(); } catch (e) { console.error("[Redis] Error:", e.message); }
})();

const saveContext = async (challenge, sessionId, context) => {
    await redisClient.set(`ctx:${challenge}`, JSON.stringify({ sessionId, ...context }), { EX: 300 });
};
const getContext = async (challenge) => {
    const data = await redisClient.get(`ctx:${challenge}`);
    return data ? JSON.parse(data) : null;
};

// ==========================================
// 1. INIT REGISTRATION
// ==========================================
exports.registerInit = async (req, res) => {
  try {
    const { cif, name, email, mobile } = req.body;
    if (!email || !name) return res.status(400).json({ error: "Email and Name are required" });

    const normalizedEmail = email.toLowerCase().trim();

    // Cek apakah email sudah ada (Untuk Multi-Device)
    let user = await prisma.user.findUnique({ where: { email: normalizedEmail } });

    // Jika belum ada, buat baru
    if (!user) {
        user = await prisma.user.create({
          data: {
            id: generateUserId(),
            email: normalizedEmail,
            fullName: name,
            cifNumber: cif || null,
            mobile: mobile || null,
            status: "active",
          },
        });
    }
    
    // Kembalikan User ID agar Android bisa melanjutkan pendaftaran
    return res.json({ success: true, message: "User ready", userId: user.id });
  } catch (err) {
    console.error("[Enrollment] Init Error:", err.message);
    res.status(500).json({ error: "Failed to initialize registration" });
  }
};

// ==========================================
// 2. EMAIL OTP
// ==========================================
exports.enrollOtpStart = async (req, res) => {
    try {
        const { authType, userId } = req.body;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        
        if (authType === 'EMAIL_OTP' && user) {
            await prisma.authTotpToken.updateMany({
                where: { userId: user.id, tokenType: 'EMAIL_OTP', status: 'PENDING' },
                data: { status: 'EXPIRED' }
            });

            const otpCode = crypto.randomInt(100000, 999999).toString();
            await prisma.authTotpToken.create({
                data: {
                    serialNumber: `EMAIL_OTP_${Date.now()}_${crypto.randomInt(100, 999)}`,
                    userId: user.id, tokenType: 'EMAIL_OTP', encryptedSeed: otpCode,
                    status: 'PENDING', assignedAt: new Date(), importedAt: new Date()
                }
            });
            await emailService.sendOtpEmail(user.email, otpCode);
            return res.json({ success: true, message: "OTP sent to your email" });
        } 
        return res.status(400).json({ error: "Unsupported auth type" });
    } catch (err) { res.status(500).json({ error: "Failed to send OTP email" }); }
};

exports.verifyOtpEnrolment = async (req, res) => {
  try {
    // PERBAIKAN: Tangkap juga deviceId dan telemetry dari Android jika ada
    const { authType, otp, userId, deviceId, telemetry } = req.body;
    
    if (authType === 'EMAIL_OTP') {
        const tokenRecord = await prisma.authTotpToken.findFirst({
            where: { userId, tokenType: 'EMAIL_OTP', status: 'PENDING' },
            orderBy: { assignedAt: 'desc' }
        });
        if (!tokenRecord || tokenRecord.encryptedSeed !== otp) return res.status(400).json({ error: 'Invalid OTP Code' });

        // Hapus token yang sudah terpakai
        await prisma.authTotpToken.delete({ where: { id: tokenRecord.id } });

        // =================================================================
        // PERBAIKAN FATAL: Daftarkan EMAIL_OTP ke tabel userKey agar muncul di UI
        // =================================================================
        
        // Ambil nama device jika dia mendaftar lewat HP, jika tidak beri nama Cloud
        const deviceName = telemetry?.device_model || 'Cloud / Email Address';
        const safeDeviceId = deviceId || `CLOUD_${Date.now()}`;

        // Cek apakah di HP ini sudah pernah mendaftarkan Email OTP (agar tidak duplikat)
        const existingOtpKey = await prisma.userKey.findFirst({
            where: { userId: userId, deviceName: deviceName, transports: { contains: "EMAIL_OTP" } }
        });

        if (!existingOtpKey) {
            await prisma.userKey.create({
                data: {
                    credentialId: `OTP_${safeDeviceId}_${Date.now()}`,
                    userId: userId,
                    deviceName: deviceName,
                    transports: JSON.stringify(["EMAIL_OTP"]), // Tandai sebagai Email OTP
                    publicKey: "N/A", // OTP tidak punya Public Key
                    status: "ACTIVE",
                    signCounter: 0,
                    deviceTelemetry: telemetry || {},
                    aaguid: "00000000-0000-0000-0000-000000000000" // Dummy AAGUID
                }
            });
        }

        return res.json({ success: true, message: 'Email OTP Verified Successfully' });
    }
    return res.status(400).json({ error: "Unsupported verification type" });
  } catch (err) { 
      console.error("OTP Verify Error:", err);
      res.status(500).json({ error: "Internal server error" }); 
  }
};

// ==========================================
// 3. BIOMETRIC LEGACY 
// ==========================================
exports.enrollPKIMethod = async (req, res) => {
  try {
    const { authType, publicKey, deviceId, userId, telemetry } = req.body;
    if (!userId || !publicKey) return res.status(400).json({ error: "userId and publicKey are required" });

    const javaRes = await javaClient.registerCustomKey({ userId, deviceId, publicKey, type: authType });
    const deviceName = telemetry?.device_model || 'Unknown Device';

    // PERBAIKAN: Gunakan prisma.userKey
    await prisma.userKey.create({
      data: { 
        credentialId: `PKI_${deviceId}_${Date.now()}`,
        userId: userId, 
        deviceName: deviceName,
        transports: JSON.stringify([authType]),
        publicKey: publicKey, 
        status: "ACTIVE",
        signCounter: 0,
        deviceTelemetry: telemetry || {},
        aaguid: "00000000-0000-0000-0000-000000000000"
      }
    });
    res.json(javaRes);
  } catch (err) { 
      console.error("PKI Enrollment Error:", err);
      res.status(500).json({ error: "Failed to enroll PKI method" }); 
  }
};

// ==========================================
// 4. FIDO2 PASSKEY
// ==========================================
exports.enrollFidoStart = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const RP_ID = process.env.RP_ID || "192.168.1.2"; 

    const challengeData = await javaClient.fidoInitiateChallenge("REGISTRATION", user, RP_ID);
    if (challengeData && challengeData.challenge) {
        await saveContext(challengeData.challenge, challengeData.sessionId, { userId: user.id });
    }
    res.json(challengeData); 
  } catch (err) { res.status(500).json({ error: "Failed to initiate FIDO2 challenge" }); }
};

exports.enrollFidoComplete = async (req, res) => {
  try {
    const { userId, deviceId, passkeyPayload, telemetry } = req.body; 
    if (!passkeyPayload || !passkeyPayload.response) return res.status(400).json({ error: "Invalid FIDO2 payload" });

    const buffer = Buffer.from(passkeyPayload.response.clientDataJSON, 'base64');
    const clientData = JSON.parse(buffer.toString('utf-8'));
    const challenge = clientData.challenge;

    const context = await getContext(challenge);
    if (!context) return res.status(400).json({ error: "Sesi register expired atau tidak valid" });

    const RP_ID = process.env.RP_ID || "192.168.1.2";
    const javaPayload = {
        serverPublicKeyCredential: {
            id: passkeyPayload.id, type: passkeyPayload.type,
            response: passkeyPayload.response, extensions: passkeyPayload.extensions || {}
        },
        sessionId: context.sessionId, rpId: RP_ID, origin: clientData.origin, tokenBinding: null
    };

    // Verifikasi ke Java Server (Java akan otomatis membuat record userKey FIDO)
    const javaResult = await javaClient.fidoVerifyResponse("REGISTRATION", javaPayload);
    await redisClient.del(`ctx:${challenge}`);

    // PERBAIKAN: Karena Java Server sudah membuat userKey, kita cukup UPDATE data nama & telemetry nya!
    const credentialId = passkeyPayload.id;
    const deviceName = telemetry?.device_model || 'Mobile Passkey';

    const existingKey = await prisma.userKey.findUnique({ where: { credentialId: credentialId } });
    if (existingKey) {
        await prisma.userKey.update({
            where: { credentialId: credentialId },
            data: {
                deviceName: deviceName,
                deviceTelemetry: telemetry || {}
            }
        });
    }

    res.json({ success: true, message: "FIDO2 Passkey enrolled successfully", data: javaResult });
  } catch (err) { 
      console.error("FIDO Complete Error:", err);
      res.status(400).json({ error: "FIDO2 Verification failed" }); 
  }
};


// ==========================================
// 5. APP PIN (FULL BANK-GRADE SECURITY)
// ==========================================
exports.enrollAppPin = async (req, res) => {
  try {
    // Tangkap publicKey (bukan pinHash lagi) dari Android
    const { publicKey, deviceId, userId, telemetry } = req.body;
    if (!userId || !publicKey) return res.status(400).json({ error: "Missing required fields" });

    // 1. Daftarkan Public Key PIN ke Java Server (Mesin Kriptografi Utama)
    await javaClient.registerCustomKey({
        userId: userId,
        deviceId: deviceId,
        publicKey: publicKey,
        type: 'PIN'
    });

    const deviceName = telemetry?.device_model || 'Unknown Device';

    // 2. Simpan referensinya di DB Node.js untuk keperluan UI / Dashboard
    await prisma.userKey.create({
      data: { 
          credentialId: `PIN_${deviceId}_${Date.now()}`,
          userId: userId, 
          deviceName: deviceName,
          transports: JSON.stringify(["PIN"]),
          publicKey: publicKey, 
          status: "ACTIVE",
          signCounter: 0,
          deviceTelemetry: telemetry || {},
          aaguid: "00000000-0000-0000-0000-000000000000"
      },
    });

    res.json({ success: true, message: "App PIN enrolled with Bank-Grade Security" });
  } catch (err) { 
      console.error("App PIN Enrollment Error:", err);
      res.status(500).json({ error: "Failed to enroll App PIN to Java Server" }); 
  }
};