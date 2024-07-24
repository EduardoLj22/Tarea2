const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics'); // Import diagnostics route

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostics', diagnosticsRouter); // Initialize diagnostics route

module.exports = router;