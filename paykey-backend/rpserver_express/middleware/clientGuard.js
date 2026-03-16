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

    if (!apiKey || !signature || !timestamp) {
        return res.status(401).json({ error: 'Missing Authentication Headers' });
    }

    const now = Date.now();
    if (Math.abs(now - parseInt(timestamp)) > 5 * 60 * 1000) {
        return res.status(400).json({ error: 'Request Expired (Check System Clock)' });
    }

    try {
        const client = await prisma.apiClient.findUnique({
            where: { apiKey: apiKey }
        });

        if (!client || !client.isActive) {
            return res.status(403).json({ error: 'Invalid or Inactive API Key' });
        }

        const expectedSignature = generateSignature(
            req.method, 
            req.originalUrl, 
            req.body, 
            timestamp, 
            client.apiSecret
        );

        const sigBuffer = Buffer.from(signature);
        const expBuffer = Buffer.from(expectedSignature);

        if (sigBuffer.length !== expBuffer.length || !crypto.timingSafeEqual(sigBuffer, expBuffer)) {
             return res.status(401).json({ error: 'Invalid Request Signature' });
        }

        req.apiClient = {
            id: client.id,
            name: client.name,
            channel: client.channel,           
            consumerType: client.consumerType
        };

        next();

    } catch (error) {
        console.error("Client Guard Error:", error);
        res.status(500).json({ error: 'Internal Security Error' });
    }
};