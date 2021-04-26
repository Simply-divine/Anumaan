const express = require('express');
const {
  getCurrentUser,
  setMaxScore,
} = require('../controllers/users.controller');
const router = express.Router();

router.get('/me', getCurrentUser);
router.post('/score', setMaxScore);

module.exports = router;
