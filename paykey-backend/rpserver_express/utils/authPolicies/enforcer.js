/**
 * Menerapkan aturan policy ke dalam keputusan transaksi.
 * @param {Object} policy - Object policy dari database
 */
function enforcePolicyRules(policy) {
    // Parsing JSON condition (handle jika string atau object)
    const rules = typeof policy.condition === 'string' 
        ? JSON.parse(policy.condition) 
        : (policy.condition || {});

    // Struktur Keputusan Standar
    const decision = {
        status: 'APPROVED',      // APPROVED | CHALLENGED | REJECTED
        requirements: [],        // List aksi yang harus dilakukan frontend (e.g. UV_REQUIRED)
        tags: [],                // Tag untuk reporting/logs
        metadata: {
            policyName: policy.name,
            maxAttempts: rules.maxAttempts || 3,
            lockoutAction: rules.lockoutAction || 'soft_lock'
        }
    };

    // --- RULE 1: Step-Up Authentication (MFA) ---
    if (rules.requireStepUp === true) {
        decision.status = 'CHALLENGED';
        decision.requirements.push('STEP_UP_AUTH');

        // Detail Metode (Biometric vs PIN vs FIDO2)
        if (rules.userVerification === 'required') {
            decision.requirements.push('UV_REQUIRED'); // Wajib Biometrik/PIN lokal
        } else if (rules.userVerification === 'discouraged') {
            decision.requirements.push('UV_OPTIONAL');
        }
    }

    // --- RULE 2: Transaction Signing (High Security) ---
    // Biasanya untuk Corporate High Value
    if (rules.txnSigning === true) {
        decision.status = 'CHALLENGED';
        decision.requirements.push('TXN_SIGNING'); 
        decision.tags.push({ label: 'Txn Signing Required', class: 'critical' });
    }

    // --- RULE 3: Tagging untuk UI ---
    // Memberi warna label berdasarkan tingkat risiko policy
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