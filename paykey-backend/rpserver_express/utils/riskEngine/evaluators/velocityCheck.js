const prisma = require('../../../config/db');

async function evaluateVelocity(context, config) {
    const { userId, userSegment } = context; 
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    const velocityRule = rules.find(r => r.ruleType === 'VELOCITY_LIMIT' && r.segment === userSegment);

    if (!velocityRule || !velocityRule.isActive || !userId) {
        return { score, tags, breakdown };
    }

    const params = velocityRule.parameters || {};
    
    const maxCount = params.maxTransactions || 5; 
    const minutes = params.timeWindowMinutes || 10;
    
    const timeWindow = new Date(Date.now() - (minutes * 60 * 1000));
    
    const txCount = await prisma.transaction.count({
        where: {
            userId: userId,
            timestamp: { gte: timeWindow }
        }
    });

    console.log(`[VelocityCheck] Count: ${txCount}/${maxCount} in last ${minutes}m`);

    if (txCount >= maxCount) {
        score += velocityRule.weight || 50;
        
        tags.push({ label: 'High Velocity', class: 'high' });
        
        breakdown.push({ 
            rule: 'VELOCITY_LIMIT', 
            score: score,
            desc: `${txCount} txns in ${minutes}m (Limit: ${maxCount})`
        });

        console.log(`[VelocityCheck] 🚨 LIMIT EXCEEDED!`);
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateVelocity };