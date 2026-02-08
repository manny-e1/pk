const { fetchPolicyConfig, fetchRiskThresholds } = require('./loader');

/**
 * Mengubah Risk Score (Angka) menjadi Risk Level (Kategori)
 */
async function determineRiskLevel(score) {
    const threshold = await fetchRiskThresholds();
    
    if (score >= threshold.high) return 'HIGH';
    if (score >= threshold.low) return 'MEDIUM';
    return 'LOW';
}

/**
 * Menyelesaikan Policy yang tepat untuk konteks transaksi saat ini.
 */
async function resolvePolicy(context) {
    const { segment, channel, riskScore } = context;

    // 1. Tentukan Level Risiko
    const riskLevel = await determineRiskLevel(riskScore);
    
    console.log(`[AuthPolicy] Resolving: ${segment} / ${channel} / ${riskLevel} (Score: ${riskScore})`);

    // 2. Ambil Policy dari DB
    let policy = await fetchPolicyConfig(segment, channel, riskLevel);

    // 3. Fallback Mechanism (Fail-Safe)
    // Jika config DB belum dibuat untuk segmen ini, gunakan default yang aman (Secure by Default)
    if (!policy) {
        console.warn(`[AuthPolicy] ⚠️ Policy not found for ${segment}/${channel}/${riskLevel}. Using Fallback.`);
        return {
            name: 'fallback_secure_default',
            riskLevel: riskLevel,
            condition: {
                requireStepUp: true,        // Default: Challenge
                userVerification: 'required',
                maxAttempts: 3,
                description: "Fallback Policy (Missing Config)"
            }
        };
    }

    return policy;
}

module.exports = { resolvePolicy };