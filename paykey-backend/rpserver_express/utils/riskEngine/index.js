
const { loadRiskConfig } = require('./configLoader');
const { evaluateAmount } = require('./evaluators/amountCheck');
const { evaluateDevice } = require('./evaluators/deviceCheck');
const { evaluateGeo } = require('./evaluators/geoCheck');
const { evaluateVelocity } = require('./evaluators/velocityCheck');
const { evaluateDormant } = require('./evaluators/dormantCheck');
const { evaluateBeneficiary } = require('./evaluators/beneficiaryCheck');

async function calculateRisk(context) {
    const config = await loadRiskConfig();
    const { userSegment } = context;

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

    const segmentThreshold = config.thresholds.find(t => t.segment === userSegment);

    const lowScore = segmentThreshold?.lowScore || 30;
    const highScore = segmentThreshold?.highScore || 70;

    let riskLevel = 'LOW';
    let isAmountBlocked = amountRes.status === 'BLOCK';

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