const prisma = require('../config/db');

// --- HELPER: Bandingkan JSON Lama vs Baru (Untuk Log Detail) ---
function generateDiff(oldCondition, newCondition) {
    if (!oldCondition) return "Initial configuration created";

    try {
        const oldObj = typeof oldCondition === 'string' ? JSON.parse(oldCondition) : oldCondition;
        const newObj = typeof newCondition === 'string' ? JSON.parse(newCondition) : newCondition;
        const changes = [];

        // Mapping nama field teknis ke nama yang enak dibaca user
        const readableKeys = {
            userVerification: "User Verification",
            uvCache: "UV Cache",
            requireStepUp: "Step-Up",
            stepUpMethods: "Step-Up Methods",
            txnSigning: "Txn Signing",
            knownDevice: "Known Device",
            minDeviceAge: "Min Device Age",
            maxAttempts: "Max Attempts",
            lockoutDuration: "Lockout Duration",
            lockoutAction: "Lockout Action",
            totalTimeout: "Total Timeout",
            fido2Timeout: "FIDO2 Timeout",
            baseDelay: "Base Delay",
            progDelay: "Progressive Delay"
        };

        for (const key in newObj) {
            // Bandingkan jika nilai berubah
            if (JSON.stringify(oldObj[key]) !== JSON.stringify(newObj[key])) {
                const label = readableKeys[key] || key;
                let valFrom = oldObj[key];
                let valTo = newObj[key];

                if (typeof valTo === 'boolean') {
                    changes.push(`${label} ${valTo ? 'enabled' : 'disabled'}`);
                } else if (Array.isArray(valTo)) {
                    changes.push(`${label} set to [${valTo.join(', ')}]`);
                } else {
                    changes.push(`${label} changed from ${valFrom} to ${valTo}`);
                }
            }
        }

        return changes.length > 0 ? changes.join(", ") : "Settings updated";
    } catch (e) {
        return "Configuration updated";
    }
}

// ==========================================
// 1. AUTH POLICIES (Core Feature)
// ==========================================

// GET: Ambil semua policy
exports.getPolicies = async (req, res) => {
    try {
        console.log("Fetching policies...");
        const policies = await prisma.authPolicy.findMany({
            orderBy: { priority: 'asc' }
        });
        
        // Return array kosong jika null/undefined
        res.json(policies || []);
    } catch (err) {
        console.error("CRITICAL ERROR [getPolicies]:", err.message);
        res.status(500).json({ error: "Database error fetching policies", details: err.message });
    }
};

// POST: Upsert (Create or Update) Policy
exports.upsertPolicy = async (req, res) => {
    const { segment, channel, riskLevel, condition, adminEmail } = req.body;

    // [LOGIC SESI USER]
    // 1. Cek req.user (dari Middleware Auth Session/JWT)
    // 2. Jika tidak ada, fallback ke adminEmail kiriman frontend
    // 3. Jika tidak ada juga, catat sebagai 'System'
    const actorEmail = req.user?.email || adminEmail || 'System';
    const action = req.body.action || 'LOGIN';

    if (!segment || !channel || !riskLevel) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Standardisasi
    const seg = segment.toUpperCase();
    const chan = channel.toUpperCase();
    const risk = riskLevel.toUpperCase();
    const policyName = `${seg.toLowerCase()}_${chan.toLowerCase()}_${risk.toLowerCase()}`;
    const readableName = `${seg.charAt(0) + seg.slice(1).toLowerCase()} ${risk.charAt(0) + risk.slice(1).toLowerCase()} Risk`;

    try {
        // 1. Ambil data lama untuk diffing
        const oldPolicy = await prisma.authPolicy.findUnique({
            where: { policy_idx: { segment: seg, channel: chan, riskLevel: risk,action: action } }
        });

        const actionType = oldPolicy ? 'Updated' : 'Created';
        
        // 2. Simpan Policy
        const policy = await prisma.authPolicy.upsert({
            where: { policy_idx: { segment: seg, channel: chan, riskLevel: risk,action: action } },
            update: { condition, name: policyName, isActive: true, updatedAt: new Date() },
            create: { 
                segment: seg, channel: chan, riskLevel: risk, condition, 
                name: policyName, priority: seg === 'CORPORATE' ? 10 : 20, isActive: true 
            }
        });

        // 3. Generate Pesan Log Detail
        // Format: "Updated consumer High Risk policy: Max Attempts changed from 3 to 2"
        const diffDetails = generateDiff(oldPolicy ? oldPolicy.condition : null, condition);
        const logAction = `${actionType} ${readableName} policy: ${diffDetails}`;

        // 4. Simpan ke Audit Log
        await prisma.policyAuditLog.create({
            data: {
                policyName: policyName, 
                action: logAction, 
                adminEmail: actorEmail,
                changes: condition      
            }
        });

        res.json(policy);

    } catch (err) {
        console.error("Upsert Error:", err);
        res.status(500).json({ error: "Failed to save policy", details: err.message });
    }
};

