const router = require('express').Router();

router.use('/', require('./auth'));

router.use('/applications', require('./applications'));

router.use('/logs', require('./logs'));

router.use('/log-levels', require('./log-levels'));

router.use('/profiles', require('./profiles'));

router.use('/servers', require('./servers'));

router.use('/stream', require('./stream'));

router.use('/users', require('./users'));

module.exports = router;