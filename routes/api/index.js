const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardAPI = require('./cardAPI');
const gameRoute = require('./gameRoute');

router.use('/users', userRoutes);
router.use('/pokemon', cardAPI);
app.use('/gameRoute', gameRoute);

module.exports = router;
