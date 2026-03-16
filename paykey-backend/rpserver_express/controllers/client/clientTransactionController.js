// const prisma = require('../../config/db');
// const javaClient = require('../../services/JavaAuthClient');
// const { createRichAuthLog } = require('../../utils/richLogger');
// const { customAlphabet } = require('nanoid');

// const RiskEngine = require('../../utils/riskEngine');
// const PolicyEngine = require('../../utils/authPolicies');

// const generatePaymentId = () => `PAY_TX_${customAlphabet('0123456789ABCDEF', 10)()}`;

// function getEventDescription(status) {
//     switch (status) {
//         case 'APPROVED': return 'Payment Risk Approved';
//         case 'BLOCKED': return 'Payment Denied';
//         case 'CHALLENGED': return 'Approval Requested';
//         default: return 'Payment Initiated';
//     }
// }

// // HELPER: Mengamankan data agar selalu berbentuk String Teks (Mencegah Crash Frontend)
// const safeStringify = (val) => {
//     if (!val) return "Unknown";
//     if (typeof val === 'string') return val;
//     if (typeof val === 'object') {
//         return val.name || val.reason || val.description || val.rule || "Risk Factor";
//     }
//     return String(val);
// };

// exports.initiateTransaction = async (req, res) => {
//     const {
//         email, cifNumber, amount, currency, beneficiaryAccount,
//         merchantName, description, type, telemetry
//     } = req.body;

//     const channel = req.apiClient ? req.apiClient.channel : 'MOBILE';
//     const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip;

//     try {
//         if (!email || !cifNumber || !amount || !currency) {
//             return res.status(400).json({ error: "Missing required fields" });
//         }

//         const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
//         if (!user || user.cifNumber !== cifNumber) {
//             return res.status(401).json({ error: 'User not found or CIF mismatch' });
//         }

//         const segment = (user.companyName || user.role === 'ADMIN') ? 'CORPORATE' : 'CONSUMER';

//         const riskContext = {
//             userId: user.id, email: user.email, userSegment: segment, channel: channel,
//             amount: Number(amount), currency: currency.toUpperCase(),
//             ipAddress: ipAddress, deviceId: telemetry?.device_model || 'unknown',
//             beneficiaryAccount: beneficiaryAccount || null, merchantName: merchantName || null,
//             telemetry: telemetry || {}
//         };

//         const riskResult = await RiskEngine.calculateRisk(riskContext);
//         console.log(`[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`);

//         const policyResult = await PolicyEngine.evaluateAuthPolicy({
//             segment: segment,
//             channel: channel,
//             action: 'TRANSACTION',
//             riskScore: riskResult.score
//         });

//         const policyDecision = policyResult.decision;
//         const transactionDraft = { amount, currency, beneficiaryAccount, merchantName, description, type };
//         const trackingId = generatePaymentId();

//         // =========================================================
//         // PENGGABUNGAN KEAMANAN (INTERSECTION)
//         // =========================================================
//         let finalMethods = policyDecision.allowedMethods || [];
//         const amountMandatedMethods = riskResult.amountMandatedMethods || [];

//         // 1. Jika tabel limit nominal mewajibkan step-up
//         if (amountMandatedMethods.length > 0) {
//             policyDecision.status = 'CHALLENGED'; // Paksa minta verifikasi
//             if (finalMethods.length === 0) {
//                 finalMethods = amountMandatedMethods;
//             } else {
//                 // IRISAN: Coret metode dari Policy yang tidak diizinkan oleh aturan Nominal
//                 finalMethods = finalMethods.filter(method => amountMandatedMethods.includes(method));
//             }
//         }

//         // 2. Evaluasi Pemblokiran Mutlak
//         let responseMessage = "Transaction Auto-Approved";

//         if (riskResult.level === 'CRITICAL' || riskResult.isBlockedByAmount || policyDecision.status === 'REJECTED') {
//             policyDecision.status = 'BLOCKED';
//             responseMessage = "Transaction Blocked due to Critical Risk or Limits";
//         } else if (policyDecision.status === 'CHALLENGED') {
//             if (finalMethods.length === 0) {
//                 // Jika hasil irisan kosong (Misal: Policy cuma izinkan OTP, tapi Nominal mewajibkan FIDO2)
//                 policyDecision.status = 'BLOCKED';
//                 responseMessage = "Blocked: Conflicting Security Policies";
//             } else {
//                 responseMessage = "Step-Up Authentication Required";
//             }
//         }

