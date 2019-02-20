const router = require('express').Router();

router.use('/', require('./auth'));

router.use('/applications', require('./applications'));

router.use('/logs', require('./logs'));

router.use('/users', require('./users'));

module.exports = router;