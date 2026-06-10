const express = require('express');
const router = express.Router();
const passport = require('passport');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// auth routes - no token needed
router.post('/register', authController.register);
router.post('/login',    authController.login);

// shorthand for JWT check
const jwt = passport.authenticate('jwt', { session: false });

// trip routes - GET is public, everything else requires a token
router.get('/trips',              tripsController.tripsList);
router.get('/trips/:tripCode',    tripsController.tripsFindCode);
router.post('/trips',             jwt, tripsController.tripsAddTrip);
router.put('/trips/:tripCode',    jwt, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', jwt, tripsController.tripsDeleteTrip);

module.exports = router;