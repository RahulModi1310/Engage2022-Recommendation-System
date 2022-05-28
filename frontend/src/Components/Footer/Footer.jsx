import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div id="Contact" className={styles.footer_container}>
            <h2>Contact Us</h2>
            <p>rahulkd2508@gmail.com || +91-6353XXXXXX</p>
            <form className={styles.footer_form}>
                <input
                    placeholder="Email" type="email"
                    required>
                </input>
                <textarea
                    placeholder="Query" type="textbox"
                    rows="8"
                    required>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Footer; 