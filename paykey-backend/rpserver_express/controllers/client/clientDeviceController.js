const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');


exports.setupAuthMethod = async (req, res) => {
    const { deviceId, publicKey, type } = req.body;
    const userId = req.user.id;

    try {
        await prisma.userDevice.upsert({
            where: { userId_deviceId: { userId, deviceId } },
            update: { lastActive: new Date() },
            create: { userId, deviceId, fcmToken: '' }
        });

        await javaClient.registerCustomKey({
            userId,
            deviceId,
            publicKey,
            type
        });

        res.json({ status: 'success', message: `${type} setup successfully` });

    } catch (error) {
        console.error("Setup Auth Error:", error);
        res.status(500).json({ error: 'Failed to setup authentication method' });
    }
};


exports.updateFcmToken = async (req, res) => {
    const { deviceId, fcmToken, deviceModel } = req.body;
    const userId = req.user.id;

    try {
        await prisma.userDevice.upsert({
            where: { userId_deviceId: { userId, deviceId } },
            update: { fcmToken, lastActive: new Date() },
            create: { userId, deviceId, fcmToken, deviceModel }
        });
        res.json({ status: 'success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * LIST MY DEVICES
 */
exports.getMyDevices = async (req, res) => {
    const userId = req.user.id;
    const devices = await prisma.userDevice.findMany({
        where: { userId },
        orderBy: { lastActive: 'desc' }
    });
    res.json({ data: devices });
};