const prisma = require('../../config/db');

let cachedConfig = null;
let lastFetch = 0;
const CACHE_TTL = 2 * 1000;

async function loadRiskConfig() {
    const now = Date.now();
    if (cachedConfig && (now - lastFetch < CACHE_TTL)) return cachedConfig;

    console.log("[ConfigLoader] Fetching fresh config from DB...");

    const [rules, thresholds, amountLimits, policies] = await Promise.all([
        prisma.riskRule.findMany({ where: { isActive: true } }),
        prisma.riskThreshold.findFirst(),
        prisma.amountLimit.findMany({ orderBy: { minAmount: 'asc' } }), 
        prisma.authPolicy.findMany({ where: { isActive: true } }) 
    ]);

    const parsedRules = rules.map(r => ({
        ...r,
        parameters: typeof r.parameters === 'string' ? JSON.parse(r.parameters) : r.parameters
    }));

    const parsedPolicies = policies.map(p => ({
        ...p,
        condition: typeof p.condition === 'string' ? JSON.parse(p.condition) : p.condition
    }));

    const parsedLimits = amountLimits.map(l => ({
        ...l,
        minAmount: Number(l.minAmount),
        maxAmount: l.maxAmount ? Number(l.maxAmount) : null,
        weight: Number(l.weight)
    }));

    cachedConfig = {
        rules: parsedRules,
        thresholds: thresholds || { lowScore: 30, highScore: 70 },
        amountLimits: parsedLimits,
        policies: parsedPolicies
    };
    
    lastFetch = now;
    return cachedConfig;
}

module.exports = { loadRiskConfig };