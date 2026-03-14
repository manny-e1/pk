// /**
//  * @param {Object} policy - Object policy  database
//  */
// function enforcePolicyRules(policy) {
//     const rules = typeof policy.condition === 'string' 
//         ? JSON.parse(policy.condition) 
//         : (policy.condition || {});

//     const decision = {
//         status: 'APPROVED',
//         requirements: [],
//         tags: [],
//         metadata: {
//             policyName: policy.name,
//             maxAttempts: rules.maxAttempts || 3,
//             lockoutAction: rules.lockoutAction || 'soft_lock'
//         }
//     };

//     if (rules.requireStepUp === true) {
//         decision.status = 'CHALLENGED';
//         decision.requirements.push('STEP_UP_AUTH');

//         if (rules.userVerification === 'required') {
//             decision.requirements.push('UV_REQUIRED');
//         } else if (rules.userVerification === 'discouraged') {
//             decision.requirements.push('UV_OPTIONAL');
//         }
//     }

//     if (rules.txnSigning === true) {
//         decision.status = 'CHALLENGED';
//         decision.requirements.push('TXN_SIGNING'); 
//         decision.tags.push({ label: 'Txn Signing Required', class: 'critical' });
//     }

//     const tagClass = policy.riskLevel === 'HIGH' ? 'critical' 
//                    : policy.riskLevel === 'MEDIUM' ? 'warning' 
//                    : 'info';
                   
//     decision.tags.push({ 
//         label: `Policy: ${policy.name}`, 
//         class: tagClass
//     });

//     return decision;
// }

// module.exports = { enforcePolicyRules };

function enforcePolicyRules(policy) {
    const rules = typeof policy.condition === 'string' ? JSON.parse(policy.condition) : (policy.condition || {});

    const decision = {
        status: 'APPROVED', requirements: [], allowedMethods: [], tags: [],
        metadata: { policyName: policy.name, maxAttempts: rules.maxAttempts || 3 }
    };

    if (rules.requireStepUp === true) {
        decision.status = 'CHALLENGED';
        
        // Menerjemahkan data dari Database ke Format SDK Android
        if (rules.stepUpMethods && rules.stepUpMethods.length > 0) {
            decision.allowedMethods = rules.stepUpMethods.map(m => {
                const upper = m.toUpperCase();
                if (upper === 'CALLBACK') return 'FIDO2'; 
                if (upper === 'SMS_OTP') return 'OTP';
                if (upper === 'HARDWARE_TOTP') return 'TOTP';
                return upper; // Untuk PIN dll
            });
        } else {
            // FALLBACK AMAN BERDASARKAN TINGKAT RISIKO (Tanpa Hardcode Lemah)
            if (policy.riskLevel === 'HIGH' || policy.riskLevel === 'CRITICAL') {
                decision.allowedMethods = ['FIDO2', 'HARDWARE_KEY']; // Risiko tinggi = Blokir OTP/PIN
            } else if (policy.riskLevel === 'MEDIUM') {
                decision.allowedMethods = ['FIDO2', 'PIN'];
            } else {
                decision.allowedMethods = ['FIDO2', 'PIN', 'OTP'];
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