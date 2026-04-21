const prisma = require('../../../config/db');

async function evaluateDormant(context, config) {
    const { email, userSegment } = context; 
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    const dormantRule = rules.find(r => r.ruleType === 'DORMANT' && r.segment === userSegment);
    
    if (!dormantRule || !dormantRule.isActive) {
        return { score, tags, breakdown };
    }

    const maxInactiveDays = dormantRule.parameters?.days || 180;

    const lastActivity = await prisma.authLog.findFirst({
        where: {
            email: email,
            status: { in: ['SUCCESS', 'APPROVED', 'INFO'] },
            createdAt: { lt: new Date() } 
        },
        orderBy: { createdAt: 'desc' }
    });

    if (!lastActivity) {
        return { score, tags, breakdown };
    }

    const diffDays = Math.floor((Date.now() - new Date(lastActivity.createdAt).getTime()) / (1000 * 60 * 60 * 24));

    console.log(`[DormantCheck] User '${email}' last seen: ${diffDays} days ago.`);

    if (diffDays > maxInactiveDays) {
        score += dormantRule.weight; 
        
        tags.push({ label: `Dormant User (> ${maxInactiveDays}d)`, class: 'warning' });
        
        breakdown.push({ 
            rule: 'DORMANT', 
            score: dormantRule.weight, 
            desc: `Inactive for ${diffDays} days (Threshold: ${maxInactiveDays})` 
        });

        console.log(`[DormantCheck] 💤 ALERT: Dormant Account Reactivated!`);
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateDormant };