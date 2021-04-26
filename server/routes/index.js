const express = require('express');

const users = require('./users');
const usersAuth = require('./users.auth');
const movies = require('./movies');

const passportJWT = require('../middlewares/auth/passportJWT');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// user auth routes
router.use('/users/auth', usersAuth);

// user routes
router.use('/users', passportJWT, users);

// movie routes
router.use('/movies', movies);
module.exports = router;
