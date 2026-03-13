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

/**
 * @param {Object} policy - Object policy dari database
 */
function enforcePolicyRules(policy) {
    const rules = typeof policy.condition === 'string' 
        ? JSON.parse(policy.condition) 
        : (policy.condition || {});

    const decision = {
        status: 'APPROVED',
        requirements: [],
        allowedMethods: [], // Tambahan baru untuk menyimpan metode FIDO2/OTP/PIN
        tags: [],
        metadata: {
            policyName: policy.name,
            maxAttempts: rules.maxAttempts || 3,
            lockoutAction: rules.lockoutAction || 'soft_lock'
        }
    };

    if (rules.requireStepUp === true) {
        decision.status = 'CHALLENGED';
        
        // Membaca metode Step-Up spesifik dari Database (FIDO2, OTP, PIN)
        if (rules.stepUpMethods && rules.stepUpMethods.length > 0) {
            decision.allowedMethods = rules.stepUpMethods;
        } else {
            // Fallback jika admin belum memilih metode di dashboard
            decision.allowedMethods = ['FIDO2', 'OTP', 'PIN'];
        }

        // Membaca aturan User Verification (Sidik Jari / Wajah)
        if (rules.userVerification === 'required') {
            decision.requirements.push('UV_REQUIRED');
        } else if (rules.userVerification === 'discouraged') {
            decision.requirements.push('UV_DISCOURAGED');
        } else {
            decision.requirements.push('UV_PREFERRED'); // Default FIDO2
        }
    }

    if (rules.txnSigning === true) {
        decision.status = 'CHALLENGED';
        decision.requirements.push('TXN_SIGNING'); 
        decision.tags.push({ label: 'Txn Signing Required', class: 'critical' });
    }

    const tagClass = policy.riskLevel === 'HIGH' ? 'critical' 
                   : policy.riskLevel === 'MEDIUM' ? 'warning' 
                   : 'info';
                   
    decision.tags.push({ 
        label: `Policy: ${policy.name}`, 
        class: tagClass
    });

    return decision;
}

module.exports = { enforcePolicyRules };