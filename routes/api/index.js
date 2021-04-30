const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardAPI = require('./cardAPI');
const gameRoute = require('./gameRoute');

router.use('/users', userRoutes);
router.use('/pokemon', cardAPI);
app.get('/gameRoute', gameRoute);

module.exports = router;
