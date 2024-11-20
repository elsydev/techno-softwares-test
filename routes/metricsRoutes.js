const express = require('express');
const { insertMetric, getMetrics, aggregateMetrics } = require('../controllers/metricsController');
const router = express.Router();

router.post('/', insertMetric);
router.get('/', getMetrics);
router.post('/aggregate', aggregateMetrics);

module.exports = router;