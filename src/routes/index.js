const allMovies = require('./allMovies.routes');
const filterMovie = require('./filterMovie.routes');
const filterTitle = require('./filterTitle.routes');
const filterAge = require('./filterAge.routes');
const getId = require('./getId.routes');
const filterSeries = require('./filterSeries.routes')

const { Router } = require('express');

const router = Router();

router.use('/movies', allMovies);
router.use('/filterMovie', filterMovie);
router.use('/age', filterAge);
router.use('/title', filterTitle);
router.use('/idfilter', getId);
router.use('/filterSeries', filterSeries)



module.exports = router;