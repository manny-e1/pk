// const { loadRiskConfig } = require('./configLoader');
// const { evaluateAmount } = require('./evaluators/amountCheck');
// const { evaluateDevice } = require('./evaluators/deviceCheck');
// const { evaluateGeo } = require('./evaluators/geoCheck');
// const { evaluateVelocity } = require('./evaluators/velocityCheck');
// const { evaluateDormant } = require('./evaluators/dormantCheck');
// const { evaluateBeneficiary } = require('./evaluators/beneficiaryCheck');

// async function runRiskEngine(context) {
//     const config = await loadRiskConfig();

//     const [deviceRes, geoRes, velocityRes, dormantRes, beneficiaryRes] = await Promise.all([
//         evaluateDevice(context, config),
//         evaluateGeo(context, config),
//         evaluateVelocity(context, config),
//         evaluateDormant(context, config),
//         evaluateBeneficiary(context, config)
//     ]);
    
//     const amountRes = evaluateAmount(context, config);

//     let totalScore = 0;
//     totalScore += deviceRes.score;
//     totalScore += geoRes.score;
//     totalScore += velocityRes.score;
//     totalScore += dormantRes.score;
//     totalScore += amountRes.score;

//     const allTags = [
//         ...amountRes.tags, ...deviceRes.tags, ...geoRes.tags, 
//         ...velocityRes.tags, ...dormantRes.tags, ...beneficiaryRes.tags
//     ];
//     const allBreakdown = [
//         ...amountRes.breakdown, ...deviceRes.breakdown, ...geoRes.breakdown, 
//         ...velocityRes.breakdown, ...dormantRes.breakdown, ...beneficiaryRes.breakdown
//     ];

//     totalScore = Math.min(100, totalScore);

//     const { lowScore, highScore } = config.thresholds;
//     let riskLevel = 'LOW';
//     if (totalScore >= highScore) riskLevel = 'CRITICAL';
//     else if (totalScore >= lowScore) riskLevel = 'HIGH';
//     else if (totalScore > 0) riskLevel = 'MEDIUM';

//     let action = 'ALLOW';
//     let reason = `Risk Level: ${riskLevel}`;

//     if (amountRes.status === 'BLOCK') {
//         action = 'DENY';
//         reason = amountRes.reason;
//     }
//     else if (riskLevel === 'CRITICAL') {
//         action = 'DENY';
//         reason = 'Critical Risk Score';
//     }
//     else if (riskLevel === 'HIGH' || amountRes.status === 'CHALLENGE') {
//         action = 'CHALLENGE';
//         reason = amountRes.reason || 'High Risk Verification';
//     }

//     const policy = config.policies.find(p => 
//         p.userSegment === context.userSegment && 
//         p.channel === context.channel &&
//         p.riskLevel === riskLevel
//     );
    
//     if (policy && policy.policyConfig?.requireStepUp && action === 'ALLOW') {
//         action = 'CHALLENGE';
//         reason = 'Policy Requirement';
//     }

//     return {
//         riskScore: totalScore,
//         riskLevel,
//         action,
//         reason,
//         tags: allTags,
//         breakdown: allBreakdown,
//         policyApplied: policy ? policy.policyName : 'Default'
//     };
// }

// module.exports = { runRiskEngine };

const { loadRiskConfig } = require('./configLoader');
const { evaluateAmount } = require('./evaluators/amountCheck');
const { evaluateDevice } = require('./evaluators/deviceCheck');
const { evaluateGeo } = require('./evaluators/geoCheck');
const { evaluateVelocity } = require('./evaluators/velocityCheck');
const { evaluateDormant } = require('./evaluators/dormantCheck');
const { evaluateBeneficiary } = require('./evaluators/beneficiaryCheck');

async function calculateRisk(context) {
    const config = await loadRiskConfig();

    const [deviceRes, geoRes, velocityRes, dormantRes, beneficiaryRes] = await Promise.all([
        evaluateDevice(context, config),
        evaluateGeo(context, config),
        evaluateVelocity(context, config),
        evaluateDormant(context, config),
        evaluateBeneficiary(context, config)
    ]);
    
    const amountRes = evaluateAmount(context, config);

    let totalScore = deviceRes.score + geoRes.score + velocityRes.score + dormantRes.score + amountRes.score + beneficiaryRes.score;
    totalScore = Math.min(100, totalScore);

    const allTags = [
        ...amountRes.tags, ...deviceRes.tags, ...geoRes.tags, 
        ...velocityRes.tags, ...dormantRes.tags, ...beneficiaryRes.tags
    ];
    const allBreakdown = [
        ...amountRes.breakdown, ...deviceRes.breakdown, ...geoRes.breakdown, 
        ...velocityRes.breakdown, ...dormantRes.breakdown, ...beneficiaryRes.breakdown
    ];

    const { lowScore, highScore } = config.thresholds;
    let riskLevel = 'LOW';
    let isAmountBlocked = amountRes.status === 'BLOCK';

    // PERBAIKAN LOGIKA: Hanya jadi MEDIUM jika skor >= 30 (lowScore di DB)
    if (isAmountBlocked) {
        riskLevel = 'CRITICAL';
    } else if (totalScore >= highScore) {
        riskLevel = 'HIGH';
    } else if (totalScore >= lowScore) {
        riskLevel = 'MEDIUM';
    } else {
        riskLevel = 'LOW';
    }

    return {
        score: totalScore,
        level: riskLevel,
        factors: allTags,
        breakdown: allBreakdown,
        isBlockedByAmount: isAmountBlocked,
        amountMandatedMethods: amountRes.requiredMethods || []
    };
}

module.exports = { calculateRisk };