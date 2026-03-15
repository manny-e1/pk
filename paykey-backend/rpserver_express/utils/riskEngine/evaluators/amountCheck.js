// function evaluateAmount(context, config) {
//     const { amount, userSegment, currency } = context; 
//     const { amountLimits } = config;

//     let score = 0;
//     let tags = [];
//     let breakdown = [];
//     let status = 'PASS';
//     let requiredMethods = [];

//     const activeLimit = amountLimits.find(limit => 
//         limit.segment === userSegment && 
//         limit.currency === currency &&
//         amount >= limit.minAmount && 
//         (limit.maxAmount === null || amount <= limit.maxAmount)
//     );

//     if (activeLimit) {
//         score += activeLimit.weight || 0;
        
//         if (activeLimit.weight > 0) {
//             tags.push({ label: activeLimit.label || 'Amount Risk', class: 'critical' });
//             breakdown.push({ rule: 'AMOUNT_TIER', score: activeLimit.weight });
//         }

//         if (activeLimit.stepUp) {
//             status = 'CHALLENGE';
//             if (activeLimit.methods) {
//                 const methods = typeof activeLimit.methods === 'string' 
//                     ? JSON.parse(activeLimit.methods) 
//                     : activeLimit.methods;
//                 requiredMethods = methods;
//             }
//         }
//     } 
//     else {
//          const maxLimit = Math.max(...amountLimits
//             .filter(l => l.segment === userSegment && l.currency === currency && l.maxAmount !== null)
//             .map(l => l.maxAmount));
            
//          if (maxLimit > 0 && amount > maxLimit) {
//              status = 'BLOCK';
//              score += 100;
//              tags.push({ label: 'Exceeds Global Limit', class: 'critical' });
//              breakdown.push({ rule: 'AMOUNT_OVER_MAX', score: 100 });
//          }
//     }

//     return { score, tags, breakdown, status, requiredMethods };
// }

// module.exports = { evaluateAmount };

function evaluateAmount(context, config) {
    const { amount, userSegment, currency } = context; 
    const { amountLimits } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];
    let status = 'PASS';
    let requiredMethods = [];

    // =======================================================
    // PERBAIKAN: BLOKIR MUTLAK NOMINAL MINUS / NOL (HACKER)
    // =======================================================
    if (amount <= 0 || isNaN(amount)) {
        return {
            score: 100,
            tags: [{ label: 'Invalid Transaction Amount', class: 'critical' }],
            breakdown: [{ rule: 'INVALID_AMOUNT', score: 100, desc: 'Amount is zero, negative, or invalid' }],
            status: 'BLOCK',
            requiredMethods: []
        };
    }

    // 1. Filter Ketat Mata Uang dan Segmen
    const exactLimits = amountLimits.filter(l => 
        l.segment === userSegment && 
        l.currency === currency.toUpperCase()
    );

    // 2. Blokir jika mata uang tidak diatur di Database
    if (exactLimits.length === 0) {
        return {
            score: 100,
            tags: [{ label: `Unsupported Currency: ${currency}`, class: 'critical' }],
            breakdown: [{ rule: 'UNCONFIGURED_CURRENCY', score: 100 }],
            status: 'BLOCK',
            requiredMethods: []
        };
    }

    // 3. Cari Tier / Jenjang yang sesuai
    const activeLimit = exactLimits.find(limit => 
        amount >= limit.minAmount && 
        (limit.maxAmount === null || amount <= limit.maxAmount)
    );

    if (activeLimit) {
        score += activeLimit.weight || 0;
        
        if (activeLimit.weight > 0) {
            const tagColor = activeLimit.weight >= 50 ? 'warning' : 'info';
            tags.push({ label: `Amount Tier: ${activeLimit.label.toUpperCase()}`, class: tagColor });
            breakdown.push({ rule: 'AMOUNT_TIER', score: activeLimit.weight });
        }

        if (activeLimit.stepUp) {
            status = 'CHALLENGE';
            requiredMethods = typeof activeLimit.methods === 'string' ? JSON.parse(activeLimit.methods) : (activeLimit.methods || []);
        }
    } else {
        // 4. Blokir jika melebihi batas global tertinggi
        const limitsWithMax = exactLimits.filter(l => l.maxAmount !== null);
        if (limitsWithMax.length > 0) {
            const maxLimit = Math.max(...limitsWithMax.map(l => l.maxAmount));
            if (amount > maxLimit) {
                status = 'BLOCK';
                score += 100;
                tags.push({ label: `Exceeds Global Limit (${currency})`, class: 'critical' });
                breakdown.push({ rule: 'AMOUNT_OVER_MAX', score: 100 });
            }
        }
    }

    return { score, tags, breakdown, status, requiredMethods };
}

module.exports = { evaluateAmount };