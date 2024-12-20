import React from "react";
import styles from "./sidebar.module.css";
import linkedinIcon from "../assets/icons8-github-48.png"; 
import twitterIcon from "../assets/icons8-twitter-50.png";
import githubIcon from "../assets/icons8-linkedin-50.png";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <a href="https://www.linkedin.com/in/kritika-singh99/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/kriti_kaaa" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://github.com/kri-tika-singh" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
            </a>
        </div>
    );
}

export default Sidebar;
