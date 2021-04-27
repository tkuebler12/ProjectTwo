const router = require('express').Router();

const apiRoutes = require('./api');
const index = require('./index');


router.use('/index', index);
router.use('/api', apiRoutes);


module.exports = router;
