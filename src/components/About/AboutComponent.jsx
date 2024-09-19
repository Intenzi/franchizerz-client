import React from 'react';
import styles from './AboutComponent.module.css';
import FranchizerzLogo from "../../assets/logo_1.svg"

const AboutComponent = () => {
    return (
        <section className={styles.about}>
            <h1>About Us</h1>
            <p style={{ fontWeight: 'bold' }}>
            Welcome to Franchizerz...
            </p>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutImg}>
                <img src="/logoFranchizerz.png" alt="Franchizerz Logo" />
                </div>
                <div>
                    <p>At Franchizerz, we are dedicated to revolutionizing the way potential investors explore and compare franchise opportunities. Our mission is to provide a transparent, trustworthy, and comprehensive platform that connects aspiring franchisees with reputable brands, ensuring a seamless and informed decision-making process.</p>
                    <button>Read More...</button>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
