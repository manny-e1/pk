const express = require('express');
const router = express.Router();

const clientRoutes = require('./clientRoutes');
const adminRoutes = require('./adminRoutes');


router.use('/client', clientRoutes);
router.use('/admin', adminRoutes);

module.exports = router;