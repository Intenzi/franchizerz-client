import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a?</p>
                </div>
                <div className={styles.col}>
                    <h3>Office <div className={styles.underline}><span></span></div></h3>
                    <p>IIPl Road ,Ludhiana Punjab</p>
                    {/* <p>Ludhiana Punjab</p> */}
                    <p>PIN 22122, India</p>
                    <p className={styles.emailId}>franchizerz@gmail.com</p>
                    {/* <h4>+91132232242</h4> */}
                </div>
                <div className={styles.col}>
                    <h3>Quick Links <div className={styles.underline}><span></span></div></h3>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About Us</a></p>
                    <p><a href="/blogs">Blogs</a></p>
                </div>
                <div className={styles.col}>
                    <h3>Connect with Us <div className={styles.underline}><span></span></div></h3>
                    <p><a href="/contact-us">Contact Us</a></p>
                    <p><a href="mailto:franchizerz@gmail.com">franchizerz@gmail.com</a></p>
                </div>
                <div className={styles.col}>
                    <h3>Register Your Brand <div className={styles.underline}><span></span></div></h3>
                    <p>Mail us on <a href="mailto:franchizerz@gmail.com">franchizerz@gmail.com</a></p>
                </div>
                <div className={styles.col}>
                    <h3>Newsletter <div className={styles.underline}><span></span></div></h3>
                    <form action="" className={styles.form}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        <input type="email" placeholder="Enter email-id" required className={styles.input} />
                        <button type="submit" className={styles.button}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </form>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                        <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
            <p className={styles.copyright}>Franchizerz &copy; 2024 - All Rights Reserved </p>
        </footer>
    );
};

export default Footer;
