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

async function checkMinimumDeviceAge(userId, deviceIdentifier, minAgeDays) {
    if (!minAgeDays || minAgeDays <= 0) return true;
    if (!userId || !deviceIdentifier) return false;

    const keys = await prisma.userKey.findMany({
        where: { 
            userId: userId, 
            OR: [
                { credentialId: { contains: deviceIdentifier } }, 
                { deviceName: deviceIdentifier },
                { deviceName: "WEB_UNKNOWN" }
            ] 
        },
        orderBy: { registeredTimestamp: 'asc' } 
    });

    if (keys.length === 0) return false;

    const registeredDate = new Date(keys[0].registeredTimestamp || keys[0].registeredTimestamp || Date.now());
    const ageInDays = (Date.now() - registeredDate.getTime()) / (1000 * 60 * 60 * 24);
    return ageInDays >= minAgeDays;
}

module.exports = { fetchPolicyConfig, fetchRiskThresholds, checkMinimumDeviceAge };