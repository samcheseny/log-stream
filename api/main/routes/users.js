const router = require('express').Router();
const passport = require('passport');
const {UsersController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), UsersController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), UsersController.getOne);

module.exports = router;
