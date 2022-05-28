import React, {useEffect, useState} from "react";

import styles from "./RecommendOnHistory.module.css";

import { getRecommendedOnHistory } from "../../API/RecommendedMovieAPI";

const RecommendOnHistory = ({history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [recommendedForYou, setRecommendedForYou] = useState([]);

    useEffect(() => {
        let mounted = true;
        setIsLoading(true);
        getRecommendedOnHistory(history)
            .then((response) => {
                if (mounted) {
                    setRecommendedForYou(response.data.recommendedMovie);
                    setIsLoading(false);
                }
            });
        return () => mounted = false;
    },[history])

    return (
        <section className={styles.recommendedMovie_container}>
            {isLoading && <div>Loading...</div>}
            {   
                !isLoading && 
                recommendedForYou.map((movie, idx) => {
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

export default React.memo(RecommendOnHistory); 