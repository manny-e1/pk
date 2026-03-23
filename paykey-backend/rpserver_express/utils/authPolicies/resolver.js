

    



    





const { fetchPolicyConfig, fetchRiskThresholds } = require('./loader');

async function determineRiskLevel(score) {
    const threshold = await fetchRiskThresholds();
    if (score >= threshold.high) return 'HIGH';
    if (score >= threshold.low) return 'MEDIUM';
    return 'LOW';
}

async function resolvePolicy(context) {
    const { segment, channel, riskScore, action } = context;

    const riskLevel = await determineRiskLevel(riskScore);
    console.log(`[AuthPolicy] Resolving: ${segment} / ${channel} / ${riskLevel} / Action: ${action}`);

    let policy = await fetchPolicyConfig(segment, channel, riskLevel, action);

    if (!policy && action === 'TRANSACTION') {
        console.warn(`[AuthPolicy] ⚠️ Policy '${action}' not found. Borrowing 'LOGIN' policy...`);
        policy = await fetchPolicyConfig(segment, channel, riskLevel, 'LOGIN');
    }

    if (!policy) {
        return {
            name: 'system_strict_fallback', riskLevel: riskLevel,
            condition: { requireStepUp: true, userVerification: 'required', maxAttempts: 3 }
        };
    }
    return policy;
}

module.exports = { resolvePolicy };