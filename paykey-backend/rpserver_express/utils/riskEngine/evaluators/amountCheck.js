function evaluateAmount(context, config) {
    const { amount, userSegment, currency } = context; 
    const { amountLimits } = config;

    let score = 0;
    let tags = [];
    let breakdown = [];
    let status = 'PASS';
    let requiredMethods = [];

    // Filter Limit berdasarkan Segmen User DAN Currency
    const activeLimit = amountLimits.find(limit => 
        limit.segment === userSegment && 
        limit.currency === currency && // [FIX] Cek Mata Uang
        amount >= limit.minAmount && 
        (limit.maxAmount === null || amount <= limit.maxAmount)
    );

    if (activeLimit) {
        score += activeLimit.weight || 0;
        
        if (activeLimit.weight > 0) {
            tags.push({ label: activeLimit.label || 'Amount Risk', class: 'critical' });
            breakdown.push({ rule: 'AMOUNT_TIER', score: activeLimit.weight });
        }

        if (activeLimit.stepUp) {
            status = 'CHALLENGE';
            if (activeLimit.methods) {
                const methods = typeof activeLimit.methods === 'string' 
                    ? JSON.parse(activeLimit.methods) 
                    : activeLimit.methods;
                requiredMethods = methods;
            }
        }
    } 
    else {
         // Fallback Hard Limit Global (per currency)
         const maxLimit = Math.max(...amountLimits
            .filter(l => l.segment === userSegment && l.currency === currency && l.maxAmount !== null)
            .map(l => l.maxAmount));
            
         if (maxLimit > 0 && amount > maxLimit) {
             status = 'BLOCK';
             score += 100;
             tags.push({ label: 'Exceeds Global Limit', class: 'critical' });
             breakdown.push({ rule: 'AMOUNT_OVER_MAX', score: 100 });
         }
    }

    return { score, tags, breakdown, status, requiredMethods };
}

module.exports = { evaluateAmount };