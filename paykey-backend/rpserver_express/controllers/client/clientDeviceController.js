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
    try {
        const { userId, deviceId, fcmToken } = req.body;

        if (!userId || !deviceId || !fcmToken) {
            return res.status(400).json({ error: 'Missing userId, deviceId, or fcmToken' });
        }

        let device = await prisma.userDevice.findFirst({
            where: { 
                userId: userId, 
                deviceId: deviceId 
            }
        });

        // Tangkap nama/model perangkat dari Header
        const capturedDeviceModel = req.headers['x-device-name'] || 'Unknown Android';

        if (device) {
            // Gunakan deviceModel (bukan deviceName)
            device = await prisma.userDevice.update({
                where: { id: device.id },
                data: { 
                    fcmToken: fcmToken, 
                    deviceModel: capturedDeviceModel, // <-- PERBAIKAN
                    lastActive: new Date() 
                }
            });
        } else {
            // Gunakan deviceModel (bukan deviceName)
            device = await prisma.userDevice.create({
                data: {
                    userId: userId,
                    deviceId: deviceId,
                    deviceModel: capturedDeviceModel, // <-- PERBAIKAN
                    fcmToken: fcmToken,
                    lastActive: new Date()
                }
            });
        }

        console.log(`[FCM Setup] Token updated for User: ${userId} | Device: ${deviceId}`);
        res.json({ success: true, message: 'FCM Token updated successfully' });

    } catch (error) {
        console.error("[DeviceController] FCM Update Error:", error);
        res.status(500).json({ error: 'Failed to update FCM token' });
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