const express = require('express');
const router = express.Router();

const { clientGuard } = require('../middleware/clientGuard');
const { protect } = require('../middleware/authMiddleware');

const clientAuth = require('../controllers/client/clientAuthController');
const clientTx = require('../controllers/client/clientTransactionController');
const clientDevice = require('../controllers/client/clientDeviceController');
const clientProfile = require('../controllers/client/clientProfileController');

const rateLimiter = require('../middleware/rateLimiter');


router.use(clientGuard);

router.post('/auth/register', clientAuth.registerUser);
router.post('/auth/login',rateLimiter.rateLimitLogin, clientAuth.loginStep1);
router.post('/auth/challenge', clientAuth.getChallenge);
router.post('/auth/verify', rateLimiter.rateLimitRequestOtp,clientAuth.verifyMfa);

router.get('/auth/me', protect, async (req, res) => {
    res.json({ success: true, user: req.user, role: 'CLIENT_USER' });
});

router.post('/device/setup', protect, clientDevice.setupAuthMethod);
router.post('/device/fcm', protect, clientDevice.updateFcmToken);
router.get('/device/list', protect, clientDevice.getMyDevices);

router.get('/me', protect, clientProfile.getMe);

router.post('/transaction/init', protect, clientTx.initiateTransaction);
router.post('/transaction/exec', protect, clientTx.executeTransaction);

module.exports = router;