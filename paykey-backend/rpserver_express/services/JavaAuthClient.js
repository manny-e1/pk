const axios = require('axios');

const JAVA_BASE_URL = process.env.PAYKEY_SERVER_URL || 'http://localhost:8080';
const API_USER = process.env.JAVA_API_USER;
const API_PASS = process.env.JAVA_API_PASS;

if (!API_USER || !API_PASS) {
    console.error("[CRITICAL] JAVA_API_USER or JAVA_API_PASS is missing in .env");
}

const client = axios.create({
    baseURL: JAVA_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 15000,
    auth: {
        username: API_USER || 'admin',
        password: API_PASS || 'adminpass'
    }
});

class JavaAuthClient {
    

    async getUnifiedChallenge() {
        try {
            const res = await client.post('/api/unified/challenge');
            return res.data; 
        } catch (err) { throw this._handleError(err); }
    }

    async verifyUnifiedAuth(payload) {
        try {
            const res = await client.post('/api/unified/verify', payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    async registerCustomKey(payload) {
        try {
            const res = await client.post('/api/unified/keys/register', payload);
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }


    async fidoInitiateChallenge(type, user, rpId, authenticatorType) {
        let endpoint = '';
        let payload = {};

        if (type === 'REGISTRATION') {
            endpoint = '/api/paykey/reg/challenge';
            payload = {
                rp: { name: 'PayKey App', id: rpId },
                user: { id: user.id, name: user.email, displayName: user.fullName || user.email },
                attestation: 'none',
                authenticatorSelection: { 
                    authenticatorAttachment: authenticatorType, 
                    userVerification: 'preferred', 
                    requireResidentKey: true 
                }
            };
        } else {
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


    async importTokensBatch(tokens) {
        try {
            const res = await client.post('/api/admin/tokens/import', { tokens });
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }

    async assignToken(serialNumber, userId) {
        try {
            const res = await client.post('/api/admin/tokens/assign', { serialNumber, userId });
            return res.data;
        } catch (err) { throw this._handleError(err); }
    }


    _handleError(err) {
        if (err.response) {
            console.warn(`[JavaAuthClient] Error ${err.response.status}:`, JSON.stringify(err.response.data));
            
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