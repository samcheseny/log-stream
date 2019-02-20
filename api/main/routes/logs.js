const router = require('express').Router();
const passport = require('passport');
const {LogsController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), LogsController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), LogsController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), LogsController.create);

module.exports = router;
