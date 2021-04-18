const { Router } = require('express');
const getCurrentUser = require('../../controllers/user.controller');
const router = Router();

router.get('/me', getCurrentUser);

module.exports = router;
