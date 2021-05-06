const router = require("express").Router();
const withAuth = require('../utils/auth');
const path = require('path');

router.get('/', withAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
})
module.exports = router