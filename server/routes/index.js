const express = require('express');

const users = require('./users');
const usersAuth = require('./users.auth');

const passportJWT = require('../middlewares/auth');
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

module.exports = router;
