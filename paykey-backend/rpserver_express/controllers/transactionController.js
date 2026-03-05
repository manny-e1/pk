const prisma = require('../config/db');
const { runRiskEngine } = require('../utils/riskEngine/index'); 
const { evaluateAuthPolicy } = require('../utils/authPolicies/index');
const { customAlphabet } = require('nanoid');
const { getNetworkInfo } = require('../utils/geoIpService'); 
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
        const { email, amount, currency, location, merchantName, telemetry, beneficiaryAccount } = req.body;

        console.log("-------------------------------------------------");
        console.log("INCOMING PAYLOAD:", JSON.stringify(req.body, null, 2)); 
        console.log("-------------------------------------------------");
        
        if (!email) return res.status(400).json({ error: "Email/User identifier is required" });
        if (!amount) return res.status(400).json({ error: "Amount is required" });

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: "User not found in database" });

        let detectedSegment = 'CONSUMER';
        if (user.role && (user.role.toUpperCase() === 'CORPORATE' || user.role.toUpperCase() === 'VIP')) {
            detectedSegment = 'CORPORATE';
        }

        const netInfo = getNetworkInfo(ip); 
        const telemetryData = telemetry || {};
        
        const ipLocationString = (netInfo.city !== 'Unknown City') ? `${netInfo.city}, ${netInfo.country}` : null;
        const finalLocationString = telemetryData.device_address || ipLocationString || location || "Unknown, UN";
        const countryCode = finalLocationString.split(',')[1]?.trim() || netInfo.country || "UN";

        let detectedChannel = 'WEB';
        const deviceModel = (telemetryData.device_model || '').toLowerCase();
        if (req.headers['x-client-type'] === 'API') {
            detectedChannel = 'API';
        } else if (deviceModel.includes('android') || deviceModel.includes('ios') || deviceModel.includes('iphone')) {
            detectedChannel = 'MOBILE';
        }

        console.log(`[TX] User: ${email} | Role: ${user.role} | Seg: ${detectedSegment} | Ch: ${detectedChannel} | IP: ${netInfo.ip}`);

        const targetBeneficiary = beneficiaryAccount || merchantName || "Unknown";

        const riskResult = await runRiskEngine({
            email: user.email,
            userId: user.id,
            userSegment: detectedSegment, 
            channel: detectedChannel,
            amount: parseFloat(amount),
            currency: currency || "MYR",
            telemetry: telemetry,
            ip: netInfo.ip,
            location: finalLocationString,
            countryCode: countryCode,
            beneficiary: beneficiaryAccount,
            merchantName: merchantName
        });

        let finalStatus = 'SUCCESS'; 
        let responseMessage = "Transaction Approved";
        let httpStatus = 200;
        let authRequirements = [];

        if (riskResult.riskScore >= 100) {
            finalStatus = 'BLOCKED';
            responseMessage = "Blocked: Critical Risk Detected (Score > 100)";
            riskResult.tags.push({ label: 'CRITICAL BLOCK', class: 'critical' });
        }
        else if (riskResult.action === 'DENY') {
            finalStatus = 'BLOCKED';
            responseMessage = riskResult.reason || "Transaction Blocked due to High Risk";
        } 
        else {
            
            const policyResult = await evaluateAuthPolicy({
                segment: detectedSegment,
                channel: detectedChannel,
                riskScore: riskResult.riskScore
            });

            const enforcement = policyResult.decision;

            if (enforcement.tags && enforcement.tags.length > 0) {
                riskResult.tags.push(...enforcement.tags);
            }

            if (enforcement.status === 'CHALLENGED') {
                finalStatus = 'CHALLENGED';
                responseMessage = "Step-Up Authentication Required";
                authRequirements = enforcement.requirements;
            } else if (enforcement.status === 'REJECTED') {
                finalStatus = 'BLOCKED';
                responseMessage = "Transaction Blocked by Auth Policy";
            } else {
                finalStatus = 'SUCCESS';
            }
            
            if (riskResult.action === 'CHALLENGE' && finalStatus !== 'BLOCKED') {
                 finalStatus = 'CHALLENGED';
                 responseMessage = riskResult.reason || "Additional Verification Required";
            }
        }

        const customTransactionId = generatePaymentId();

        const dynamicEventType = getEventDescription(finalStatus);

        const infoTag = { 
            label: `${amount} ${currency || 'MYR'}`, 
            class: 'info' 
        };
        const combinedTags = [infoTag, ...(riskResult.tags || [])];

        await createRichAuthLog(req, user, {
            eventType: dynamicEventType,
            status: finalStatus,
            authMethod: 'FIDO2_BIOMETRIC', 
            message: responseMessage,
            data: {
                paymentId: customTransactionId,
                amount: parseFloat(amount),
                currency: currency || "MYR",
                merchant: targetBeneficiary || "Unknown Merchant",
                riskScore: riskResult.riskScore,
                riskLevel: riskResult.riskLevel,
                tags: combinedTags, 
                reasonCodes: riskResult.breakdown, 
                telemetry: telemetry ,
                location: finalLocationString,
                beneficiaryAccount: beneficiaryAccount,
                requirements: authRequirements
            }
        });

        const createdTransaction = await prisma.transaction.create({
            data: {
                id: customTransactionId, 
                amount: parseFloat(amount),
                currency: currency || "MYR",
                merchantName: targetBeneficiary,
                userId: user.id,
                
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

        return res.status(httpStatus).json({
            status: finalStatus,
            transactionId: createdTransaction.id, 
            riskLevel: riskResult.riskLevel,
            message: responseMessage,
            riskData: riskResult.tags, 
            requiredAction: finalStatus === 'CHALLENGED' ? 'STEP_UP_AUTH' : 'NONE',
            requirements: authRequirements
        });

    } catch (error) {
        console.error("Transaction Error:", error);
        return res.status(500).json({ error: "Internal Server Error: " + error.message });
    }
};