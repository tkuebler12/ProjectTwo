const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardAPI = require('./cardAPI');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/pokemon', cardAPI);
router.use('/homepage', homeRoutes);

module.exports = router;
