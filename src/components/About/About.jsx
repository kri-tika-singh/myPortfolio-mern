import React from "react";
import styles from "./about.module.css";

function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2 className={styles.title}>ABOUT ME</h2>
            <div className={styles.description}>
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h3>Get to know me!</h3>
                    <p>
                        I'm a <strong>Frontend Focused Web Developer</strong> building and managing the
                        Front-end of Websites and Web Applications that leads to the success of
                        the overall product. Check out some of my work in the <strong>Projects</strong> section.
                    </p>
                    <p>
                    I’m a <strong>Frontend-Focused Web Developer</strong> and a second-year engineering student at <strong>Chandigarh University</strong>, specializing in <strong>Computer Science and Engineering</strong>. I’m passionate about <strong>building and managing the front-end</strong> of websites and web applications to ensure the overall success of the product. With a keen interest in <strong>React</strong>, I focus on creating interactive and user-friendly interfaces. You can explore some of my work in the <strong>Projects</strong> section.
                    I also enjoy <strong>sharing knowledge</strong> about web development, particularly <strong>React and JavaScript</strong>, to help others in the developer community. Check out my posts on <strong>LinkedIn</strong>, where I share useful tips and insights related to web development and programming. 
                    As a budding engineer, I’m eager to learn and grow. I’m actively looking for <strong>job opportunities</strong> where I can contribute, gain hands-on experience, and enhance my skills further. If you have an opportunity that aligns with my expertise, don’t hesitate to reach out.
                    </p>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.right}>
                    <h3>My Skills</h3>
                    <div className={styles.skills}>
                        <span>C/C++</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Git</span>
                        <span>Github</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
