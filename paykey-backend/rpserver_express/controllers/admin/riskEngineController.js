const prisma = require('../../config/db');
const { runRiskEngine } = require('../../utils/riskEngine/index');


exports.getRiskConfig = async (req, res) => {
    try {
        let threshold = await prisma.riskThreshold.findFirst();
        if (!threshold) threshold = { lowScore: 30, highScore: 70 };

        const rules = await prisma.riskRule.findMany({
            orderBy: [{ isActive: 'desc' }, { weight: 'desc' }]
        });

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

exports.updateRiskConfig = async (req, res) => {
    const { lowScore, highScore, rules } = req.body;

    try {
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


exports.analyzeTransaction = async (req, res) => {
    try {
        const { transaction, user, device } = req.body;

        const context = {
            email: user?.email || 'simulator@test.com',
            userId: user?.id || 'SIMULATOR_USER',
            amount: parseFloat(transaction?.amount || 0),
            currency: transaction?.currency || 'MYR',
            userSegment: user?.role === 'VIP' ? 'CORPORATE' : 'CONSUMER',
            channel: 'MOBILE',
            
            telemetry: {
                device_model: device?.model || 'Simulator Device',
                is_vpn_active: device?.is_vpn || false,
                is_rooted: device?.is_rooted || false,
                gps_latitude: 0, 
                gps_longitude: 0 
            },
            location: 'Simulator Location'
        };

        const result = await runRiskEngine(context);

        res.json({
            transaction_id: "SIMULATION_" + Date.now(),
            verdict: result.action,
            risk_analysis: {
                score: result.riskScore,
                level: result.riskLevel,
                factors: result.breakdown.map(b => b.rule)
            },
            details: result
        });

    } catch (err) {
        console.error("Risk Engine Simulator Error:", err);
        res.status(500).json({ error: "Simulation failed: " + err.message });
    }
};