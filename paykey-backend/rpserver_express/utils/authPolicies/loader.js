const prisma = require('../../config/db');

/**
 * @param {string} segment - 'CONSUMER' | 'CORPORATE'
 * @param {string} channel - 'MOBILE' | 'WEB' | 'API'
 * @param {string} riskLevel - 'LOW' | 'MEDIUM' | 'HIGH'
 */
async function fetchPolicyConfig(segment, channel, riskLevel, action) {
    try {
        const policy = await prisma.authPolicy.findFirst({
            where: {
                segment: segment,
                channel: channel,
                riskLevel: riskLevel,
                action: action, // Harus sama (contoh: 'LOGIN')
                isActive: true
            }
        });
        return policy;
    } catch (error) { return null; }
}


async function fetchRiskThresholds() {
    try {
        const config = await prisma.$queryRaw`SELECT * FROM config_risk_thresholds LIMIT 1`;
        if (config && config.length > 0) {
            return { low: config[0].lowScore, high: config[0].highScore };
        }
        return { low: 30, high: 70 };
    } catch (error) {
        return { low: 30, high: 70 };
    }
}

module.exports = { fetchPolicyConfig, fetchRiskThresholds };