const prisma = require('../../config/db');
const javaClient = require('../../services/JavaAuthClient');

/**
 * SETUP PIN / BIOMETRIK BARU
 * Mobile App generate KeyPair, lalu kirim Public Key ke sini.
 */
exports.setupAuthMethod = async (req, res) => {
    // Middleware authMiddleware harus dipasang di route ini (User harus login dulu / punya temp token)
    const { deviceId, publicKey, type } = req.body; // type: 'PIN' atau 'BIO_LEGACY'
    const userId = req.user.id; // Dari JWT Token

    try {
        // 1. Simpan Metadata Device di Node.js (Optional, untuk list device user)
        await prisma.userDevice.upsert({
            where: { userId_deviceId: { userId, deviceId } },
            update: { lastActive: new Date() },
            create: { userId, deviceId, fcmToken: '' } // FCM diupdate terpisah
        });

        // 2. Kirim Public Key ke Java Server (Security Core)
        // Java akan menyimpannya di tabel 'auth_custom_keys'
        await javaClient.registerCustomKey({
            userId,
            deviceId,
            publicKey, // Format PEM dari Mobile
            type
        });

        res.json({ status: 'success', message: `${type} setup successfully` });

    } catch (error) {
        console.error("Setup Auth Error:", error);
        res.status(500).json({ error: 'Failed to setup authentication method' });
    }
};

/**
 * REGISTER FCM TOKEN (Untuk Push Notification)
 */
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