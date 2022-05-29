const allMovies = require('./allMovies.routes');
const filterType = require('./filterType.routes');
const filterTitle = require('./filterTitle.routes');
const filterAge = require('./filterAge.routes');
const getId = require('./getId.routes');

const { Router } = require('express');

const router = Router();

router.use('/movies', allMovies);
router.use('/type', filterType);
router.use('/age', filterAge);
router.use('/title', filterTitle);
router.use('/idfilter', getId);
/*router.get('/', (req,res)=>{
    res.send('holuuuuuu')
})*/



module.exports = router;