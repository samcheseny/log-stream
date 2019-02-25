const router = require('express').Router();
const passport = require('passport');
const {ProfilesController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), ProfilesController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), ProfilesController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), ProfilesController.create);

module.exports = router;
