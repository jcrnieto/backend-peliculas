const { Router } = require('express');
const { filterMovie } = require('../controllers/filterMovie.controllers')

const router = Router();

router.get('/', filterMovie)

module.exports = router;