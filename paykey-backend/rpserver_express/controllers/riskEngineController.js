// controllers/riskEngineController.js
const prisma = require('../config/db');
const { runRiskEngine } = require('../utils/riskEngine/index'); // <--- PANGGIL OTAK UTAMA

// ==========================================
// A. CONFIGURATION (Admin Panel: GET & UPDATE)
// ==========================================

// 1. GET Config (Rules & Thresholds)
exports.getRiskConfig = async (req, res) => {
    try {
        let threshold = await prisma.riskThreshold.findFirst();
        if (!threshold) threshold = { lowScore: 30, highScore: 70 };

        const rules = await prisma.riskRule.findMany({
            orderBy: [{ isActive: 'desc' }, { weight: 'desc' }]
        });

        // Format untuk Frontend
        const formattedRules = rules.map(r => ({
            id: r.id,
            ruleType: r.ruleType,
            ruleName: r.name,
            riskScore: r.weight,
            isActive: Boolean(r.isActive),
            parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : (r.parameters || {})
        }));

        res.json({
            threshold: { lowScore: threshold.lowScore, highScore: threshold.highScore },
            rules: formattedRules
        });
    } catch (err) {
        console.error("Get Config Error:", err);
        res.status(500).json({ error: "Failed to fetch configuration" });
    }
};

// 2. UPDATE Config (Save Rules & Thresholds)
exports.updateRiskConfig = async (req, res) => {
    // ... (Kode update ini SUDAH BENAR di step sebelumnya, biarkan sama) ...
    // Intinya logic update database tetap di controller
    const { lowScore, highScore, rules } = req.body;

    try {
        // Update Threshold
        if (lowScore !== undefined && highScore !== undefined) {
            const existingThreshold = await prisma.riskThreshold.findFirst();
            if (existingThreshold) {
                await prisma.riskThreshold.update({
                    where: { id: existingThreshold.id },
                    data: { lowScore: parseInt(lowScore), highScore: parseInt(highScore) }
                });
            } else {
                await prisma.riskThreshold.create({
                    data: { id: 'default', lowScore: parseInt(lowScore), highScore: parseInt(highScore) }
                });
            }
        }

        // Batch Update Rules
        if (rules && Array.isArray(rules)) {
            for (const rule of rules) {
                const paramString = typeof rule.parameters === 'object' ? JSON.stringify(rule.parameters) : rule.parameters;
                await prisma.riskRule.upsert({
                    where: { ruleType: rule.ruleType },
                    update: { 
                        isActive: rule.isActive, 
                        weight: parseInt(rule.riskScore || rule.weight), 
                        parameters: paramString 
                    },
                    create: { 
                        ruleType: rule.ruleType, 
                        name: rule.ruleName || rule.ruleType, 
                        weight: parseInt(rule.riskScore || rule.weight), 
                        isActive: rule.isActive, 
                        parameters: paramString 
                    }
                });
            }
        }
        res.json({ status: "success", message: "Configuration updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ==========================================
// B. ANALYSIS ENGINE (SIMULATOR & API)
// ==========================================

// Fungsi ini dipakai oleh "Risk Simulator" di Frontend
exports.analyzeTransaction = async (req, res) => {
    try {
        const { transaction, user, device } = req.body;

        // 1. Siapkan Context untuk Engine
        // Mapping data dari format Simulator Frontend ke format Engine Utils
        const context = {
            email: user?.email || 'simulator@test.com',
            userId: user?.id || 'SIMULATOR_USER',
            amount: parseFloat(transaction?.amount || 0),
            currency: transaction?.currency || 'MYR',
            userSegment: user?.role === 'VIP' ? 'CORPORATE' : 'CONSUMER',
            channel: 'MOBILE',
            
            // Telemetry & Geo
            telemetry: {
                device_model: device?.model || 'Simulator Device',
                is_vpn_active: device?.is_vpn || false,
                is_rooted: device?.is_rooted || false,
                gps_latitude: 0, 
                gps_longitude: 0 
            },
            location: 'Simulator Location'
        };

        // 2. PANGGIL MODULAR ENGINE (Bukan hitung manual lagi!)
        const result = await runRiskEngine(context);

        // 3. Kembalikan Response sesuai format Frontend Simulator
        res.json({
            transaction_id: "SIMULATION_" + Date.now(),
            verdict: result.action, // ALLOW, CHALLENGE, DENY
            risk_analysis: {
                score: result.riskScore,
                level: result.riskLevel,
                factors: result.breakdown.map(b => b.rule) // List rule yang kena
            },
            details: result // Kirim detail lengkap untuk debug
        });

    } catch (err) {
        console.error("Risk Engine Simulator Error:", err);
        res.status(500).json({ error: "Simulation failed: " + err.message });
    }
};