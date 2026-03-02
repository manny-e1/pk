const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const passkeyController = require('../controllers/passkeyController');
const deviceController = require('../controllers/deviceController');
const logController = require('../controllers/logController');
const userController = require('../controllers/userController');
const adminConfig = require('../controllers/adminConfigController');
const riskEngine = require('../controllers/riskEngineController');
const dashboardController = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware');
const transactionController = require('../controllers/transactionController'); 
const transactionLogs = require('../controllers/transactionLogController');
const adminConfigController = require('../controllers/adminConfigController');

// --- 1. AUTH PASSWORD ---

router.post('/auth/check', authController.checkUser);
router.post('/auth/login', authController.loginPassword);     // Login Password
router.post('/reg/password', authController.registerPassword); // Register Password
router.post('/auth/logout', authController.logout);

// --- 2. RISK ENGINE & TRANSACTIONS ---
router.post('/api/transaction/analyze', riskEngine.analyzeTransaction);


router.post('/api/transaction/initiate', transactionController.initiateTransaction);
router.get('/api/admin/transactions/:id/investigate', transactionLogs.getInvestigationReport);
router.get('/api/admin/transactions/:id/evidence', transactionLogs.getTransactionEvidence);

// --- 3. ADMIN CONFIGURATION ---

// Amount Thresholds
router.get('/api/admin/limits', adminConfig.getAmountLimits);
router.post('/api/admin/limits', adminConfig.createAmountLimit);
router.put('/api/admin/limits/:id', adminConfig.updateAmountLimit);
router.delete('/api/admin/limits/:id', adminConfig.deleteAmountLimit);

// --- RISK ENGINE CONFIGURATION (Unified) ---
// // Rute ini menangani konfigurasi (Threshold & Rules) sekaligus
// router.get('/api/admin/risk-config', riskEngine.getRiskConfig);
// router.put('/api/admin/risk-config', riskEngine.updateRiskConfig);

// router.get('/api/admin/risk-rules', adminConfigController.getRiskRules);
// // 2. Batch Update Rules (Tombol Save di Frontend)
// router.post('/api/admin/risk-rules/batch-update', adminConfigController.batchUpdateRiskRules);

// // 3. Global Thresholds
// router.get('/api/admin/risk-config', adminConfigController.getRiskConfig);
// router.put('/api/admin/risk-config', adminConfigController.updateRiskConfig);
router.get('/api/admin/risk-rules', adminConfigController.getRiskRules);
router.post('/api/admin/risk-rules', adminConfigController.batchUpdateRiskRules);
router.get('/api/admin/risk-config', adminConfigController.getRiskConfig);
router.post('/api/admin/risk-config', adminConfigController.updateRiskConfig);


// --- RISK ANALYSIS (Transaction) ---
router.post('/api/transaction/analyze', riskEngine.analyzeTransaction);

router.post('/api/transaction/initiate', transactionController.initiateTransaction);

// Auth Policies
router.get('/api/admin/policies', adminConfig.getPolicies);
router.get('/api/admin/policies/audit', adminConfig.getPolicyAuditLogs);
router.post('/api/admin/policies', adminConfig.upsertPolicy); // Hanya satu rute POST untuk Upsert

// --- 4. PASSKEY (FIDO2) ---
if (passkeyController.registerStart) {
    router.post('/reg/start', passkeyController.registerStart);
    router.post('/reg/complete', passkeyController.registerComplete);
    router.post('/auth/start', passkeyController.loginStart);
    router.post('/auth/complete', passkeyController.loginComplete);
}

// --- 3. ROUTE TRANSACTION STEP-UP ---
router.post('/api/transaction/step-up/start', passkeyController.transactionStepUpStart);
router.post('/api/transaction/step-up/complete', passkeyController.transactionStepUpComplete);

// Dashboard Statistics
router.get('/api/admin/dashboard', dashboardController.getDashboardStats);


// --- 5. DEVICE & USER MANAGEMENT ---
router.get('/api/devices', deviceController.getUserDevices);
router.put('/api/devices/:id/status', deviceController.toggleDeviceStatus);
router.put('/api/devices/:id/rename', deviceController.renameDevice);

router.get('/api/admin/logs', logController.getAuthLogs);
router.get('/api/users', userController.getAllUsers);
router.put('/api/users/:id/status', userController.updateUserStatus);

router.get('/auth/me', protect, async (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});



module.exports = router;