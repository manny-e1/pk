const prisma = require('../../../config/db');


async function evaluateDevice(context, config) {
    const { telemetry, userId, email } = context;
    const { rules } = config; 
    
    let score = 0;
    let tags = [];
    let breakdown = [];

    if (!telemetry || !userId) {
        return { score, tags, breakdown };
    }


    const newDeviceRule = rules.find(r => r.ruleType === 'NEW_DEVICE');
    
    if (newDeviceRule && newDeviceRule.isActive) {
        
        const deviceIdentifier = telemetry.device_id || telemetry.device_model || 'Unknown Device';

        const knownDeviceLog = await prisma.authLog.findFirst({
            where: {
                email: email, 
                status: { in: ['SUCCESS', 'APPROVED'] },
                OR: [
                    { device: deviceIdentifier },
                    { userAgent: { contains: deviceIdentifier } }
                ]
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!knownDeviceLog) {
            
            const riskWeight = newDeviceRule.weight || 30;
            score += riskWeight;
            
            tags.push({ label: 'New Device', class: 'warning' });
            
            breakdown.push({ 
                rule: 'NEW_DEVICE', 
                score: riskWeight, 
                desc: `First time transaction from device: ${deviceIdentifier}` 
            });

            console.log(`[DeviceCheck] 📱 New Device Detected: ${deviceIdentifier}`);
        } 
        else {
            
            console.log(`[DeviceCheck] ✅ Known Device: ${deviceIdentifier}`);
        }
    }

    return { score, tags, breakdown };
}

module.exports = { evaluateDevice };