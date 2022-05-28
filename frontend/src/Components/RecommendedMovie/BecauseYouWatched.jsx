import React, { useEffect, useState } from "react";

import styles from "./BecauseYouWatched.module.css";
import { getRecommendedMovie } from "../../API/RecommendedMovieAPI";

const BecauseYouWatched = ({movie}) => {
    const [recommendedMovie, setRecommendedMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        let mounted = true;
        getRecommendedMovie(movie)
        .then((response) => {
            console.log(response.data);
            if (mounted) {
                setRecommendedMovie(response.data.recommendedMovie);
                setIsLoading(false);
            }
        });
        return () => mounted=false;
    },[movie])

    return (
        <section className={styles.recommendedMovie_container}>
            {isLoading && <div>Loading...</div>}
            {   
                !isLoading && 
                recommendedMovie.map((movie, idx) => {
                    return (
                        <div key={idx}>
                            <img src={movie.poster} alt={`${movie.title} poster`} />
                            <div><p>{movie.name}</p></div>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default React.memo(BecauseYouWatched);