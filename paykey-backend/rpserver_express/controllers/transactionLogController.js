const prisma = require('../config/db');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- 1. KONFIGURASI GOOGLE GEMINI ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Gunakan model sesuai request Anda
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash", // Saya ubah ke 1.5 karena 2.5 belum stabil publik, tapi silakan ganti jika Anda punya akses
    generationConfig: { 
        responseMimeType: "application/json" 
    }
});

// --- HELPER: FUNGSI PENGAMBIL DATA (DIPISAH AGAR BISA DIPAKAI EVIDENCE) ---
// Ini adalah logika database asli Anda yang saya ekstrak keluar
async function gatherTransactionContext(id) {
    let tx = null;
    let authLog = null;

    // A. Coba cari di Tabel Transaction
    tx = await prisma.transaction.findUnique({
        where: { id: id },
        include: { user: { include: { knownDevices: true } } }
    });

    // B. Jika tidak ketemu, cari di Tabel AuthLog
    if (!tx) {
        const eventId = parseInt(id);
        if (!isNaN(eventId)) {
            authLog = await prisma.authLog.findUnique({ where: { id: eventId } });
            if (authLog) {
                const timeMin = new Date(authLog.createdAt.getTime() - 5000);
                const timeMax = new Date(authLog.createdAt.getTime() + 5000);
                const user = await prisma.user.findUnique({ where: { email: authLog.email } });
                if (user) {
                    tx = await prisma.transaction.findFirst({
                        where: { userId: user.id, timestamp: { gte: timeMin, lte: timeMax } },
                        include: { user: { include: { knownDevices: true } } }
                    });
                }
            }
        }
    }

    // C. Virtual Transaction (Untuk Blocked)
    if (!tx && authLog) {
        const user = await prisma.user.findUnique({ where: { email: authLog.email }, include: { knownDevices: true } });
        let parsedAmount = 0;
        if (authLog.riskTags && Array.isArray(authLog.riskTags)) {
             const amountTag = authLog.riskTags.find(t => t.label && (t.label.includes('MYR') || t.label.includes('RM')));
             if (amountTag) parsedAmount = parseFloat(amountTag.label.replace(/[^0-9.-]+/g,""));
        }
        tx = {
            id: `EVENT-${authLog.id}`,
            amount: parsedAmount,
            currency: "MYR",
            merchantName: "Unknown (Blocked/Login)",
            merchantCategory: "Unknown", // Default
            locationCity: authLog.location?.split(',')[0] || "Unknown",
            locationCountry: authLog.countryCode || "UN",
            timestamp: authLog.createdAt,
            auth_method: "FIDO2",
            auth_result: authLog.status,
            status: authLog.status,
            riskScore: authLog.riskScore,
            user: user
        };
    }

    if (!tx) throw new Error("Transaction/Event not found");

    // D. Agregasi Data
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Pastikan field timestamp sesuai schema (createdAt atau timestamp)
    const stats = await prisma.transaction.aggregate({
        where: { userId: tx.user.id, timestamp: { gte: thirtyDaysAgo } },
        _count: { id: true }, _avg: { amount: true }, _min: { amount: true }, _max: { amount: true }
    });

    const pastTxs = await prisma.transaction.findMany({
        where: { userId: tx.user.id, timestamp: { gte: thirtyDaysAgo } },
        select: { locationCity: true, merchantName: true },
        distinct: ['locationCity', 'merchantName']
    });

    const recentAuthLogs = await prisma.authLog.findMany({
        where: { email: tx.user.email, createdAt: { gte: new Date(new Date() - 172800000) } },
        orderBy: { createdAt: 'desc' },
        take: 20
    });

    const txTime = tx.timestamp instanceof Date ? tx.timestamp.toISOString() : new Date(tx.timestamp).toISOString();

    // E. Return Context
    return {
        transaction: {
            id: tx.id,
            currency: tx.currency || "MYR",
            amount: tx.amount || 0,
            merchant_name: tx.merchantName || "Unknown",
            merchant_category: tx.merchantCategory || "Retail",
            location: { city: tx.locationCity || "Unknown", country: tx.locationCountry || "UN" },
            timestamp: txTime,
            auth_method: tx.auth_method || "FIDO2",
            auth_result: tx.status || tx.auth_result
        },
        user: {
            name: tx.user.fullName || tx.user.email,
            id: tx.user.id,
            account_age_days: Math.floor((new Date() - new Date(tx.user.createdAt)) / 86400000),
            typical_locations: [...new Set(pastTxs.map(t => t.locationCity).filter(Boolean))],
            typical_merchant_categories: [...new Set(pastTxs.map(t => t.merchantName).filter(Boolean))],
            transaction_stats_30d: {
                count: stats._count.id,
                average_amount: stats._avg.amount || 0,
                min_amount: stats._min.amount || 0,
                max_amount: stats._max.amount || 0
            }
        },
        device: {
            device_name: tx.user.knownDevices?.[0]?.model || "Unknown Device",
            device_type: "Mobile",
            auth_method: "FIDO2",
            is_known_device: (tx.riskScore || 0) < 50,
            last_used_before_this: "N/A"
        },
        recent_activity: recentAuthLogs.map(l => ({
            timestamp: l.createdAt.toISOString(),
            action: l.eventType,
            merchant: l.device || 'Unknown',
            location: l.location || 'Unknown',
            status: l.status,
            amount: l.eventType === 'PAYMENT' ? 0 : undefined
        }))
    };
}

