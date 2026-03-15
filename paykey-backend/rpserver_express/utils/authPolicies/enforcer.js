
// function enforcePolicyRules(policy) {
//     const rules = typeof policy.condition === 'string' ? JSON.parse(policy.condition) : (policy.condition || {});

//     const decision = {
//         status: 'APPROVED', requirements: [], allowedMethods: [], tags: [],
//         metadata: { policyName: policy.name, maxAttempts: rules.maxAttempts || 3 }
//     };

//     if (rules.requireStepUp === true) {
//         decision.status = 'CHALLENGED';
        
//         // Menerjemahkan data dari Database ke Format SDK Android
//         if (rules.stepUpMethods && rules.stepUpMethods.length > 0) {
//             decision.allowedMethods = rules.stepUpMethods.map(m => {
//                 const upper = m.toUpperCase();
//                 if (upper === 'CALLBACK') return 'FIDO2'; 
//                 if (upper === 'SMS_OTP') return 'OTP';
//                 if (upper === 'HARDWARE_TOTP') return 'TOTP';
//                 return upper; // Untuk PIN dll
//             });
//         } else {
//             // FALLBACK AMAN BERDASARKAN TINGKAT RISIKO (Tanpa Hardcode Lemah)
//             if (policy.riskLevel === 'HIGH' || policy.riskLevel === 'CRITICAL') {
//                 decision.allowedMethods = ['FIDO2', 'HARDWARE_KEY']; // Risiko tinggi = Blokir OTP/PIN
//             } else if (policy.riskLevel === 'MEDIUM') {
//                 decision.allowedMethods = ['FIDO2', 'PIN'];
//             } else {
//                 decision.allowedMethods = ['FIDO2', 'PIN', 'OTP'];
//             }
//         }

//         if (rules.userVerification === 'required') decision.requirements.push('UV_REQUIRED');
//         else if (rules.userVerification === 'discouraged') decision.requirements.push('UV_DISCOURAGED');
//         else decision.requirements.push('UV_PREFERRED'); 
//     }

//     const tagClass = policy.riskLevel === 'HIGH' ? 'critical' : policy.riskLevel === 'MEDIUM' ? 'warning' : 'info';
//     decision.tags.push({ label: `Policy: ${policy.name}`, class: tagClass });

//     return decision;
// }

// module.exports = { enforcePolicyRules };

/**
 * @file enforcer.js
 */
function enforcePolicyRules(policy) {
    const rules = typeof policy.condition === 'string' ? JSON.parse(policy.condition) : (policy.condition || {});

    // KUNCI PERBAIKAN: Masukkan batas gagal (Lockout) dan Syarat Perangkat ke metadata
    const decision = {
        status: 'APPROVED', requirements: [], allowedMethods: [], tags: [],
        metadata: { 
            policyName: policy.name, 
            maxAttempts: rules.maxAttempts || 3,
            lockoutDuration: rules.lockoutDuration || 300, // Default 5 menit
            knownDeviceRequired: rules.knownDevice === true
        }
    };

    if (rules.requireStepUp === true) {
        decision.status = 'CHALLENGED';
        
        if (rules.stepUpMethods && rules.stepUpMethods.length > 0) {
            // PERBAIKAN: Biarkan metode apa adanya dari Database (Callback tetap Callback)
            decision.allowedMethods = rules.stepUpMethods;
        } else {
            // Fallback aman jika admin mengosongkan metode di dashboard
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