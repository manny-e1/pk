const prisma = require('../../config/db');

function generateDiff(oldCondition, newCondition) {
    if (!oldCondition) return "Initial configuration created";

    try {
        const oldObj = typeof oldCondition === 'string' ? JSON.parse(oldCondition) : oldCondition;
        const newObj = typeof newCondition === 'string' ? JSON.parse(newCondition) : newCondition;
        const changes = [];

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


exports.getPolicies = async (req, res) => {
    try {
        console.log("Fetching policies...");
        const policies = await prisma.authPolicy.findMany({
            orderBy: { priority: 'asc' }
        });
        
        res.json(policies || []);
    } catch (err) {
        console.error("CRITICAL ERROR [getPolicies]:", err.message);
        res.status(500).json({ error: "Database error fetching policies", details: err.message });
    }
};

exports.upsertPolicy = async (req, res) => {
    const { segment, channel, riskLevel, condition, adminEmail } = req.body;

    const actorEmail = req.user?.email || adminEmail || 'System';
    const action = req.body.action || 'LOGIN';

    if (!segment || !channel || !riskLevel) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const seg = segment.toUpperCase();
    const chan = channel.toUpperCase();
    const risk = riskLevel.toUpperCase();
    const policyName = `${seg.toLowerCase()}_${chan.toLowerCase()}_${risk.toLowerCase()}`;
    const readableName = `${seg.charAt(0) + seg.slice(1).toLowerCase()} ${risk.charAt(0) + risk.slice(1).toLowerCase()} Risk`;

    try {
        const oldPolicy = await prisma.authPolicy.findUnique({
            where: { policy_idx: { segment: seg, channel: chan, riskLevel: risk,action: action } }
        });

        const actionType = oldPolicy ? 'Updated' : 'Created';
        
        const policy = await prisma.authPolicy.upsert({
            where: { policy_idx: { segment: seg, channel: chan, riskLevel: risk,action: action } },
            update: { condition, name: policyName, isActive: true, updatedAt: new Date() },
            create: { 
                segment: seg, channel: chan, riskLevel: risk, condition, 
                name: policyName, priority: seg === 'CORPORATE' ? 10 : 20, isActive: true 
            }
        });

        const diffDetails = generateDiff(oldPolicy ? oldPolicy.condition : null, condition);
        const logAction = `${actionType} ${readableName} policy: ${diffDetails}`;

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





        







        



exports.getRiskRules = async (req, res) => {
    try {
        const rules = await prisma.riskRule.findMany({
            orderBy: [
                { segment: 'asc' },
                { isActive: 'desc' },
                { weight: 'desc' }
            ]
        });

        const formattedRules = rules.map(r => ({
            id: r.id,
            segment: r.segment,
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

exports.batchUpdateRiskRules = async (req, res) => {
    try {
        const rulesPayload = Array.isArray(req.body) ? req.body : req.body.rules;
        
        if (!Array.isArray(rulesPayload) || rulesPayload.length === 0) {
            return res.status(400).json({ error: "Invalid payload: rules array required" });
        }

        const upsertPromises = rulesPayload.map(rule => {
            const seg = (rule.segment || 'consumer').toUpperCase();
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

exports.getRiskConfig = async (req, res) => {
    try {
        const configs = await prisma.riskThreshold.findMany();
        res.json(configs || []);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.updateRiskConfig = async (req, res) => {
    try {
        const { segment, lowScore, highScore } = req.body;
        const seg = (segment || 'consumer').toUpperCase();
        
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