//         policyDecision.allowedMethods = finalMethods;

//         // Format tags untuk logging
//         const factorTags = (riskResult.factors || []).map(f => ({ label: safeStringify(f), class: 'warning' }));
//         const combinedTags = [{ label: `${amount} ${currency.toUpperCase()}`, class: 'info' }, ...factorTags];

//         const baseLogData = {
//             paymentId: trackingId,
//             telemetry: telemetry || {},
//             amount: Number(amount),
//             currency: currency.toUpperCase(),
//             merchant: merchantName || beneficiaryAccount || "Unknown",
//             tags: combinedTags,
//             factors: riskResult.factors
//         };

//         // =========================================================
//         // KEPUTUSAN FINAL KE SDK
//         // =========================================================
//         if (policyDecision.status === 'APPROVED') {
//             await createRichAuthLog(req, user, {
//                 eventType: getEventDescription('APPROVED'), status: 'APPROVED',
//                 riskScore: riskResult.score, message: "Transaction Auto-Approved",
//                 data: baseLogData
//             });

//             return res.json({
//                 status: 'ready_to_execute', transactionId: trackingId,
//                 riskScore: riskResult.score, riskFactors: riskResult.factors, data: transactionDraft
//             });
//         }
//         else if (policyDecision.status === 'CHALLENGED') {
//             const challengeRes = await javaClient.getUnifiedChallenge();

//             await createRichAuthLog(req, user, {
//                 eventType: getEventDescription('CHALLENGED'), status: 'CHALLENGED',
//                 riskScore: riskResult.score, message: "Step-Up Authentication Required",
//                 data: { ...baseLogData, requestedMethods: policyDecision.allowedMethods }
//             });

//             return res.json({
//                 status: 'challenge_required', transactionId: trackingId, riskScore: riskResult.score,
//                 transactionData: transactionDraft, challenge: challengeRes.challenge || challengeRes,
//                 allowedMethods: policyDecision.allowedMethods, requirements: policyDecision.requirements,
//                 message: 'Transaction requires step-up authentication'
//             });
//         }
//         else {
//             await createRichAuthLog(req, user, {
//                 eventType: getEventDescription('BLOCKED'), status: 'BLOCKED',
//                 riskScore: riskResult.score, message: 'Transaction Blocked due to High Risk or Policy',
//                 data: baseLogData
//             });
//             return res.status(403).json({ error: 'Transaction Blocked due to High Risk or Policy' });
//         }
//     } catch (err) {
//         console.error("Init Trx Error:", err);
//         res.status(500).json({ error: 'Transaction Initialization Failed' });
//     }
// };

// /**
//  * @description Fungsi ini dipanggil SDK SETELAH transaksi sukses di sisi klien.
//  * Akan secara cerdas MENCARI log 'Challenged' terakhir dan MENGGABUNGKANNYA (Update)
//  * agar menjadi 1 log utuh dengan status SUCCESS dan Telemetry lengkap.
//  */
// exports.executeTransaction = async (req, res) => {
//     const {
//         email, cifNumber, amount, currency, beneficiaryAccount, merchantName,
//         description, type, status, riskScore, riskLevel
//     } = req.body;

//     try {
//         const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
//         if (!user || user.cifNumber !== cifNumber) {
//             return res.status(401).json({ error: 'User not found or CIF mismatch' });
//         }

//         // 1. CARI LOG TERAKHIR (Dalam 5 menit terakhir)
//         const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//         const recentLogs = await prisma.authLog.findMany({
//             where: {
//                 email: user.email,
//                 status: 'CHALLENGED',
//                 createdAt: { gte: fiveMinutesAgo }
//             },
//             orderBy: { createdAt: 'desc' },
//             take: 1
//         });

//         let finalTransactionId = generatePaymentId();

