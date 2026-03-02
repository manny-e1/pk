const express = require('express');
const router = express.Router();

// Import Sub-Routers
const clientRoutes = require('./clientRoutes');
const adminRoutes = require('./adminRoutes');

// ==================================================================
// MOUNTING ROUTERS
// ==================================================================

router.use('/client', clientRoutes);
router.use('/admin', adminRoutes);

module.exports = router;