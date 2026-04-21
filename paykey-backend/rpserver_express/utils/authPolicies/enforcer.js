/**
 * @file enforcer.js
 */
function enforcePolicyRules(policy) {
    const rules = typeof policy.condition === 'string' ? JSON.parse(policy.condition) : (policy.condition || {});

    const decision = {
        status: 'APPROVED', requirements: [], allowedMethods: [], tags: [],
        metadata: { 
            policyName: policy.name, 
            maxAttempts: rules.maxAttempts || 3,
            lockoutDuration: rules.lockoutDuration || 300,
            knownDeviceRequired: rules.knownDevice === true,
            totalTimeout: rules.totalTimeout || 180,
            txnSigning: rules.txnSigning === true,
            userVerification: rules.userVerification || 'preferred',
            minDeviceAge: rules.minDeviceAge || 0,
            deviceTypes: rules.deviceTypes || 'all',
            lockoutAction: rules.lockoutAction || 'soft_lock',
            baseDelay: rules.baseDelay || 3,
            progDelay: rules.progDelay === true,
            fido2Timeout: rules.fido2Timeout || 120,
            stepUpTimeout: rules.stepUpTimeout || 60
            
        }
    };

    if (rules.requireStepUp === true) {
        decision.status = 'CHALLENGED';
        
        if (rules.stepUpMethods && rules.stepUpMethods.length > 0) {
            decision.allowedMethods = rules.stepUpMethods;
        } else {
            if (policy.riskLevel === 'HIGH' || policy.riskLevel === 'CRITICAL') {
                decision.allowedMethods = ['FIDO2', 'CALLBACK', 'HARDWARE_KEY'];
            } else if (policy.riskLevel === 'MEDIUM') {
                decision.allowedMethods = ['FIDO2', 'CALLBACK', 'PIN'];
            } else {
                decision.allowedMethods = ['FIDO2', 'CALLBACK', 'PIN', 'OTP'];
            }
        }

        if (rules.userVerification === 'required') decision.requirements.push('UV_REQUIRED');
        else if (rules.userVerification === 'discouraged') decision.requirements.push('UV_DISCOURAGED');
        else decision.requirements.push('UV_PREFERRED'); 
    }

    const tagClass = policy.riskLevel === 'HIGH' ? 'critical' : policy.riskLevel === 'MEDIUM' ? 'warning' : 'info';
    decision.tags.push({ label: `Policy: ${policy.name}`, class: tagClass });

    return decision;
}

module.exports = { enforcePolicyRules };