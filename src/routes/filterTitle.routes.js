const { Router } = require('express');
const { filterTitle } = require ('../controllers/filterTitle.controllers')

const router = Router();

router.get('/', filterTitle)

module.exports = router;