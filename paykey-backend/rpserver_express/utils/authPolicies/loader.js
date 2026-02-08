const prisma = require('../../config/db');

/**
 * Mengambil konfigurasi Policy spesifik dari Database.
 * @param {string} segment - 'CONSUMER' | 'CORPORATE'
 * @param {string} channel - 'MOBILE' | 'WEB' | 'API'
 * @param {string} riskLevel - 'LOW' | 'MEDIUM' | 'HIGH'
 */
async function fetchPolicyConfig(segment, channel, riskLevel) {
    try {
        const policy = await prisma.authPolicy.findFirst({
            where: {
                segment: segment,
                channel: channel,
                riskLevel: riskLevel,
                isActive: true
            }
        });
        return policy;
    } catch (error) {
        console.error(`[AuthPolicy] DB Error: ${error.message}`);
        return null;
    }
}

/**
 * Mengambil Threshold Global untuk menentukan Risk Level.
 * (Cacheable: Sebaiknya di-cache di Redis di production)
 */
async function fetchRiskThresholds() {
    try {
        const config = await prisma.$queryRaw`SELECT * FROM config_risk_thresholds LIMIT 1`;
        if (config && config.length > 0) {
            return { low: config[0].lowScore, high: config[0].highScore };
        }
        return { low: 30, high: 70 }; // Default Fallback
    } catch (error) {
        return { low: 30, high: 70 };
    }
}

module.exports = { fetchPolicyConfig, fetchRiskThresholds };