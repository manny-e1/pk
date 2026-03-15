// const prisma = require('../../../config/db');

// async function evaluateBeneficiary(context, config) {
//     const { userId, beneficiaryAccount, merchantName } = context; 
//     const { rules } = config;

//     let score = 0;
//     let tags = [];
//     let breakdown = [];

//     const beneRule = rules.find(r => r.ruleType === 'BENEFICIARY');
    
//     if (!beneRule || !beneRule.isActive || (!beneficiaryAccount && !merchantName)) {
//         return { score, tags, breakdown };
//     }

//     const trustThreshold = beneRule.parameters?.trustCount || 3;

//     const whereConditions = {
//         userId: userId,
//         authResult: 'SUCCESS',
//         OR: []
//     };

//     if (merchantName) {
//         whereConditions.OR.push({ merchantName: merchantName });
//         whereConditions.OR.push({ merchantName: { contains: merchantName } });
//     }
//     if (beneficiaryAccount) {
//         whereConditions.OR.push({ merchantName: beneficiaryAccount });
//     }

//     if (whereConditions.OR.length === 0) return { score, tags, breakdown };

//     const historyCount = await prisma.transaction.count({
//         where: whereConditions
//     });

//     const targetLabel = beneficiaryAccount || merchantName;
//     console.log(`[BeneCheck] Checking Trust for '${targetLabel}': Found ${historyCount} past success(es).`);

//     if (historyCount === 0) {
//         console.log(`[BeneCheck] DEBUG: Entering 'New Beneficiary' Block...`);
//         console.log(`[BeneCheck] DEBUG: Rule Weight = ${beneRule.weight}`);
        
//         score += beneRule.weight;
//         tags.push({ label: 'New Beneficiary', class: 'warning' });
//         breakdown.push({ rule: 'BENEFICIARY', score: beneRule.weight, desc: 'First time transfer' });
        
//         console.log(`[BeneCheck] DEBUG: Current Tags: ${JSON.stringify(tags)}`);
//     } 
//     else if (historyCount < trustThreshold) {
//         console.log(`[BeneCheck] DEBUG: Entering 'Unfamiliar' Block...`);
        
//         const partialScore = Math.floor(beneRule.weight / 2);
//         score += partialScore;
//         tags.push({ label: `Unfamiliar Beneficiary (${historyCount}/${trustThreshold})`, class: 'info' });
//         breakdown.push({ rule: 'BENEFICIARY', score: partialScore });
//     }

//     return { score, tags, breakdown };
// }

// module.exports = { evaluateBeneficiary };

/**
 * @file beneficiaryCheck.js
 * @description Enterprise-grade evaluator for New/Unfamiliar Beneficiaries.
 */
const prisma = require('../../../config/db');

async function evaluateBeneficiary(context, config) {
    const { userId, beneficiaryAccount, merchantName } = context; 
    const { rules } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];

    // Fleksibel mencari nama rule di DB
    const beneRule = rules.find(r => r.ruleType === 'BENEFICIARY' || r.ruleType === 'UNFAMILIAR_BENEFICIARY');
    
    console.log(`[BeneCheck] Init - Target Acc: ${beneficiaryAccount || merchantName || 'NULL'}, Rule Active: ${beneRule ? beneRule.isActive : 'RULE_NOT_FOUND'}`);

    if (!beneRule || !beneRule.isActive || (!beneficiaryAccount && !merchantName)) {
        console.log(`[BeneCheck] ⚠️ SKIPPED: Rule inactive or missing target account.`);
        return { score, tags, breakdown };
    }

    const trustThreshold = beneRule.parameters?.trustCount || 3;

    // ====================================================================
    // PERBAIKAN FATAL: STRICT MATCHING (Mencegah Kebocoran Logika OR)
    // ====================================================================
    const whereConditions = {
        userId: userId,
        authResult: 'SUCCESS' // Hanya menghitung transaksi yang benar-benar berhasil sebelumnya
    };

    // Prioritaskan pencarian murni ke Nomor Rekening jika ada
    if (beneficiaryAccount) {
        whereConditions.toAccount = beneficiaryAccount;
    } 
    // Jika tidak ada rekening (misal bayar QRIS), baru cari nama Merchant
    else if (merchantName) {
        whereConditions.merchantName = merchantName;
    }

    const historyCount = await prisma.transaction.count({
        where: whereConditions
    });

    console.log(`[BeneCheck] Checking Trust for '${beneficiaryAccount || merchantName}': Found ${historyCount} past success(es).`);

    // ====================================================================
    // EKSEKUSI POIN RISIKO
    // ====================================================================
    if (historyCount === 0) {
        // Murni rekening baru! Tambahkan poin maksimal (misal: 50 poin sesuai config Anda)
        score += beneRule.weight;
        tags.push({ label: 'New Beneficiary', class: 'critical' }); // Warna merah/kritis
        breakdown.push({ rule: 'BENEFICIARY', score: beneRule.weight, desc: 'First time transfer to this account' });
    } 
    else if (historyCount < trustThreshold) {
        // Pernah transfer, tapi masih kurang dari threshold (misal baru 1 atau 2 kali)
        const partialScore = Math.floor(beneRule.weight / 2);
        score += partialScore;
        tags.push({ label: `Unfamiliar Beneficiary (${historyCount}/${trustThreshold})`, class: 'warning' }); 
        breakdown.push({ rule: 'BENEFICIARY', score: partialScore, desc: 'Low interaction history' });
    } 
    else {
        // Sudah sering transfer (Aman)
        tags.push({ label: 'Trusted Beneficiary', class: 'success' });
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateBeneficiary };