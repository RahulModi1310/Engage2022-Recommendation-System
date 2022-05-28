const Movies = require('../Models/Movies');
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');

exports.MovieList = catchAsync(async (req, res, next) => {
    try {
        const movielist = await Movies.getMovies(next);
        res.status(200).json({
            status: "success",
            data: {
                movielist: movielist.data,
            },
        });
    }
    catch (err) {
        new AppError(err, 400);
    }
});
