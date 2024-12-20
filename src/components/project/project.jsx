import React from "react";
import styles from "./project.module.css";
import image from "../assets/tic-tac-toe.png"

function Projects() {
    return (
        <section id="project"className={styles.ProjectSection}>
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.description}>
            Here are some personal projects I’ve worked on, showcasing my early steps and creativity as I begin my journey in Computer Science.
            </div>
            <div className={styles.container}>
                <div className={styles.projectLeft}>
                <a href="https://github.com/kri-tika-singh/tic-tac-toe-react" target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="Project Screenshot" className={styles.projectImage} />
                </a>
                </div>
                <div className={styles.projectRight}>
                    <h2 className={styles.projectTitle}>Tic-Tac-Toe</h2>
                    <p className={styles.projectDescription}>
                    a simple Tic-Tac-Toe game built using React. It is designed as a beginner-friendly project to help learn and practice essential React concepts. The project provides a hands-on way to understand React basics while creating an interactive and fun game. Perfect for beginners exploring front-end development with React!
                    </p>

                </div>
            </div>
        </section>
    );
}

export default Projects;
