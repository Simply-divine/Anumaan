const express = require('express');
const {
  getCurrentUser,
  setMaxScore,
  allUsers,
} = require('../controllers/users.controller');
const router = express.Router();

router.get('/', allUsers);
router.get('/me', getCurrentUser);
router.post('/score', setMaxScore);

module.exports = router;
