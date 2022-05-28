const DB = require("../database");
const AppError = require("../utils/appError");

exports.getMovies = (next) => {
    let sql = `SELECT * FROM movies`;

    return new Promise((resolve, reject) => {
        let responseObj;

        /* Return all results of query */
        DB.all(sql, (err, rows) => {
            
            /* If there's an error, terminate app */
            if (err) {
                throw next(new AppError("Failed to fetch data from database", 400));
            }
            else {
                responseObj = {
                    statement: this,
                    data:rows,
                };
                resolve(responseObj);
            }
        });
    });
};