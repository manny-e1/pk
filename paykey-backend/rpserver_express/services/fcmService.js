const admin = require('firebase-admin');
const serviceAccount = require('../config/paykey-auth-firebase-adminsdk-fbsvc-350114caeb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.sendPushNotification = async (fcmToken, title, body, dataPayload = {}) => {
    if (!fcmToken) {
        console.warn("[FCM] Cannot send push, missing FCM Token");
        return false;
    }

    const message = {
        token: fcmToken,
        notification: {
            title: title,
            body: body
        },
        data: dataPayload // Data tak terlihat (untuk logika aplikasi Android)
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('[FCM] Successfully sent message:', response);
        return true;
    } catch (error) {
        console.error('[FCM] Error sending message:', error.message);
        return false;
    }
};