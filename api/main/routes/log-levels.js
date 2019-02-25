const router = require('express').Router();
const passport = require('passport');
const {LogLevelsController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), LogLevelsController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), LogLevelsController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), LogLevelsController.create);

module.exports = router;
