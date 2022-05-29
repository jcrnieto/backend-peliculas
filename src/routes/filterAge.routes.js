const { Router } = require('express');
const { filterAge } = require('../controllers/filterAge.controllers')

const router = Router();

router.get('/', filterAge)

module.exports = router;