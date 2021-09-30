var express = require('express');
var router = express.Router();
const HealthController = require('../controller/health.controller');

router.get('/health', HealthController.health);

module.exports = router;