import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react'

import { getMovies } from "../../API/RecommendedMovieAPI";

import styles from "./EditHistoryModal.module.css";

const EditHistoryModal = ({ history, closeModalHandler, editHistoryHandler }) => {
    const [movieList, setMovieList] = useState([]);
    const [newHistory, setNewHistory] = useState([...history]);

    useEffect(() => { 
        let mounted = true;
        getMovies()
            .then((response) => {
                if (mounted && response.hasOwnProperty("data") && response.data.hasOwnProperty("movielist")) {
                    let movies = [];
                    response.data.movielist.forEach((obj, id) => {
                        let movie = {};
                        movie.key = id;
                        movie.text = obj.title;
                        movie.value = id;
                        movie.movie_id = obj.movie_id;
                        movies.push(movie);
                        return movie;
                    });
                    setMovieList(movies);
                }
            });
        return () => mounted = false;
    }, [])
    
    const OnSubmitHandler = (event) => {
        event.preventDefault();
        history.history_detail = [];
        newHistory.forEach((movie_idx) => {
            let movie = {};
            movie.title = movieList[movie_idx].text;
            movie.movie_id = movieList[movie_idx].movie_id;
            movie.id = movie_idx;
            history.history_detail.push(movie);
        })
        history.history_id = newHistory;
        editHistoryHandler(history);
        console.log(history);
        closeModalHandler();
    };
    
    const OnChangeHandler = (event, target) => {
        setNewHistory(target.value)
    }

    return (
        <div className={styles.bg_container}>
            <section className={styles.modal_container}>
                <h2>Edit History</h2>
                <div className={styles.input_history}>
                    <Form onSubmit={OnSubmitHandler}>
                        <Form.Dropdown
                            onChange={OnChangeHandler}
                            value={newHistory}
                            placeholder='Select Movies'
                            lable="History"
                            fluid
                            multiple
                            search
                            selection
                            required
                            options={movieList} />
                        <Button type="submit" className={styles.submit_button} color='green'>Submit</Button>
                    </Form>
                </div>
            </section>
        </div>
    );
}

export default React.memo(EditHistoryModal); 