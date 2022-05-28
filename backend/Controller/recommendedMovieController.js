const RecommendMovies = require('../Models/RecommendMovies');
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');

exports.RecommendedMovies = catchAsync(async (req, res, next) => {
    try {
        let movie = JSON.parse(req.query.movie);
        const recommendedMovie = await RecommendMovies.getRecommendedMovie(movie.movie_id, next);
        res.status(200).json({
            status: "success",
            data: {
                recommendedMovie,
            },
        });
    }
    catch (err) {
        console.log(err);
        next(new AppError(err, 400));
    }
});

exports.RecommendedMoviesOnHistory = catchAsync(async (req, res, next) => {
    const history = JSON.parse(req.query.history);
    const recommendedMovie = await RecommendMovies.getRecommendedMovieOnHistory(history.movieid,next);
    res.status(200).json({
        status: "success",
        data: {
            recommendedMovie,
        }
    })
})
