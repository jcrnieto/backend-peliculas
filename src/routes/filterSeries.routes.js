const { Router } = require('express');
const { filterSeries } = require('../controllers/filterSeries.controllers')

const router = Router();

router.get('/', filterSeries)

module.exports = router;