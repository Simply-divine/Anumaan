const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  checkAuth,
} = require('../controllers/users.auth.controller');
const {
  signupErrorHandler,
} = require('../middlewares/errorHandler/authErrorHandler');

router.post('/login', login);
router.post('/signup', signupErrorHandler, signup);
router.get('/check-auth', checkAuth);

module.exports = router;
