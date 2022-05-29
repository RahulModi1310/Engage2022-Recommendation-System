import React from "react";
import ML_Model from "../Assets/ML_Model.jpg";

const MLModel_styles = {
    width: "100%",
}

const AboutRS_content = [
    {
        id: 0,
        title: "What is Recommendation System ?",
        content: <p>A recommendation system is a subclass of Information filtering Systems that seeks to predict the rating or the preference a user might give to an item. In simple words, it is an algorithm that suggests relevant items to users. Eg: In the case of Netflix which movie to watch, In the case of e-commerce which product to buy, or In the case of kindle which book to read, etc.</p>,
    },
    {
        id: 1,
        title: "Comman Method Used",
        content:
            <>
                <h4>Content-base filtering</h4>
                <h4>Collaborative-base filltering</h4>
            </>,
    },
    {
        id: 2,
        title: "ML model Algorithm I used",
        content:
            <>
                <img src={ML_Model} style={MLModel_styles} alt="ML Model Flowchart" />
            </>
    },
];

export default AboutRS_content;