// GET: Audit Logs (Limit 3)
exports.getPolicyAuditLogs = async (req, res) => {
    try {
        const logs = await prisma.policyAuditLog.findMany({
            orderBy: { createdAt: 'desc' },
            take: 3 
        });
        res.json(logs || []);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ==========================================
// 2. AMOUNT LIMITS (Safeguarded)
// ==========================================

exports.getAmountLimits = async (req, res) => {
    try {
        const data = await prisma.amountLimit.findMany({ orderBy: { segment: 'asc' } });
        res.json(data || []);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch limits", details: err.message });
    }
};

exports.createAmountLimit = async (req, res) => {
    try {
        const { segment, minAmount, maxAmount, weight, label, stepUp, methods } = req.body;
        if (!segment) return res.status(400).json({ error: "Segment is required" });

        const newLimit = await prisma.amountLimit.create({
            data: {
                segment,
                minAmount: parseFloat(minAmount),
                maxAmount: maxAmount ? parseFloat(maxAmount) : null,
                weight: parseInt(weight) || 0,
                label,
                stepUp: stepUp || false,
                methods: methods || [] 
            }
        });
        res.json(newLimit);
    } catch (err) {
        res.status(500).json({ error: "Failed to create limit", details: err.message });
    }
};

exports.updateAmountLimit = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await prisma.amountLimit.update({ where: { id }, data: req.body });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Failed to update limit", details: err.message });
    }
};

exports.deleteAmountLimit = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.amountLimit.delete({ where: { id } });
        res.json({ status: "deleted", id });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete limit", details: err.message });
    }
};

// ==========================================
// 3. RISK RULES (Safeguarded)
// ==========================================
// --- 1. GET ALL RISK RULES ---
// exports.getRiskRules = async (req, res) => {
//     try {
//         // Ambil data dari DB, urutkan berdasarkan isActive dan bobot risiko
//         // Catatan: Di DB kolomnya adalah 'weight' dan 'name'
//         const rules = await prisma.$queryRaw`
//             SELECT * FROM config_risk_rules 
//             ORDER BY isActive DESC, weight DESC
//         `;

//         // Format data agar sesuai dengan yang diharapkan Frontend
//         const formattedRules = rules.map(r => ({
//             id: r.id,
//             ruleType: r.ruleType,
//             ruleName: r.name,       // Mapping DB 'name' -> API 'ruleName'
//             riskScore: r.weight,    // Mapping DB 'weight' -> API 'riskScore'
//             isActive: Boolean(r.isActive),
//             // Parse JSON parameters (karena MySQL kadang mengembalikannya sebagai string)
//             parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : r.parameters
//         }));

//         console.log(formattedRules);

//         res.json(formattedRules);
//     } catch (e) {
//         console.error("[Config] Get Rules Error:", e);
//         res.status(500).json({ error: "Failed to fetch risk rules" });
//     }
// };

// // --- 2. BATCH UPDATE RULES (SAVE) ---
// exports.batchUpdateRiskRules = async (req, res) => {
//     try {
//         const { rules } = req.body;
        
//         if (!Array.isArray(rules) || rules.length === 0) {
//             return res.status(400).json({ error: "Invalid payload: rules array required" });
//         }

//         console.log(`[Config] Updating ${rules.length} rules...`);

//         // Gunakan Transaction untuk update massal yang aman
//         await prisma.$transaction(
//             rules.map(rule => {
//                 // Pastikan parameters di-stringify kembali ke JSON String untuk DB
//                 const paramString = typeof rule.parameters === 'object' 
//                     ? JSON.stringify(rule.parameters) 
//                     : rule.parameters;

//                 // Update ke kolom DB yang benar ('weight', 'name')
//                 // Kita gunakan executeRaw karena ruleType unik
//                 return prisma.$executeRaw`
//                     UPDATE config_risk_rules 
//                     SET 
//                         isActive = ${rule.isActive ? 1 : 0},
//                         weight = ${parseInt(rule.riskScore)}, 
//                         parameters = ${paramString},
//                         updatedAt = NOW()
//                     WHERE ruleType = ${rule.ruleType}
//                 `;
//             })
//         );

//         res.json({ success: true, message: "Risk configuration updated successfully" });

