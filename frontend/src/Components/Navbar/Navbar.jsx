import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const [navBGColor, setnavBGColor] = useState(false); 

    useEffect(() => {
        if (window.pageYOffset >= 60) {
            setnavBGColor(true);
        }
        else {
            setnavBGColor(false);  
        }

        window.onscroll = () => {
            if (window.pageYOffset >= 70) {
                setnavBGColor(true);
            }
            else {
                setnavBGColor(false);  
            }
        };
    })

    return (
        <nav className={`${styles.navbar} ${(navBGColor ? styles.activeBG : "")}`}>
            <ul>
                <li className={styles.nav_links}><a href="#Home">Home</a></li>
                <li className={styles.nav_links}><a href="/">Feature</a></li>
                <li className={styles.nav_links}><a href="#Demo">Demo</a></li>
                <li className={styles.nav_links}><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar; 