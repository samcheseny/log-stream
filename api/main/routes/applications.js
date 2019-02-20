const router = require('express').Router();
const passport = require('passport');
const {ApplicationsController} = require('../controllers');

router.get('/', passport.authenticate('bearer', {session: false}), ApplicationsController.getAll);

router.get('/:id', passport.authenticate('bearer', {session: false}), ApplicationsController.getOne);

router.post('/', passport.authenticate('bearer', {session: false}), ApplicationsController.create);

module.exports = router;
