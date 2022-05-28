const express = require('express');
const movieController = require('../Controller/movieController')

const router = express.Router();

router.get('/list', movieController.MovieList)

module.exports = router;