const express = require('express');
const movieController = require('../Controller/recommendedMovieController')

const router = express.Router();

router.get('/recommended-movie', movieController.RecommendedMovies);
router.get('/recommend-on-history', movieController.RecommendedMoviesOnHistory);

module.exports = router;