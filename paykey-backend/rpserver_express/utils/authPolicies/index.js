const { resolvePolicy } = require('./resolver');
const { enforcePolicyRules } = require('./enforcer');

/**
 * FUNGSI UTAMA: Evaluasi Kebijakan Otentikasi (Main Entry Point)
 * * Flow:
 * 1. Terima Konteks (Segment, Channel, Score)
 * 2. Cari Policy yang cocok (Resolver)
 * 3. Terjemahkan Rules menjadi Keputusan (Enforcer)
 */
async function evaluateAuthPolicy(context) {
    try {
        // 1. Resolve
        const activePolicy = await resolvePolicy({
            segment: context.segment || 'CONSUMER',
            channel: context.channel || 'WEB',
            riskScore: context.riskScore || 0
        });

        // 2. Enforce
        const enforcementResult = enforcePolicyRules(activePolicy);

        return {
            success: true,
            policy: activePolicy,
            decision: enforcementResult
        };

    } catch (error) {
        console.error("[AuthPolicy] Evaluation Failed:", error);
        // Fail-Safe: Jika sistem error, default ke REJECT demi keamanan
        return {
            success: false,
            decision: {
                status: 'REJECTED',
                requirements: [],
                tags: [{ label: 'Policy Error', class: 'critical' }]
            }
        };
    }
}

module.exports = { evaluateAuthPolicy };