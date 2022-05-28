import React, { useState } from "react";
import { Accordion, Icon } from 'semantic-ui-react'

import AboutRS_content from "./AboutRS_content";

import styles from "./AboutRS.module.css";

const AboutRS = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const ClickHandler = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIdx === index ? -1 : index;
        setActiveIdx(newIndex)
    }

    return (
        <div className={styles.aboutRS_container}>
            <Accordion fluid styled>
                {AboutRS_content.map((obj, idx) => {
                    return (
                        <div key={idx}>
                            <Accordion.Title
                                active={activeIdx === idx}
                                index={idx}
                                onClick={ClickHandler}
                            >
                                <h3><Icon name='dropdown' /> { obj.title }</h3>
                            </Accordion.Title>
                            <Accordion.Content active={activeIdx === idx}>
                                { obj.content }
                            </Accordion.Content>
                        </div>
                    )
                })}
            </Accordion>
        </div>
    );
}

export default AboutRS; 