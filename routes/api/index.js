const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardAPI = require('./cardAPI');

router.use('/users', userRoutes);
router.use('/pokemon', cardAPI);

module.exports = router;
