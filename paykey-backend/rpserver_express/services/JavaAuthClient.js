const axios = require('axios');

// 1. Load Config dari Environment Variable (JANGAN HARDCODED)
const JAVA_BASE_URL = process.env.PAYKEY_SERVER_URL || 'http://localhost:8080';
const API_USER = process.env.JAVA_API_USER; // Contoh: internal-rpserver
const API_PASS = process.env.JAVA_API_PASS; // Contoh: SuperSecret123!

// Validasi Config agar tidak silent error
if (!API_USER || !API_PASS) {
    console.error("[CRITICAL] JAVA_API_USER or JAVA_API_PASS is missing in .env");
    // Di production sebaiknya process.exit(1), tapi di dev kita warn saja
}

// 2. Setup Axios dengan Basic Auth Otomatis
const client = axios.create({
    baseURL: JAVA_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 15000, // 15 detik timeout
    auth: {
        username: API_USER || 'admin',     // Fallback hanya utk dev
        password: API_PASS || 'adminpass'
    }
});

class JavaAuthClient {
    
    // ============================================================
    // A. UNIFIED AUTH FLOW (PIN, TOTP, BIO-LEGACY, PUSH)
    // ============================================================

    // 1. Minta Challenge (Nonce) untuk Unified Auth
    async getUnifiedChallenge() {
        try {
            const res = await client.post('/api/unified/challenge');
            return res.data; 
        } catch (err) { throw this._handleError(err); }
    }

    // 2. Verifikasi Unified (PIN/TOTP/Push)
    async verifyUnifiedAuth(payload) {
        try {
            const res = await client.post('/api/unified/verify', payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    // 3. Register Key Baru (PIN/Bio Legacy)
    async registerCustomKey(payload) {
        try {
            const res = await client.post('/api/unified/keys/register', payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    // ============================================================
    // B. FIDO2 STANDARD FLOW (WebAuthn / Passkeys)
    // Mengadopsi logic dari fidoService.js lama
    // ============================================================

    async fidoInitiateChallenge(type, user, rpId) {
        let endpoint = '';
        let payload = {};

        // Logic mapping payload dipindahkan ke sini agar Controller bersih
        if (type === 'REGISTRATION') {
            endpoint = '/api/paykey/reg/challenge'; // Endpoint Java FIDO Controller
            payload = {
                rp: { name: 'PayKey App', id: rpId },
                user: { id: user.id, name: user.email, displayName: user.fullName || user.email },
                attestation: 'none',
                authenticatorSelection: { 
                    authenticatorAttachment: 'platform', 
                    userVerification: 'preferred', 
                    requireResidentKey: true 
                }
            };
        } else {
            // LOGIN & TRANSACTION
            endpoint = '/api/paykey/auth/challenge';
            payload = { 
                rpId: rpId, 
                userId: user.id, 
                userVerification: 'required' 
            };
        }

        try {
            const res = await client.post(endpoint, payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    async fidoVerifyResponse(type, payload) {
        const endpoint = (type === 'REGISTRATION') 
            ? '/api/paykey/reg/verify' 
            : '/api/paykey/auth/verify';
            
        try {
            const res = await client.post(endpoint, payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    // ============================================================
    // C. ADMIN FLOW (Backoffice)
    // ============================================================

    // Import Batch Hardware Token
    async importTokensBatch(tokens) {
        try {
            const res = await client.post('/api/admin/tokens/import', { tokens });
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    // Assign Token
    async assignToken(serialNumber, userId) {
        try {
            const res = await client.post('/api/admin/tokens/assign', { serialNumber, userId });
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    // ============================================================
    // INTERNAL HELPER
    // ============================================================

    _handleError(err) {
        if (err.response) {
            console.warn(`[JavaAuthClient] Error ${err.response.status}:`, JSON.stringify(err.response.data));
            
            // Security check: Jika 401, berarti password internal salah
            if (err.response.status === 401) {
                console.error("[SECURITY] Node.js failed to authenticate to Java Server! Check JAVA_API_PASS.");
            }

            return { 
                status: err.response.status, 
                message: err.response.data.message || err.response.data.error || 'Auth Operation Failed' 
            };
        } else if (err.request) {
            console.error("[JavaAuthClient] No response from Java Server. Is it running?");
            return { status: 503, message: 'Security Server Unavailable' };
        } else {
            console.error("[JavaAuthClient] Request Setup Error:", err.message);
            return { status: 500, message: 'Internal Client Error' };
        }
    }
}

module.exports = new JavaAuthClient();