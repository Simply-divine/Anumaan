const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  checkAuth,
} = require('../controllers/users.auth.controller');

router.post('/login', login);
router.post('/signup', signup);
router.get('/check-auth', checkAuth);

module.exports = router;
