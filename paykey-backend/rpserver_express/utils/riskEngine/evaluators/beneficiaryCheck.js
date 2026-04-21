const prisma = require('../../../config/db');

async function evaluateBeneficiary(context, config) {
    const { userId, beneficiaryAccount, merchantName, userSegment } = context; 
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    const beneRule = rules.find(r => 
        (r.ruleType === 'BENEFICIARY' || r.ruleType === 'UNFAMILIAR_BENEFICIARY') && 
        r.segment === userSegment
    );
    
    console.log(`[BeneCheck] Init - Target Acc: ${beneficiaryAccount || merchantName || 'NULL'}, Rule Active: ${beneRule ? beneRule.isActive : 'RULE_NOT_FOUND'}`);

    if (!beneRule || !beneRule.isActive || (!beneficiaryAccount && !merchantName)) {
        console.log(`[BeneCheck] ⚠️ SKIPPED: Rule inactive or missing target account.`);
        return { score, tags, breakdown };
    }

    const trustThreshold = beneRule.parameters?.trustCount || 2;

    const whereConditions = {
        userId: userId,
        authResult: 'SUCCESS' 
    };

    if (beneficiaryAccount) {
        whereConditions.toAccount = beneficiaryAccount;
    } else if (merchantName) {
        whereConditions.merchantName = merchantName;
    }

    const historyCount = await prisma.transaction.count({
        where: whereConditions
    });

    console.log(`[BeneCheck] Checking Trust for '${beneficiaryAccount || merchantName}': Found ${historyCount} past success(es). Threshold required: > ${trustThreshold}`);

    
    if (historyCount < trustThreshold) {
        score += beneRule.weight;
        tags.push({ label: `New Beneficiary (${historyCount}/${trustThreshold})`, class: 'critical' }); 
        breakdown.push({ rule: 'BENEFICIARY', score: beneRule.weight, desc: `Requires ${trustThreshold} past successful transactions to be trusted` });
    } 
    else {
        tags.push({ label: 'Trusted Beneficiary', class: 'success' });
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateBeneficiary };