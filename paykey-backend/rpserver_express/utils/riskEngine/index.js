const { loadRiskConfig } = require('./configLoader');
const { evaluateAmount } = require('./evaluators/amountCheck');
const { evaluateDevice } = require('./evaluators/deviceCheck');
const { evaluateGeo } = require('./evaluators/geoCheck');
const { evaluateVelocity } = require('./evaluators/velocityCheck');
const { evaluateDormant } = require('./evaluators/dormantCheck');
const { evaluateBeneficiary } = require('./evaluators/beneficiaryCheck');

async function runRiskEngine(context) {
    // 1. Load Konfigurasi (Cached)
    const config = await loadRiskConfig();

    // 2. Jalankan Evaluator (Async Parallel)
    const [deviceRes, geoRes, velocityRes, dormantRes, beneficiaryRes] = await Promise.all([
        evaluateDevice(context, config),
        evaluateGeo(context, config),
        evaluateVelocity(context, config),
        evaluateDormant(context, config),
        evaluateBeneficiary(context, config)
    ]);
    
    // Amount Check (Sync)
    const amountRes = evaluateAmount(context, config);

    // 3. Agregasi Hasil
    let totalScore = 0;
    totalScore += deviceRes.score;
    totalScore += geoRes.score;
    totalScore += velocityRes.score;
    totalScore += dormantRes.score;
    totalScore += amountRes.score;

    // Gabungkan Tags & Breakdown
    const allTags = [
        ...amountRes.tags, ...deviceRes.tags, ...geoRes.tags, 
        ...velocityRes.tags, ...dormantRes.tags, ...beneficiaryRes.tags
    ];
    const allBreakdown = [
        ...amountRes.breakdown, ...deviceRes.breakdown, ...geoRes.breakdown, 
        ...velocityRes.breakdown, ...dormantRes.breakdown, ...beneficiaryRes.breakdown
    ];

    // 4. Normalisasi Skor (Max 100)
    totalScore = Math.min(100, totalScore);

    // 5. Tentukan Risk Level
    const { lowScore, highScore } = config.thresholds;
    let riskLevel = 'LOW';
    if (totalScore >= highScore) riskLevel = 'CRITICAL';
    else if (totalScore >= lowScore) riskLevel = 'HIGH';
    else if (totalScore > 0) riskLevel = 'MEDIUM';

    // 6. Tentukan Action (Final Decision)
    let action = 'ALLOW';
    let reason = `Risk Level: ${riskLevel}`;

    // Hard Block dari Amount Limits
    if (amountRes.status === 'BLOCK') {
        action = 'DENY';
        reason = amountRes.reason;
    }
    // Critical Risk -> Auto Deny
    else if (riskLevel === 'CRITICAL') {
        action = 'DENY';
        reason = 'Critical Risk Score';
    }
    // High Risk atau Challenge dari Amount -> Step Up
    else if (riskLevel === 'HIGH' || amountRes.status === 'CHALLENGE') {
        action = 'CHALLENGE';
        reason = amountRes.reason || 'High Risk Verification';
    }

    // 7. Cek Auth Policy (Optional: Override)
    // Mencocokkan policy berdasarkan User Segment & Channel
    const policy = config.policies.find(p => 
        p.userSegment === context.userSegment && 
        p.channel === context.channel &&
        p.riskLevel === riskLevel
    );
    
    // Jika policy bilang harus step-up, kita paksa step-up
    if (policy && policy.policyConfig?.requireStepUp && action === 'ALLOW') {
        action = 'CHALLENGE';
        reason = 'Policy Requirement';
    }

    return {
        riskScore: totalScore,
        riskLevel,
        action,
        reason,
        tags: allTags,
        breakdown: allBreakdown,
        policyApplied: policy ? policy.policyName : 'Default'
    };
}

module.exports = { runRiskEngine };