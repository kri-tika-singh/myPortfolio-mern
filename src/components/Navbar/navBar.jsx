import React from "react";
import styles from "./navBar.module.css";
import image from "../assets/logo.jpg"

function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoSection}>
                <img
                    src={image} /* Replace with your logo URL */
                    alt="Profile"
                    className={styles.profileImage}
                />
                <span className={styles.brandName}>KRITIKA SINGH</span>
            </div>
            <div className={styles.links}>
                <a href="#home">HOME</a>
                {/* <div href="#about">ABOUT</div> */}
                <a href="#about">ABOUT</a>
                <a href="#project">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
    );
}

export default NavBar;
