const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const inventoryController = require('../controllers/admin/totpInventoryController');
const authController = require('../controllers/admin/authController');
const passkeyController = require('../controllers/admin/passkeyController');
const deviceController = require('../controllers/admin/deviceController');
const logController = require('../controllers/admin/logController');
const userController = require('../controllers/admin/userController');
const adminConfig = require('../controllers/admin/adminConfigController');
const riskEngine = require('../controllers/admin/riskEngineController');
const dashboardController = require('../controllers/admin/dashboardController');
const { protect } = require('../middleware/authMiddleware');
const transactionController = require('../controllers/admin/transactionController'); 
const transactionLogs = require('../controllers/admin/transactionLogController');
const adminConfigController = require('../controllers/admin/adminConfigController');
const companyController = require('../controllers/admin/companyController');
const workflowController = require('../controllers/admin/workflowController');
const adminTransactionManagementController = require('../controllers/admin/adminTransactionManagementController');


router.post('/auth/check', authController.checkUser);
router.post('/auth/login', authController.loginPassword);
router.post('/reg/password', authController.registerPassword);
router.post('/auth/logout', authController.logout);

router.post('/api/transaction/analyze', riskEngine.analyzeTransaction);


router.post('/api/transaction/initiate', transactionController.initiateTransaction);

router.get('/api/admin/transactions/metrics', adminTransactionManagementController.getTransactionMetrics);
router.get('/api/admin/transactions', adminTransactionManagementController.listTransactions);
router.get('/api/admin/transactions/:id/investigate', transactionLogs.getInvestigationReport);
router.get('/api/admin/transactions/:id/evidence', transactionLogs.getTransactionEvidence);
router.get('/api/admin/transactions/:id', adminTransactionManagementController.getTransactionDetail);


router.get('/api/admin/limits', adminConfig.getAmountLimits);
router.post('/api/admin/limits', adminConfig.createAmountLimit);
router.put('/api/admin/limits/:id', adminConfig.updateAmountLimit);
router.delete('/api/admin/limits/:id', adminConfig.deleteAmountLimit);



router.get('/api/admin/risk-rules', adminConfigController.getRiskRules);
router.post('/api/admin/risk-rules', adminConfigController.batchUpdateRiskRules);
router.get('/api/admin/risk-config', adminConfigController.getRiskConfig);
router.post('/api/admin/risk-config', adminConfigController.updateRiskConfig);


router.post('/api/transaction/analyze', riskEngine.analyzeTransaction);

router.post('/api/transaction/initiate', transactionController.initiateTransaction);

router.get('/api/admin/policies', adminConfig.getPolicies);
router.get('/api/admin/policies/audit', adminConfig.getPolicyAuditLogs);
router.post('/api/admin/policies', adminConfig.upsertPolicy);

if (passkeyController.registerStart) {
    router.post('/reg/start', passkeyController.registerStart);
    router.post('/reg/complete', passkeyController.registerComplete);
    router.post('/auth/start', passkeyController.loginStart);
    router.post('/auth/complete', passkeyController.loginComplete);
}

router.post('/api/transaction/step-up/start', passkeyController.transactionStepUpStart);
router.post('/api/transaction/step-up/complete', passkeyController.transactionStepUpComplete);

router.get('/api/admin/dashboard', dashboardController.getDashboardStats);


router.get('/api/devices', deviceController.getUserDevices);
router.put('/api/devices/:id/status', deviceController.toggleDeviceStatus);
router.put('/api/devices/:id/rename', deviceController.renameDevice);

router.get('/api/admin/logs', logController.getAuthLogs);
router.get('/api/users', userController.getAllUsers);
router.put('/api/users/:id/status', userController.updateUserStatus);

router.get('/api/admin/companies', companyController.listCompanies);
router.post('/api/admin/companies', companyController.createCompany);
router.get('/api/admin/companies/:companyId', companyController.getCompany);
router.put('/api/admin/companies/:companyId', companyController.updateCompany);
router.delete('/api/admin/companies/:companyId', companyController.deleteCompany);
router.get('/api/admin/companies/:companyId/users', companyController.listCompanyUsers);
router.get('/api/admin/companies/:companyId/workflows', companyController.listCompanyWorkflows);

router.get('/api/admin/workflows', workflowController.listWorkflows);
router.post('/api/admin/companies/:companyId/workflows', workflowController.createWorkflow);
router.get('/api/admin/workflows/:workflowId', workflowController.getWorkflow);
router.put('/api/admin/workflows/:workflowId', workflowController.updateWorkflow);
router.delete('/api/admin/workflows/:workflowId', workflowController.deleteWorkflow);


// UBAH DARI '/totp-inventory' MENJADI '/api/admin/totp-inventory'
router.get('/api/admin/totp-inventory', inventoryController.getInventoryData);
router.post('/api/admin/totp-inventory/import', upload.single('seedFile'), inventoryController.importTokenBatch);

// Rute untuk aksi Suspend, Revoke, Assign, dan Unassign
router.put('/api/admin/totp-inventory/:serial/status', inventoryController.updateTokenStatus);
router.post('/api/admin/totp-inventory/:serial/assign', inventoryController.assignToken);
router.post('/api/admin/totp-inventory/:serial/unassign', inventoryController.unassignToken);

router.get('/auth/me', protect, async (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});



module.exports = router;