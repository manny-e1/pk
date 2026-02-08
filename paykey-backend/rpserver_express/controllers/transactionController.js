const prisma = require('../config/db');
// [PENTING] Gunakan engine modular yang benar
const { runRiskEngine } = require('../utils/riskEngine/index'); 
// [BARU] Import Auth Policy
const { evaluateAuthPolicy } = require('../utils/authPolicies/index');
const { customAlphabet } = require('nanoid');
const { getNetworkInfo } = require('../utils/geoIpService'); 
// [PENTING] Gunakan logger yang sudah ada fiturnya
const { createRichAuthLog } = require('../utils/richLogger');

const generatePaymentId = () => `PAY_TX_${customAlphabet('0123456789ABCDEF', 10)()}`;

function getEventDescription(status) {
    switch (status) {
        case 'SUCCESS': return 'Payment Approved';
        case 'BLOCKED': return 'Payment Denied';
        case 'CHALLENGED': return 'Approval Requested';
        default: return 'Payment Initiated';
    }
}

exports.initiateTransaction = async (req, res) => {
    try {
        const { email, amount, currency, location, merchantName, device_telemetry, beneficiaryAccount } = req.body;

        console.log("-------------------------------------------------");
        console.log("INCOMING PAYLOAD:", JSON.stringify(req.body, null, 2)); 
        console.log("-------------------------------------------------");
        
        if (!email) return res.status(400).json({ error: "Email/User identifier is required" });
        if (!amount) return res.status(400).json({ error: "Amount is required" });

        // 1. Ambil IP Address
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        // 2. Cek User & Role
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: "User not found in database" });

        // Tentukan Segmen secara Dinamis
        let detectedSegment = 'CONSUMER';
        if (user.role && (user.role.toUpperCase() === 'CORPORATE' || user.role.toUpperCase() === 'VIP')) {
            detectedSegment = 'CORPORATE';
        }

        // 3. GEOIP & TELEMETRY
        const netInfo = getNetworkInfo(ip); 
        const telemetry = device_telemetry || {};
        
        // Lokasi
        const ipLocationString = (netInfo.city !== 'Unknown City') ? `${netInfo.city}, ${netInfo.country}` : null;
        const finalLocationString = telemetry.device_address || ipLocationString || location || "Unknown, UN";
        const countryCode = finalLocationString.split(',')[1]?.trim() || netInfo.country || "UN";

        // [BARU] Deteksi Channel untuk Auth Policy (MOBILE / WEB / API)
        let detectedChannel = 'WEB'; // Default
        const deviceModel = (telemetry.device_model || '').toLowerCase();
        if (req.headers['x-client-type'] === 'API') {
            detectedChannel = 'API';
        } else if (deviceModel.includes('android') || deviceModel.includes('ios') || deviceModel.includes('iphone')) {
            detectedChannel = 'MOBILE';
        }

        console.log(`[TX] User: ${email} | Role: ${user.role} | Seg: ${detectedSegment} | Ch: ${detectedChannel} | IP: ${netInfo.ip}`);

        const targetBeneficiary = beneficiaryAccount || merchantName || "Unknown";

        // 4. RISK ENGINE (SCORING)
        const riskResult = await runRiskEngine({
            email: user.email,
            userId: user.id,
            userSegment: detectedSegment, 
            channel: detectedChannel, // Update channel dinamis
            amount: parseFloat(amount),
            currency: currency || "MYR",
            telemetry: telemetry,
            ip: netInfo.ip,
            location: finalLocationString,
            countryCode: countryCode,
            beneficiary: beneficiaryAccount,
            merchantName: merchantName
        });

        // 5. EVALUASI AUTH POLICY & TENTUKAN FINAL STATUS
        let finalStatus = 'SUCCESS'; 
        let responseMessage = "Transaction Approved";
        let httpStatus = 200;
        let authRequirements = []; // Untuk memberitahu frontend (misal: ['UV_REQUIRED'])

        // --- LAYER 1: CRITICAL RISK (HARD BLOCK) ---
        // Sesuai dokumen: Jika skor >= 100, langsung tolak, abaikan policy.
        if (riskResult.riskScore >= 100) {
            finalStatus = 'BLOCKED';
            responseMessage = "Blocked: Critical Risk Detected (Score > 100)";
            riskResult.tags.push({ label: 'CRITICAL BLOCK', class: 'critical' });
        }
        // --- LAYER 2: RISK ENGINE ACTION ---
        else if (riskResult.action === 'DENY') {
            finalStatus = 'BLOCKED';
            responseMessage = riskResult.reason || "Transaction Blocked due to High Risk";
        } 
        else {
            // --- LAYER 3: AUTH POLICY ENFORCEMENT ---
            // Jika tidak diblokir, kita cek Policy Database: Apakah butuh Step-Up?
            
            const policyResult = await evaluateAuthPolicy({
                segment: detectedSegment,
                channel: detectedChannel,
                riskScore: riskResult.riskScore
            });

            const enforcement = policyResult.decision;

            // Gabungkan Tag Policy (misal: "Policy: Consumer Web High")
            if (enforcement.tags && enforcement.tags.length > 0) {
                riskResult.tags.push(...enforcement.tags);
            }

            // Terapkan Keputusan Policy
            if (enforcement.status === 'CHALLENGED') {
                finalStatus = 'CHALLENGED';
                responseMessage = "Step-Up Authentication Required";
                authRequirements = enforcement.requirements; // e.g., ['STEP_UP_AUTH', 'UV_REQUIRED']
            } else if (enforcement.status === 'REJECTED') {
                finalStatus = 'BLOCKED';
                responseMessage = "Transaction Blocked by Auth Policy";
            } else {
                // Tetap SUCCESS/APPROVED
                finalStatus = 'SUCCESS';
            }
            
            // Override message jika Risk Engine sebelumnya minta Challenge tapi Policy setuju
            if (riskResult.action === 'CHALLENGE' && finalStatus !== 'BLOCKED') {
                 finalStatus = 'CHALLENGED';
                 responseMessage = riskResult.reason || "Additional Verification Required";
            }
        }

        // 6. PERSIAPAN DATA LOGGING
        const customTransactionId = generatePaymentId();
        // Mapping status kode Anda ('BLOCKED') ke Event Type Rich Logger ('PAYMENT_FAILED')
        // const dynamicEventType = finalStatus === 'SUCCESS' ? 'PAYMENT_SUCCESS' :
        //                          finalStatus === 'CHALLENGED' ? 'PAYMENT_CHALLENGE' : 'PAYMENT_FAILED';

        const dynamicEventType = getEventDescription(finalStatus);

        // Gabungkan Info Transaksi ke dalam Tags
        const infoTag = { 
            label: `${amount} ${currency || 'MYR'}`, 
            class: 'info' 
        };
        const combinedTags = [infoTag, ...(riskResult.tags || [])];

        // 7. SIMPAN LOG (RICH LOGGER)
        await createRichAuthLog(req, user, {
            eventType: dynamicEventType,
            status: finalStatus, // Sesuaikan dengan format log
            authMethod: 'FIDO2_BIOMETRIC', 
            message: responseMessage,
            data: {
                paymentId: customTransactionId,
                amount: parseFloat(amount),
                currency: currency || "MYR",
                merchant: targetBeneficiary || "Unknown Merchant",
                riskScore: riskResult.riskScore,
                riskLevel: riskResult.riskLevel, // Tambahkan Level
                tags: combinedTags, 
                reasonCodes: riskResult.breakdown, 
                telemetry: telemetry ,
                location: finalLocationString,
                beneficiaryAccount: beneficiaryAccount,
                requirements: authRequirements // Info tambahan untuk log admin
            }
        });

        // 8. SIMPAN TRANSAKSI
        // Pastikan kolom riskReason di DB sudah @db.Text agar tidak error P2000
        const createdTransaction = await prisma.transaction.create({
            data: {
                id: customTransactionId, 
                amount: parseFloat(amount),
                currency: currency || "MYR",
                merchantName: targetBeneficiary,
                userId: user.id,
                
                // Mapping status untuk DB (SUCCESS/BLOCKED/CHALLENGED)
                authResult: finalStatus, 
                
                riskLevel: riskResult.riskLevel,
                riskScore: riskResult.riskScore,
                riskReason: JSON.stringify(riskResult.breakdown),
                
                ipAddress: ip,
                locationCity: finalLocationString.includes(',') ? finalLocationString.split(',')[0].trim() : finalLocationString,
                locationCountry: countryCode,
                timestamp: new Date()
            }
        });

        // 9. RESPONSE
        // Kirim 'requirements' agar frontend tahu harus menampilkan popup apa
        return res.status(httpStatus).json({
            status: finalStatus,
            transactionId: createdTransaction.id, 
            riskLevel: riskResult.riskLevel,
            message: responseMessage,
            riskData: riskResult.tags, 
            requiredAction: finalStatus === 'CHALLENGED' ? 'STEP_UP_AUTH' : 'NONE',
            requirements: authRequirements // [BARU] Array instruksi, e.g. ['UV_REQUIRED']
        });

    } catch (error) {
        console.error("Transaction Error:", error);
        return res.status(500).json({ error: "Internal Server Error: " + error.message });
    }
};