//     } catch (e) {
//         console.error("[Config] Batch Update Error:", e);
//         res.status(500).json({ error: "Failed to update configuration" });
//     }
// };

// // --- 3. GET GLOBAL THRESHOLDS ---
// exports.getRiskConfig = async (req, res) => {
//     try {
//         const config = await prisma.$queryRaw`SELECT * FROM config_risk_thresholds LIMIT 1`;
//         if (config.length > 0) {
//             res.json(config[0]);
//         } else {
//             // Default jika belum ada data
//             res.json({ lowScore: 30, highScore: 70 });
//         }
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// };

// // --- 4. UPDATE GLOBAL THRESHOLDS ---
// exports.updateRiskConfig = async (req, res) => {
//     try {
//         const { lowScore, highScore } = req.body;
        
//         // Upsert logic (Update if exists, Insert if not)
//         await prisma.$executeRaw`
//             INSERT INTO config_risk_thresholds (id, lowScore, highScore, updatedAt)
//             VALUES ('default', ${lowScore}, ${highScore}, NOW())
//             ON DUPLICATE KEY UPDATE
//             lowScore = VALUES(lowScore),
//             highScore = VALUES(highScore),
//             updatedAt = NOW()
//         `;

//         res.json({ success: true });
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// };

// ==========================================
// 3. RISK RULES (No Path Params - Like Auth Policies)
// ==========================================

// --- 1. GET ALL RISK RULES (Semua Segment) ---
exports.getRiskRules = async (req, res) => {
    try {
        // Ambil SEMUA rule tanpa memfilter segment
        const rules = await prisma.riskRule.findMany({
            orderBy: [
                { segment: 'asc' },
                { isActive: 'desc' },
                { weight: 'desc' }
            ]
        });

        const formattedRules = rules.map(r => ({
            id: r.id,
            segment: r.segment, // PENTING: Kirim segment ke frontend agar bisa difilter
            ruleType: r.ruleCode || r.ruleType, 
            ruleName: r.name,       
            riskScore: r.weight,    
            isActive: Boolean(r.isActive),
            parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : r.parameters
        }));

        res.json(formattedRules);
    } catch (e) {
        console.error("[Config] Get Rules Error:", e);
        res.status(500).json({ error: "Failed to fetch risk rules" });
    }
};

// --- 2. BATCH UPDATE RULES (SAVE) ---
exports.batchUpdateRiskRules = async (req, res) => {
    try {
        const rulesPayload = Array.isArray(req.body) ? req.body : req.body.rules;
        
        if (!Array.isArray(rulesPayload) || rulesPayload.length === 0) {
            return res.status(400).json({ error: "Invalid payload: rules array required" });
        }

        const upsertPromises = rulesPayload.map(rule => {
            const seg = (rule.segment || 'consumer').toUpperCase(); // Ambil dari BODY
            const paramString = typeof rule.parameters === 'object' ? JSON.stringify(rule.parameters) : rule.parameters;
            const code = rule.ruleType || rule.ruleCode; 

            return prisma.riskRule.upsert({
                where: { segment_ruleCode: { segment: seg, ruleCode: code } },
                update: {
                    name: rule.ruleName || code,
                    isActive: Boolean(rule.isActive),
                    weight: parseInt(rule.riskScore) || 0,
                    parameters: paramString
                },
                create: {
                    segment: seg, ruleCode: code, ruleType: code, name: rule.ruleName || code,
                    isActive: Boolean(rule.isActive), weight: parseInt(rule.riskScore) || 0, parameters: paramString
                }
            });
        });

        await Promise.all(upsertPromises);
        res.json({ success: true, message: "Risk configuration updated successfully" });

    } catch (e) {
        console.error("[Config] Batch Update Error:", e);
        res.status(500).json({ error: "Failed to update configuration" });
    }
};

// --- 3. GET ALL GLOBAL THRESHOLDS ---
exports.getRiskConfig = async (req, res) => {
    try {
        // Ambil SEMUA threshold untuk semua segment
        const configs = await prisma.riskThreshold.findMany();
        res.json(configs || []);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// --- 4. UPDATE GLOBAL THRESHOLDS ---
exports.updateRiskConfig = async (req, res) => {
    try {
        const { segment, lowScore, highScore } = req.body;
        const seg = (segment || 'consumer').toUpperCase(); // Ambil dari BODY
        
        await prisma.riskThreshold.upsert({
            where: { segment: seg },
            update: { lowScore: parseInt(lowScore), highScore: parseInt(highScore) },
            create: { segment: seg, lowScore: parseInt(lowScore), highScore: parseInt(highScore) }
        });

        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};