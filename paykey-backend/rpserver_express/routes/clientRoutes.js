const express = require('express');
const router = express.Router();


const { clientGuard } = require('../middleware/clientGuard');
const { protect } = require('../middleware/authMiddleware');
const rateLimiter = require('../middleware/rateLimiter');


const clientAuth = require('../controllers/client/clientAuthController');
const clientTx = require('../controllers/client/clientTransactionController');
const clientDevice = require('../controllers/client/clientDeviceController');
const enrollController = require('../controllers/client/clientEnrollmentController');
const stepUpController = require('../controllers/client/clientStepUpController');
const corporateController = require('../controllers/client/clientCorporateController');

const webTotpController = require('../controllers/web/webTotpController');

router.use(clientGuard);


router.post('/auth/register', clientAuth.registerUser);

router.post('/auth/login', rateLimiter.rateLimitLogin, clientAuth.loginStep1);
router.post('/auth/challenge', clientAuth.getChallenge);
router.post('/auth/verify', rateLimiter.rateLimitRequestOtp, clientAuth.verifyMfa);

router.get('/auth/me', protect, async (req, res) => {
    res.json({ success: true, user: req.user, role: 'CLIENT_USER' });
});


router.get('/device/list', clientDevice.getMyDevices);
router.post('/device/setup',  clientDevice.setupAuthMethod);
router.post('/device/fcm',  clientDevice.updateFcmToken);

router.post('/transaction/initiate', clientTx.initiateTransaction);
router.post('/transaction/execute', clientTx.executeTransaction);


router.post('/enroll/init', enrollController.registerInit);
router.post('/enroll/otp/start', enrollController.enrollOtpStart);
router.post('/enroll/otp/verify', enrollController.verifyOtpEnrolment);
router.post('/enroll/pki-method', enrollController.enrollPKIMethod);
router.post('/enroll/fido/start', enrollController.enrollFidoStart);
router.post('/enroll/fido/complete', enrollController.enrollFidoComplete);
router.post('/enroll/app-pin', enrollController.enrollAppPin);

router.get('/auth/stepup-challenge', protect, stepUpController.getUnifiedChallenge);
router.post('/auth/verify-stepup',  stepUpController.verifyStepUp);

router.post('/auth/fido/start', stepUpController.fidoStartProxy); 
router.post('/auth/fido/verify', stepUpController.fidoVerifyProxy);

router.post('/totp/setup', webTotpController.setupSoftToken);
router.post('/totp/activate', webTotpController.activateSoftToken);

router.post('/auth/push/start', stepUpController.startPushApproval);
router.get('/auth/push/status', stepUpController.checkPushStatus);
router.post('/auth/push/status', stepUpController.checkPushStatus);

router.get('/corporate/workflows', corporateController.getCorporateWorkflows);
router.post('/corporate/transactions/initiate', corporateController.initiateCorporateTransaction);
router.get('/corporate/transactions/pending', corporateController.listPendingCorporateTransactions);
router.post('/corporate/transactions/approve', corporateController.approveCorporateTransaction);
router.post('/corporate/transactions/reject', corporateController.rejectCorporateTransaction);

router.get('/auth/available-methods', clientAuth.getAvailableEnrollmentMethods);

module.exports = router;