const { resolvePolicy } = require('./resolver');
const { enforcePolicyRules } = require('./enforcer');
const { checkMinimumDeviceAge } = require('./loader');


async function evaluateAuthPolicy(context) {
    try {
        const activePolicy = await resolvePolicy({
            segment: context.segment || 'CONSUMER',
            channel: context.channel || 'WEB',
            riskScore: context.riskScore || 0,
            action: context.action || 'LOGIN'
        });

        const enforcementResult = enforcePolicyRules(activePolicy);

        const minDeviceAge = Number(enforcementResult.metadata.minDeviceAge) || 0;
        const requireKnownDevice = enforcementResult.metadata.knownDeviceRequired === true;
        
        if (requireKnownDevice && minDeviceAge > 0 && context.userId && context.deviceId) {
            
            const isOldEnough = await checkMinimumDeviceAge(context.userId, context.deviceId, minDeviceAge);
            
            if (!isOldEnough) {
                enforcementResult.status = 'BLOCKED';
                enforcementResult.rejectMessage = `Security Policy Block: Device is not old enough. Minimum age required: ${minDeviceAge} days.`;
                enforcementResult.tags.push({ label: 'Device Age Restricted', class: 'error' });
            }
        }

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