//         // 2. CATAT TRANSAKSI FINANSIAL KE TABEL 'TRANSACTION'
//         const newTrx = await prisma.transaction.create({
//             data: {
//                 id: finalTransactionId,
//                 transactionNo: finalTransactionId,
//                 userId: user.id,
//                 type: type || 'TRANSFER',
//                 amount: Number(amount),
//                 currency: currency || 'IDR',
//                 toAccount: beneficiaryAccount || merchantName || 'Unknown',
//                 merchantName: merchantName || null,
//                 description: description || `Trx to ${beneficiaryAccount || merchantName}`,
//                 status: status || 'SUCCESS',
//                 authResult: 'SUCCESS',
//                 riskScore: riskScore || 0,
//                 riskLevel: riskLevel || 'LOW',
//                 timestamp: new Date()
//             }
//         });

//         // 3. UPDATE LOG AUTHENTIKASI MENJADI SATU KESATUAN (MENCEGAH DOUBLE LOG)
//         if (recentLogs.length > 0) {
//             const targetLog = recentLogs[0];

//             // Auto-deteksi nama kolom JSON di database Anda (data / riskTags / metadata)
//             let jsonColumn = 'data';
//             if (targetLog.riskTags !== undefined) jsonColumn = 'riskTags';
//             else if (targetLog.metadata !== undefined) jsonColumn = 'metadata';

//             const existingJson = typeof targetLog[jsonColumn] === 'object' ? targetLog[jsonColumn] : {};
//             const oldTags = existingJson.tags || [];

//             // Bersihkan tag 'warning' dan tambahkan tag 'Sukses'
//             const newTags = [
//                 ...oldTags.filter(t => t.class !== 'warning'),
//                 { label: 'Step-Up Verified (FIDO2/PIN)', class: 'success' }
//             ];

//             // PERBAIKAN: Hapus root `message` dan masukkan ke dalam JSON payload
//             await prisma.authLog.update({
//                 where: { id: targetLog.id },
//                 data: {
//                     status: status === 'SUCCESS' ? 'SUCCESS' : 'FAILED',
//                     eventType: 'Payment Approved',
//                     [jsonColumn]: {
//                         ...existingJson,
//                         paymentId: finalTransactionId,
//                         transactionNo: finalTransactionId,
//                         tags: newTags,
//                         message: 'Transaction executed and verified successfully' // Dipindah ke dalam JSON
//                     }
//                 }
//             });

//         } else {
//             // FALLBACK: Untuk transaksi "LOW RISK" yang tidak melewati status 'CHALLENGED'
//             await createRichAuthLog(req, user, {
//                 eventType: 'Payment Approved',
//                 status: status || 'SUCCESS',
//                 riskScore: riskScore || 0,
//                 message: "Transaction executed smoothly",
//                 data: {
//                     paymentId: newTrx.id,
//                     transactionNo: newTrx.transactionNo,
//                     merchant: merchantName || beneficiaryAccount,
//                     amount: Number(amount),
//                     currency: currency,
//                     tags: [{ label: `${amount} ${currency.toUpperCase()}`, class: 'success' }]
//                 }
//             });
//         }

//         res.json({
//             success: true,
//             message: 'Transaction Record Saved and Log Updated',
//             data: { transactionId: newTrx.id, transactionNo: newTrx.transactionNo, recordedStatus: newTrx.status }
//         });

//     } catch (err) {
//         console.error("Execute Transaction Error:", err);
//         res.status(500).json({ error: 'Failed to record transaction history' });
//     }
// };

/**
 * @file clientTransactionController.js
 * @description Controller khusus SDK: Menangani Analisa Risiko, MFA Chaining, Lockout Brute-Force, dan Known Device.
 */

const prisma = require("../../config/db");
const javaClient = require("../../services/JavaAuthClient");
const { createRichAuthLog } = require("../../utils/richLogger");
const { customAlphabet } = require("nanoid");
const { getNetworkInfo } = require("../../utils/geoIpService");

const RiskEngine = require("../../utils/riskEngine");
const PolicyEngine = require("../../utils/authPolicies");

// Generator ID Transaksi Profesional (contoh: PAY_TX_8A7B6C5D4E)
const generatePaymentId = () =>
  `PAY_TX_${customAlphabet("0123456789ABCDEF", 10)()}`;

