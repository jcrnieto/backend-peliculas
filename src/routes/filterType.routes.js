const { Router } = require('express');
const { filterType } = require('../controllers/filterType.controllers')

const router = Router();

router.get('/', filterType)

module.exports = router;