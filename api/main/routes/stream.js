const router = require('express').Router();
const passport = require('passport');
const {StreamsController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), StreamsController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), StreamsController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), StreamsController.create);

module.exports = router;
