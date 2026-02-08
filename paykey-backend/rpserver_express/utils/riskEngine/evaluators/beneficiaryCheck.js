const prisma = require('../../../config/db');

async function evaluateBeneficiary(context, config) {
    const { userId, beneficiaryAccount, merchantName } = context; 
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    const beneRule = rules.find(r => r.ruleType === 'BENEFICIARY');
    
    // Validasi Rule
    if (!beneRule || !beneRule.isActive || (!beneficiaryAccount && !merchantName)) {
        return { score, tags, breakdown };
    }

    const trustThreshold = beneRule.parameters?.trustCount || 3;

    // Logic Pencarian (Sama seperti sebelumnya)
    const whereConditions = {
        userId: userId,
        authResult: 'SUCCESS',
        OR: []
    };

    if (merchantName) {
        whereConditions.OR.push({ merchantName: merchantName });
        whereConditions.OR.push({ merchantName: { contains: merchantName } });
    }
    if (beneficiaryAccount) {
        whereConditions.OR.push({ merchantName: beneficiaryAccount });
    }

    if (whereConditions.OR.length === 0) return { score, tags, breakdown };

    const historyCount = await prisma.transaction.count({
        where: whereConditions
    });

    const targetLabel = beneficiaryAccount || merchantName;
    console.log(`[BeneCheck] Checking Trust for '${targetLabel}': Found ${historyCount} past success(es).`);

    // --- DEBUGGING START ---
    if (historyCount === 0) {
        console.log(`[BeneCheck] DEBUG: Entering 'New Beneficiary' Block...`);
        console.log(`[BeneCheck] DEBUG: Rule Weight = ${beneRule.weight}`);
        
        score += beneRule.weight;
        tags.push({ label: 'New Beneficiary', class: 'warning' });
        breakdown.push({ rule: 'BENEFICIARY', score: beneRule.weight, desc: 'First time transfer' });
        
        console.log(`[BeneCheck] DEBUG: Current Tags: ${JSON.stringify(tags)}`);
    } 
    else if (historyCount < trustThreshold) {
        console.log(`[BeneCheck] DEBUG: Entering 'Unfamiliar' Block...`);
        
        const partialScore = Math.floor(beneRule.weight / 2);
        score += partialScore;
        tags.push({ label: `Unfamiliar Beneficiary (${historyCount}/${trustThreshold})`, class: 'info' });
        breakdown.push({ rule: 'BENEFICIARY', score: partialScore });
    }
    // --- DEBUGGING END ---

    return { score, tags, breakdown };
}

module.exports = { evaluateBeneficiary };