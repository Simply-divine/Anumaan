const express = require('express');

const emojis = require('./emojis');
const users = require('./users');

const passportJWT = require('../middlewares/auth');
const router = express.Router();
const { signup, login } = require('./users/auth');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// public routes
router.use('/emojis', emojis);
router.use('/signup', signup);
router.use('/login', login);

// private route
router.use('/users', passportJWT, users);

module.exports = router;
