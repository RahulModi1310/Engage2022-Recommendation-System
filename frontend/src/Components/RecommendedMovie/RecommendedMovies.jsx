import React, { useState } from "react";
import EditHistoryModal from "./EditHistoryModal";

import EditHistory from "../Assets/pencil-square.svg";
import styles from "./RecommendedMovies.module.css";
import BecauseYouWatched from "./BecauseYouWatched";
import RecommendOnHistory from "./RecommendOnHistory";

const RecommendedMovies = () => {
    const inital_history = [
        { id: 5, movie_id: 559, title: "Spider-Man 3" },
        { id: 7, movie_id: 99861, title: "Avengers: Age of Ultron" },
        { id: 16, movie_id: 24428, title: "The Avengers"}
    ]

    const [history, setHistory] = useState(
        {
            history_id: [5,7,16],
            history_detail: inital_history,
        }
    );
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const onClickEditHandler = () => {
        setIsModalOpen((prevState)=> !prevState)
    }

    const editHistoryHandler = (newHistory) => {
        setHistory(newHistory);
    };

    return (
        <section id="Demo" className={styles.recommendedMovie_container}>
            {
                isModalOpen &&
                <EditHistoryModal
                    history={history.history_id}
                    closeModalHandler={onClickEditHandler}
                    editHistoryHandler={editHistoryHandler}>
                </EditHistoryModal>
            }
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>History</h2>
                    <img src={EditHistory} onClick={onClickEditHandler} alt="edit history" />
                </div>
                <div className={styles.history}>
                    {
                        history.history_detail.map((movie,idx) => {
                            return <p key={idx}>{movie.title}</p>
                        })
                    }
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>Because you watched {history.history_detail[0].title}</h2>
                </div>
                <BecauseYouWatched movie={history.history_detail[0]}/>
            </div>

             <div className={styles.card}>
                <div className={styles.header}>
                    <h2>Recommended for you</h2>
                </div>
                <RecommendOnHistory history={history.history_detail} />
            </div>

        </section>
    );
}

export default RecommendedMovies; 