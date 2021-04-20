const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  checkAuth,
  logout,
} = require('../controllers/users.auth.controller');
const passportJWT = require('../middlewares/auth/passportJWT');
const {
  signupErrorHandler,
} = require('../middlewares/errorHandler/authErrorHandler');

router.post('/login', login);
router.post('/signup', signupErrorHandler, signup);
router.get('/check-auth', passportJWT, checkAuth);
router.get('/logout', passportJWT, logout);

module.exports = router;