// Helper: Menerjemahkan status menjadi Event Type yang rapi untuk Dashboard
function getEventDescription(status) {
  switch (status) {
    case "APPROVED":
      return "Payment Risk Approved";
    case "BLOCKED":
      return "Payment Denied";
    case "CHALLENGED":
      return "Approval Requested";
    default:
      return "Payment Initiated";
  }
}

exports.initiateTransaction = async (req, res) => {
  const {
    email,
    cifNumber,
    amount,
    currency,
    beneficiaryAccount,
    merchantName,
    description,
    type,
    telemetry,
  } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        
    if (!user || user.cifNumber !== cifNumber) {
      return res.status(401).json({ error: "User not found or CIF mismatch" });
    }
// --- 1. VALIDASI DASAR ---
    if (!email || !cifNumber || !amount || !currency) {
      return res.status(400).json({ error: "Missing required fields" });
    }
        if (user.status === 'suspended') {
             await createRichAuthLog(req, user, {
                eventType: 'Transaction Blocked',
                status: 'FAILED',
                authMethod: 'TRANSACTION',
                message: 'Transaction blocked due to suspended account',
                data: {
                    amount: Number(amount),
                    tags: [{ label: 'Account Suspended', class: 'error' }]
                }
            });
            return res.status(403).json({ error: "Account Suspended: Transactions are blocked." });
        }
  const channel = req.apiClient ? req.apiClient.channel : "MOBILE";
  const ipAddress =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || req.ip;

    

    const segment =
      user.companyName || user.role === "ADMIN" ? "CORPORATE" : "CONSUMER";
    const netInfo = getNetworkInfo(ipAddress);
    const countryCode = netInfo.country || "UN";

    const riskContext = {
      userId: user.id,
      email: user.email,
      userSegment: segment,
      channel: channel,
      amount: Number(amount),
      currency: currency.toUpperCase(),
      ipAddress: ipAddress,
      countryCode: countryCode, // SEKARANG GEOCHECK.JS BISA MEMBACA NEGARA!
      deviceId: telemetry?.device_model || "unknown",
      beneficiaryAccount: beneficiaryAccount || null,
      merchantName: merchantName || null,
      telemetry: telemetry || {},
    };

    // --- 2. KALKULASI RISIKO & EVALUASI KEBIJAKAN ---
    const riskResult = await RiskEngine.calculateRisk(riskContext);
    console.log(
      `[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`,
    );

    const policyResult = await PolicyEngine.evaluateAuthPolicy({
      segment: segment,
      channel: channel,
      action: "TRANSACTION",
      riskScore: riskResult.score,
    });

    const policyDecision = policyResult.decision;
    const transactionDraft = {
      amount,
      currency,
      beneficiaryAccount,
      merchantName,
      description,
      type,
    };
    const trackingId = generatePaymentId();
    let responseMessage = "Transaction Auto-Approved";

    // --- 3. PEMERIKSAAN BRUTE-FORCE (AKUN LOCKOUT) ---
    const lockoutTime = new Date(
      Date.now() - policyDecision.metadata.lockoutDuration * 1000,
    );
    const failedAttempts = await prisma.authLog.count({
      where: {
        email: user.email,
        status: "FAILED",
        createdAt: { gte: lockoutTime },
      },
    });

    if (failedAttempts >= policyDecision.metadata.maxAttempts) {
      policyDecision.status = "BLOCKED";
      responseMessage = `Security Lockout: Too many failed attempts. Please try again later.`;
      riskResult.score = 100;
      riskResult.factors.push({
        label: "Brute-Force Lockout",
        class: "critical",
      });
    }

    // --- 4. PEMERIKSAAN PERANGKAT (KNOWN DEVICE REQUIRED) ---
    const isNewDevice = riskResult.factors.some(
      (f) =>
        (typeof f === "object" && f.label === "New Device") ||
        f === "New Device",
    );

    if (
      policyDecision.status !== "BLOCKED" &&
      policyDecision.metadata.knownDeviceRequired &&
      isNewDevice
    ) {
      policyDecision.status = "BLOCKED";
      responseMessage = `Security Policy Block: Transactions are not allowed from unrecognized devices.`;
      riskResult.score = 100;
      riskResult.factors.push({
        label: "Untrusted Device Blocked",
        class: "critical",
      });
    }

    // --- 5. PENGGABUNGAN KEAMANAN (MFA STACKING / PENUMPUKAN) ---
    if (policyDecision.status !== "BLOCKED") {
      if (
        riskResult.score >= 100 ||
        riskResult.isBlockedByAmount ||
        policyDecision.status === "REJECTED"
      ) {
        policyDecision.status = "BLOCKED";
        responseMessage = "Transaction Blocked: Critical Risk or Exceeds Limit";
      } else {
        const policyMethods = policyDecision.allowedMethods || [];
        const amountMethods = riskResult.amountMandatedMethods || [];
        let chainedMethods = [];

        // Susun antrean metode (Amount dulu, baru Policy)
        if (amountMethods.length > 0) chainedMethods.push(...amountMethods);
        if (policyMethods.length > 0) chainedMethods.push(...policyMethods);

        if (chainedMethods.length > 0) {
          policyDecision.status = "CHALLENGED";
          responseMessage = "Multi-Step Authentication Required";
          policyDecision.allowedMethods = chainedMethods;
        }
      }
    }

    // =========================================================
    // 6. PENYUSUNAN TAG LOG YANG AKURAT (WARNA DINAMIS)
    // =========================================================
    const factorTags = (riskResult.factors || []).map((f) => {
      if (typeof f === "object" && f.label)
        return { label: String(f.label), class: f.class || "warning" };
      return { label: String(f), class: "warning" };
    });

    // JANGAN LUPA: Ambil tag dari Auth Policy (Misal: Policy consumer_mobile_low)
    const policyTags = (policyDecision.tags || []).map((t) => {
      if (typeof t === "object" && t.label)
        return { label: String(t.label), class: t.class || "info" };
      return { label: String(t), class: "info" };
    });

    // WARNA DINAMIS: Menyesuaikan class warna dengan level risiko
    const levelColor =
      riskResult.level === "CRITICAL" || riskResult.level === "HIGH"
        ? "critical"
        : riskResult.level === "MEDIUM"
          ? "warning"
          : "success";

    const scoreColor =
      riskResult.score >= 70
        ? "critical"
        : riskResult.score >= 30
          ? "warning"
          : "success";

    // Gabungkan semuanya menjadi satu array yang rapi dan kaya warna
    const combinedTags = [
      { label: `${amount} ${currency.toUpperCase()}`, class: "info" },
      { label: `Level: ${riskResult.level}`, class: levelColor },
      { label: `Score: ${riskResult.score}`, class: scoreColor },
      ...factorTags,
      ...policyTags,
    ];

    const baseLogData = {
      paymentId: trackingId,
      telemetry: telemetry || {},
      amount: Number(amount),
      currency: currency.toUpperCase(),
      merchant: merchantName || beneficiaryAccount || "Unknown",
      tags: combinedTags,
      factors: riskResult.breakdown,
      riskScore: riskResult.score,
    };

    // --- 7. KEPUTUSAN FINAL KE SDK ---
    const finalEventType = getEventDescription(policyDecision.status);

    if (policyDecision.status === "APPROVED") {
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "APPROVED",
        message: responseMessage,
        data: baseLogData,
      });
      return res.json({
        status: "ready_to_execute",
        transactionId: trackingId,
        riskScore: riskResult.score,
        data: transactionDraft,
      });
    } else if (policyDecision.status === "CHALLENGED") {
      const challengeRes = await javaClient.getUnifiedChallenge();
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "CHALLENGED",
        message: responseMessage,
        data: {
          ...baseLogData,
          requestedMethods: policyDecision.allowedMethods,
        },
      });
      return res.json({
        status: "challenge_required",
        transactionId: trackingId,
        riskScore: riskResult.score,
        challenge: challengeRes.challenge || challengeRes,
        allowedMethods: policyDecision.allowedMethods,
        requirements: policyDecision.requirements,
        message: responseMessage,
      });
    } else {
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "BLOCKED",
        message: responseMessage,
        data: baseLogData,
      });
      return res
        .status(403)
        .json({ error: responseMessage, riskScore: riskResult.score });
    }
  } catch (err) {
    console.error("Init Trx Error:", err);
    res.status(500).json({ error: "Transaction Initialization Failed" });
  }
}
/**
 * @description Dipanggil SDK SETELAH transaksi sukses di sisi klien.
 * Menggabungkan log 'Challenged' menjadi 'Success' dan mencatat riwayat finansial.
 */
