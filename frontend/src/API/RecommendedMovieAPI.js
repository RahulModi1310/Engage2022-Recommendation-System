import axios from "axios";

const req_url = "https://engage2022-rs-backend.herokuapp.com:4000/api/v1";


const getMovies = () => {
    return axios.get(req_url + "/movie/list").then((response) => {
        return response.data;
    }).catch((err) => {
        console.log(err);
        return [];
    });
}

const getRecommendedMovie = (movie) => {
    return axios.get(req_url + "/recommendmovies/recommended-movie", { params: { movie } })
        .then((response) => {
            return response.data;
        }).catch(() => []);
}


const getRecommendedOnHistory = (history) => {
    let movieid = [];
    history.forEach(movie => {
        movieid.push(movie.movie_id);
    });
    return axios.get(req_url + "/recommendmovies/recommend-on-history", { params: { history:{movieid} } })
        .then((response) => {
            return response.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
}

export {
    getMovies,
    getRecommendedMovie,
    getRecommendedOnHistory
}