// --- 2. PROMPT BUILDER (KODE ASLI ANDA) ---
function buildInvestigationPrompt(context) {
    const fmt = (val) => val ? val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00';
    
    const recentActivityStr = context.recent_activity.map(a => {
        let str = `- ${a.timestamp}: ${a.action} - ${a.merchant || a.device || 'N/A'} @ ${a.location} (${a.status})`;
        if (a.amount) str += ` - ${context.transaction.currency} ${fmt(a.amount)}`;
        return str;
    }).join('\n');

    return `You are a fraud investigation assistant for Secure Paykey.

Analyze the following transaction/event. Identify anomalies by comparing against baseline behavior.

## Current Transaction/Event Under Review
- Transaction ID: ${context.transaction.id}
- Amount: ${context.transaction.currency} ${fmt(context.transaction.amount)}
- Merchant: ${context.transaction.merchant_name} (${context.transaction.merchant_category})
- Location: ${context.transaction.location.city}, ${context.transaction.location.country}
- Time: ${context.transaction.timestamp}
- Auth Method: ${context.transaction.auth_method}
- Auth Result: ${context.transaction.auth_result}

## User Profile & Baseline Behavior
- User: ${context.user.name} (${context.user.id})
- Account Age: ${context.user.account_age_days} days
- Typical Locations: ${context.user.typical_locations.join(', ')}
- Typical Merchants: ${context.user.typical_merchant_categories.join(', ')}
- Last 30 Days: ${context.user.transaction_stats_30d.count} transactions
- Average Transaction: ${context.transaction.currency} ${fmt(context.user.transaction_stats_30d.average_amount)}
- Transaction Range: ${context.transaction.currency} ${fmt(context.user.transaction_stats_30d.min_amount)} - ${fmt(context.user.transaction_stats_30d.max_amount)}

## Device Information 
- Device: ${context.device.device_name} (${context.device.device_type})
- Auth Method: ${context.device.auth_method}
- Known Device: ${context.device.is_known_device}
- Last Used: ${context.device.last_used_before_this}

## Recent Activity (Last 48 Hours)
${recentActivityStr}

## Your Analysis Tasks
1. **Identify Anomalies**: Check for location, amount, velocity, or device mismatches.
2. **Risk Assessment**: Level (Critical/High/Medium/Low) + Confidence %.
3. **Key Findings**: Suspicious vs Mitigating factors.
4. **Timeline Analysis**: Reconstruct the event.
5. **Pattern Identification**: e.g., ATO (Account Takeover), Device Theft, Friendly Fraud, or None.
6. **Recommended Actions**: Immediate & Follow-up actions for the admin.

Respond strictly in the following JSON format:
{
  "risk_assessment": {
    "level": "critical|high|medium|low",
    "confidence": 0-100,
    "summary": "string"
  },
  "anomalies_detected": [
    {"type": "location|amount|velocity|merchant|device", "severity": "high|medium|low", "description": "string"}
  ],
  "key_findings": {
    "suspicious": ["string"],
    "mitigating": ["string"]
  },
  "timeline_analysis": {
    "reconstruction": "string",
    "events": [{"time": "HH:MM", "event": "string", "risk": "string"}]
  },
  "pattern_match": {
    "pattern_name": "string",
    "confidence": 0-100,
    "description": "string"
  },
  "recommended_actions": {
    "immediate": ["string"],
    "followup": ["string"]
  }
}`;
}

// --- 3. ENDPOINTS ---

// A. ENDPOINT EVIDENCE (DATA DB) -> CEPAT
exports.getTransactionEvidence = async (req, res) => {
    try {
        // Hanya panggil fungsi pengumpul data, TIDAK panggil AI
        const context = await gatherTransactionContext(req.params.id);
        res.json({ raw_data: context });
    } catch (err) {
        console.error("Evidence Error:", err);
        res.status(404).json({ error: err.message });
    }
};

// B. ENDPOINT ANALYSIS (GEMINI AI) -> LAMBAT
exports.getInvestigationReport = async (req, res) => {
    const { id } = req.params;

    try {
        // 1. Ambil data (sama seperti evidence)
        const llmContext = await gatherTransactionContext(id);

        // 2. Kirim ke Gemini
        const fullPrompt = buildInvestigationPrompt(llmContext);
        console.log(`[Gemini] Analyzing ID: ${id}...`);

        const result = await model.generateContent(fullPrompt);
        const responseText = result.response.text();
        
        const aiResponse = JSON.parse(responseText);

        // Kirim hasil AI
        res.json({
            analysis: aiResponse,
            // raw_data tidak perlu dikirim lagi karena sudah ada di endpoint evidence
        });

    } catch (err) {
        console.error("Gemini Investigation Error:", err);
        res.status(500).json({ 
            error: "Investigation failed", 
            details: err.message 
        });
    }
};