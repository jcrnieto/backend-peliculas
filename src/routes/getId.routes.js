const { Router } = require('express');
const { getId } = require('../controllers/getId.controllers')

const router = Router();

router.get('/:id', getId)

module.exports = router;