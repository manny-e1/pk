const { resolvePolicy } = require('./resolver');
const { enforcePolicyRules } = require('./enforcer');


async function evaluateAuthPolicy(context) {
    try {
        const activePolicy = await resolvePolicy({
            segment: context.segment || 'CONSUMER',
            channel: context.channel || 'WEB',
            riskScore: context.riskScore || 0
        });

        const enforcementResult = enforcePolicyRules(activePolicy);

        return {
            success: true,
            policy: activePolicy,
            decision: enforcementResult
        };

    } catch (error) {
        console.error("[AuthPolicy] Evaluation Failed:", error);
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