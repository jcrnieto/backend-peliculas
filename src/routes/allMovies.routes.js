const { Router } = require('express');
const { allMovie }= require('../controllers/allMovie.controllers')

const router = Router();

router.get('/', allMovie)

module.exports = router;