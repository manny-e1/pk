const crypto = require('crypto');
const prisma = require('../config/db');

/**
 * GENERATE SIGNATURE (Di Sisi Client/SDK nanti logicnya sama)
 * Algo: HMAC_SHA256(Method + Url + Body + Timestamp, ApiSecret)
 */
const generateSignature = (method, url, body, timestamp, secret) => {
    const payload = `${method.toUpperCase()}:${url}:${JSON.stringify(body || {})}:${timestamp}`;
    return crypto.createHmac('sha256', secret).update(payload).digest('hex');
};

exports.clientGuard = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const signature = req.headers['x-signature'];
    const timestamp = req.headers['x-timestamp'];

    // 1. Cek Kelengkapan Header
    if (!apiKey || !signature || !timestamp) {
        return res.status(401).json({ error: 'Missing Authentication Headers' });
    }

    // 2. Anti-Replay Attack (Tolak request > 5 menit lalu)
    const now = Date.now();
    if (Math.abs(now - parseInt(timestamp)) > 5 * 60 * 1000) {
        return res.status(400).json({ error: 'Request Expired (Check System Clock)' });
    }

    try {
        // 3. Ambil Credential dari DB (Bisa di-cache di Redis agar cepat)
        const client = await prisma.apiClient.findUnique({
            where: { apiKey: apiKey }
        });

        if (!client || !client.isActive) {
            return res.status(403).json({ error: 'Invalid or Inactive API Key' });
        }

        // 4. Verifikasi Signature (Integrity Check)
        // Kita hitung ulang signature berdasarkan data yg diterima, lalu bandingkan
        const expectedSignature = generateSignature(
            req.method, 
            req.originalUrl, 
            req.body, 
            timestamp, 
            client.apiSecret
        );

        // Gunakan timingSafeEqual untuk mencegah Timing Attack
        const sigBuffer = Buffer.from(signature);
        const expBuffer = Buffer.from(expectedSignature);

        if (sigBuffer.length !== expBuffer.length || !crypto.timingSafeEqual(sigBuffer, expBuffer)) {
             return res.status(401).json({ error: 'Invalid Request Signature' });
        }

        // 5. Inject Client Info ke Request
        req.apiClient = {
            id: client.id,
            name: client.name,
            type: client.type // 'MOBILE' atau 'WEB'
        };

        next();

    } catch (error) {
        console.error("Client Guard Error:", error);
        res.status(500).json({ error: 'Internal Security Error' });
    }
};