exports.executeTransaction = async (req, res) => {
  const {
    email,
    cifNumber,
    amount,
    currency,
    beneficiaryAccount,
    merchantName,
    description,
    type,
    status,
    riskScore,
    riskLevel,
  } = req.body;

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
                    status: 'FAILED',
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

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!user || user.cifNumber !== cifNumber)
      return res.status(401).json({ error: "User not found or CIF mismatch" });

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const recentLogs = await prisma.authLog.findMany({
      where: {
        email: user.email,
        status: "CHALLENGED",
        createdAt: { gte: fiveMinutesAgo },
      },
      orderBy: { createdAt: "desc" },
      take: 1,
    });

    let finalTransactionId = generatePaymentId();

    const newTrx = await prisma.transaction.create({
      data: {
        id: finalTransactionId,
        transactionNo: finalTransactionId,
        userId: user.id,
        type: type || "TRANSFER",
        amount: Number(amount),
        currency: currency || "IDR",
        toAccount: beneficiaryAccount || merchantName || "Unknown",
        merchantName: merchantName || null,
        description:
          description || `Trx to ${beneficiaryAccount || merchantName}`,
        status: status || "SUCCESS",
        authResult: "SUCCESS",
        riskScore: riskScore || 0,
        riskLevel: riskLevel || "LOW",
        timestamp: new Date(),
      },
    });

    if (recentLogs.length > 0) {
      const targetLog = recentLogs[0];
      let jsonColumn = "data";
      if (targetLog.riskTags !== undefined) jsonColumn = "riskTags";
      else if (targetLog.metadata !== undefined) jsonColumn = "metadata";

      const existingJson =
        typeof targetLog[jsonColumn] === "object" ? targetLog[jsonColumn] : {};
      const oldTags = existingJson.tags || [];

      // Pertahankan semua label, hanya ubah warna 'warning' menjadi 'info' (abu-abu/biru)
      // karena ancamannya sudah diverifikasi oleh user melalui FIDO2/PIN
      const newTags = [
        ...oldTags.map((t) =>
          t.class === "warning" ? { ...t, class: "info" } : t,
        ),
        { label: "Step-Up Verified", class: "success" },
      ];

      await prisma.authLog.update({
        where: { id: targetLog.id },
        data: {
          status: status === "SUCCESS" ? "SUCCESS" : "FAILED",
          eventType: "Payment Risk Approved",
          [jsonColumn]: {
            ...existingJson,
            paymentId: finalTransactionId,
            transactionNo: finalTransactionId,
            tags: newTags,
            message: "Transaction executed and verified successfully",
            riskScore: riskScore || existingJson.riskScore || 0,
          },
        },
      });
    } else {
      // Transaksi LOW RISK yang tidak melewati proses CHALLENGE
      const tagColor =
        riskScore >= 70 ? "critical" : riskScore >= 30 ? "warning" : "info";

      await createRichAuthLog(req, user, {
        eventType: "Payment Risk Approved",
        status: status || "SUCCESS",
        message: "Transaction executed smoothly",
        data: {
          paymentId: newTrx.id,
          transactionNo: newTrx.transactionNo,
          merchant: merchantName || beneficiaryAccount,
          amount: Number(amount),
          currency: currency,
          riskScore: riskScore || 0,
          tags: [
            { label: `${amount} ${currency.toUpperCase()}`, class: "success" },
            { label: `Score: ${riskScore || 0}`, class: tagColor },
          ],
        },
      });
    }

    res.json({
      success: true,
      message: "Transaction Record Saved and Log Updated",
      data: {
        transactionId: newTrx.id,
        transactionNo: newTrx.transactionNo,
        recordedStatus: newTrx.status,
      },
    });
  } catch (err) {
    console.error("Execute Transaction Error:", err);
    res.status(500).json({ error: "Failed to record transaction history" });
  }
};
