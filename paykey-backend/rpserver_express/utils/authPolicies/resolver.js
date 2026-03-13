// const { fetchPolicyConfig, fetchRiskThresholds } = require('./loader');


// async function determineRiskLevel(score) {
//     const threshold = await fetchRiskThresholds();
    
//     if (score >= threshold.high) return 'HIGH';
//     if (score >= threshold.low) return 'MEDIUM';
//     return 'LOW';
// }


// async function resolvePolicy(context) {
//     const { segment, channel, riskScore } = context;

//     const riskLevel = await determineRiskLevel(riskScore);
    
//     console.log(`[AuthPolicy] Resolving: ${segment} / ${channel} / ${riskLevel} (Score: ${riskScore})`);

//     let policy = await fetchPolicyConfig(segment, channel, riskLevel);

//     if (!policy) {
//         console.warn(`[AuthPolicy] ⚠️ Policy not found for ${segment}/${channel}/${riskLevel}. Using Fallback.`);
//         return {
//             name: 'fallback_secure_default',
//             riskLevel: riskLevel,
//             condition: {
//                 requireStepUp: true,
//                 userVerification: 'required',
//                 maxAttempts: 3,
//                 description: "Fallback Policy (Missing Config)"
//             }
//         };
//     }

//     return policy;
// }

// module.exports = { resolvePolicy };

const { fetchPolicyConfig, fetchRiskThresholds } = require('./loader');

async function determineRiskLevel(score) {
    const threshold = await fetchRiskThresholds();
    if (score >= threshold.high) return 'HIGH';
    if (score >= threshold.low) return 'MEDIUM';
    return 'LOW';
}

async function resolvePolicy(context) {
    // PERBAIKAN: Tangkap 'action'
    const { segment, channel, riskScore, action } = context;

    const riskLevel = await determineRiskLevel(riskScore);
    console.log(`[AuthPolicy] Resolving: ${segment} / ${channel} / ${riskLevel} / Action: ${action}`);

    // PERBAIKAN: Oper 'action' ke loader
    let policy = await fetchPolicyConfig(segment, channel, riskLevel, action);

    if (!policy) {
        return {
            name: 'fallback_secure_default', riskLevel: riskLevel,
            condition: { requireStepUp: true, userVerification: 'required', maxAttempts: 3 }
        };
    }
    return policy;
}

module.exports = { resolvePolicy };