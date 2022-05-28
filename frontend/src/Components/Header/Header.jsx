import React from "react";

import styles from "./Header.module.css";

import SearchingImg from "../Assets/conifer-searching.png";

const Header = () => {
    return (
        <div id="Home" className={styles.header_container}>
            <div className={styles.inside_container}>
                <h1>Recommendation System</h1>
                <img src={SearchingImg} alt="Searching Illustration" />
            </div>
        </div>
    );
}

export default Header; 