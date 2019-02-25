const router = require('express').Router();
const passport = require('passport');
const {ServersController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), ServersController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), ServersController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), ServersController.create);

module.exports = router;
