const fetch = require('node-fetch');

const PAYKEY_SERVER = process.env.PAYKEY_SERVER || 'http://localhost:8080';
const BASIC_AUTH = 'Basic ' + Buffer.from('admin:adminpass').toString('base64');

class FidoService {
    
    // Helper Internal: Proxy ke Java Server
    async _proxyRequest(endpoint, payload) {
        try {
            const response = await fetch(`${PAYKEY_SERVER}${endpoint}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': BASIC_AUTH 
                },
                body: JSON.stringify(payload)
            });
            
            const text = await response.text();
            let data;
            try { data = JSON.parse(text); } catch(e) { data = { error: "Invalid JSON from Upstream" }; }

            return { status: response.status, data: data };
        } catch (error) {
            console.error(`[FidoService] Error connecting to ${endpoint}:`, error);
            return { status: 503, data: { error: "Auth Server Unavailable" } };
        }
    }

    async initiateChallenge(type, user, rpId) {
        let endpoint = '';
        let payload = {};

        if (type === 'REGISTRATION') {
            endpoint = '/api/paykey/reg/challenge';
            payload = {
                rp: { name: 'PayKey App', id: rpId },
                user: { id: user.id, name: user.email, displayName: user.fullName },
                attestation: 'none',
                authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'preferred', requireResidentKey: true }
            };
        } else {
            // LOGIN & TRANSACTION menggunakan endpoint Auth yang sama di FIDO Server
            endpoint = '/api/paykey/auth/challenge';
            payload = { 
                rpId: rpId, 
                userId: user.id, // Nullable jika usernameless
                userVerification: 'required' // Wajib untuk transaksi
            };
        }

        return await this._proxyRequest(endpoint, payload);
    }

    // 2. VERIFY RESPONSE
    async verifyResponse(type, payload) {
        const endpoint = (type === 'REGISTRATION') 
            ? '/api/paykey/reg/verify' 
            : '/api/paykey/auth/verify';
            
        return await this._proxyRequest(endpoint, payload);
    }
}

module.exports = new FidoService();