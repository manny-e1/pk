const express = require('express');
const router = express.Router();


const { clientGuard } = require('../middleware/clientGuard');
const { protect } = require('../middleware/authMiddleware');
const rateLimiter = require('../middleware/rateLimiter');


const clientAuth = require('../controllers/client/clientAuthController');
const clientTx = require('../controllers/client/clientTransactionController');
const clientDevice = require('../controllers/client/clientDeviceController');
const clientProfile = require('../controllers/client/clientProfileController');
const enrollController = require('../controllers/client/clientEnrollmentController');
const stepUpController = require('../controllers/client/clientStepUpController');

router.use(clientGuard);


router.post('/auth/register', clientAuth.registerUser);

router.post('/auth/login', rateLimiter.rateLimitLogin, clientAuth.loginStep1);
router.post('/auth/challenge', clientAuth.getChallenge);
router.post('/auth/verify', rateLimiter.rateLimitRequestOtp, clientAuth.verifyMfa);

router.get('/auth/me', protect, async (req, res) => {
    res.json({ success: true, user: req.user, role: 'CLIENT_USER' });
});

router.get('/me', protect, clientProfile.getMe);
router.get('/device/list', protect, clientDevice.getMyDevices);
router.post('/device/setup', protect, clientDevice.setupAuthMethod);
router.post('/device/fcm', protect, clientDevice.updateFcmToken);

router.post('/transaction/init', protect, clientTx.initiateTransaction);


router.post('/enroll/init', enrollController.registerInit);
router.post('/enroll/otp/start', enrollController.enrollOtpStart);
router.post('/enroll/otp/verify', enrollController.verifyOtpEnrolment);
router.post('/enroll/pki-method', enrollController.enrollPKIMethod);
router.post('/enroll/fido/start', enrollController.enrollFidoStart);
router.post('/enroll/fido/complete', enrollController.enrollFidoComplete);
router.post('/enroll/app-pin', enrollController.enrollAppPin);

router.get('/auth/stepup-challenge', protect, stepUpController.getUnifiedChallenge);
router.post('/auth/verify-stepup', protect, stepUpController.verifyStepUp);

module.exports = router;