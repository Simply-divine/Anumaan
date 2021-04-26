const express = require('express');
const {
  getAllMovies,
  changeMovie,
} = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', getAllMovies);
router.get('/change', changeMovie);

module.exports = router;
