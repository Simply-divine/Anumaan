const express = require('express');
const {
  getCurrentUser,
  allUsers,
  addScore,
} = require('../controllers/users.controller');
const router = express.Router();

router.get('/', allUsers);
router.get('/user', getCurrentUser);
router.post('/user/scores', addScore);

module.exports = router;
