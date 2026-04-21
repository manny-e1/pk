function evaluateAmount(context, config) {
    const { amount, userSegment, currency } = context; 
    const { rules } = config;

    let score = 0; let tags = []; let breakdown = [];
    let status = 'PASS'; let requiredMethods = [];

    console.log(`[AmountCheck] Init - Checking ${amount} ${currency} for ${userSegment}`);

    if (amount <= 0 || isNaN(amount)) {
        return { score: 100, tags: [{ label: 'Invalid Amount', class: 'critical' }], breakdown: [{ rule: 'INVALID_AMOUNT', score: 100 }], status: 'BLOCK', requiredMethods: [] };
    }

    const safeSegment = (userSegment || 'CONSUMER').toUpperCase(); 
    const amountRule = rules.find(r => r.ruleType === 'AMOUNT' && r.segment.toUpperCase() === safeSegment);

    if (!amountRule || !amountRule.isActive) {
        console.log('[AmountCheck] ⏭️ Skipped: AMOUNT rule is INACTIVE.');
        return { score, tags, breakdown, status, requiredMethods };
    }

    const params = amountRule.parameters || {};
    const tiers = params.tiers || [];
    const threshold = params.amountThreshold || 99999999;

    let matchedTier = null;
    if (tiers.length > 0) {
        for (const tier of tiers) {
            if (amount >= tier.min && (tier.max == null || amount <= tier.max)) {
                matchedTier = tier; 
                break;
            }
        }

        if (matchedTier) {
            score += matchedTier.score || 0; 
            console.log(`[AmountCheck] ✅ Matched Tier: ${matchedTier.min} - ${matchedTier.max || 'MAX'} | Weight Applied: ${matchedTier.score}`);
            
            if (matchedTier.score > 0) {
                tags.push({ label: `Amount Tier (${matchedTier.min}-${matchedTier.max || '+'})`, class: matchedTier.score >= 50 ? 'warning' : 'info' });
                breakdown.push({ rule: 'AMOUNT_TIER', score: matchedTier.score });
            }
        } else {
            const highestMax = Math.max(...tiers.map(t => t.max || 0));
            if (amount > highestMax) {
                status = 'BLOCK'; score += 100;
                console.log(`[AmountCheck] 🚨 BLOCK: Exceeds Maximum JSON Tier of ${highestMax}`);
                tags.push({ label: 'Exceeds Maximum Allowed Limit', class: 'critical' });
            }
        }
    }

    if (amount > threshold) {
        status = 'CHALLENGE';
        console.log(`[AmountCheck] ⚠️ Step-Up Triggered: Amount > Threshold (${threshold})`);
    }

    return { score, tags, breakdown, status, requiredMethods };
}

module.exports = { evaluateAmount };