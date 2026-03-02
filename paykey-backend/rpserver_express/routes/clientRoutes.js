const express = require('express');
const router = express.Router();

// Middlewares
const { clientGuard } = require('../middleware/clientGuard'); // Wajib: API Key + Signature
const { protect } = require('../middleware/authMiddleware');  // Wajib: JWT User

// Controllers
const clientAuth = require('../controllers/client/clientAuthController');
const clientTx = require('../controllers/client/clientTransactionController');
const clientDevice = require('../controllers/client/clientDeviceController');
const clientProfile = require('../controllers/client/clientProfileController');

// 
const rateLimiter = require('../middleware/rateLimiter');

// ==================================================================
// KONFIGURASI ROUTER CLIENT
// Base Path (dari index.js): /api/client
// ==================================================================

// 1. GLOBAL GUARD (Semua request wajib punya API Key valid)
router.use(clientGuard);

// 2. AUTHENTICATION FLOW
router.post('/auth/register', clientAuth.registerUser);
router.post('/auth/login',rateLimiter.rateLimitLogin, clientAuth.loginStep1);       // Step 1: Password -> Policy
router.post('/auth/challenge', clientAuth.getChallenge); // Step 2a: Get Nonce
router.post('/auth/verify', rateLimiter.rateLimitRequestOtp,clientAuth.verifyMfa);       // Step 2b: Verify MFA

// 3. SESSION CHECK
router.get('/auth/me', protect, async (req, res) => {
    res.json({ success: true, user: req.user, role: 'CLIENT_USER' });
});

// 4. DEVICE MANAGEMENT (Butuh Login)
router.post('/device/setup', protect, clientDevice.setupAuthMethod); // Setup PIN/Bio
router.post('/device/fcm', protect, clientDevice.updateFcmToken);    // Update Push Token
router.get('/device/list', protect, clientDevice.getMyDevices);      // List Devices

// 5. PROFILE
router.get('/me', protect, clientProfile.getMe);

// 6. TRANSACTION FLOW (Risk Engine Integrated)
router.post('/transaction/init', protect, clientTx.initiateTransaction); // Cek Risk & Policy
router.post('/transaction/exec', protect, clientTx.executeTransaction);  // Execute

module.exports = router;