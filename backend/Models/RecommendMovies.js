const DB = require("../database");
const axios = require("axios");
const AppError = require("../utils/appError");
const { set } = require("express/lib/application");

const getMovieDetails = async (movie_id, next) => {
    let req_url = `${process.env.TMDBURL}movie/${movie_id}?api_key=${process.env.API_KEY}`; 

    try{
        const response = await axios.get(req_url)
        const data = response.data;
        let movie = {};
        movie.name = data["title"];
        movie.poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data["poster_path"]}`;
        return movie;
    }
    catch(error) {
        console.log("ssdf");
        return "error"
    };
}

const getRecommendedMovieList = async (id, next) => {
    let sql = `SELECT * FROM recommended_movies WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        let responseObj;
        DB.all(sql, (err, rows) => {
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
        })
    });
};

exports.getRecommendedMovie = async (movie_id, next) => {
    // get recommendation list for movie from database
    const list = await getRecommendedMovieList(movie_id, next);
    const recommended_id = JSON.parse(list.data[0].recommended_id).slice(0,5);
    
    let recommended_movies = [];
    //fetch details of each recommended movie
    for(const id of recommended_id){
        let movie_detail = await getMovieDetails(id[0], next);
        if (movie_detail != "error") {
            recommended_movies.push(movie_detail);
        }
    };
    return recommended_movies;
}

function sortBySecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

exports.getRecommendedMovieOnHistory = async (history, next) => {
    //get recommendation list for each movie in history
    history = history.slice(1, 5);
    console.log(history);
    let recommended_movieid = [];
    for (const movie_id of history) {
        const list = await getRecommendedMovieList(movie_id, next);
        const recommended_id = JSON.parse(list.data[0].recommended_id);
        recommended_movieid=recommended_movieid.concat(recommended_id);
    };
    
    let recommended_movies = [];

    if (recommended_movieid.length > 0) {
        recommended_movieid.sort(sortBySecondColumn);

        // fetch details of each recommended movie
        let movie_id = new Set();
        for (const id of recommended_movieid) {
            if (!movie_id.has(id[0])) {
                let movie_detail = await getMovieDetails(id[0], next);
                if (movie_detail != "error") {
                    recommended_movies.push(movie_detail);
                }
                movie_id.add(id[0]);
                if (movie_id.size > 4) break;
            }
        };  
    }    

    return recommended_movies;
}