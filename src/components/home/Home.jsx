import React from "react";
import styles from "./home.module.css";

function Home() {
    const handleProjectClick = (url) => {
        window.open("https://github.com/kri-tika-singh", "_blank");
      };
    return (
        <div id="home" className={styles.homeContainer}>
            <h1 className={styles.heading}>HEY, I'M KRITIKA SINGH</h1>
            <p className={styles.description}>
                A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
            </p>
            <button onClick={handleProjectClick} className={styles.button}>PROJECTS</button>
        </div>
    );
}

export default Home;
