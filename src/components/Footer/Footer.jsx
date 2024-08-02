// import React from 'react';
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
                    <p>IIPl Road</p>
                    <p>Ludhiana Punjab</p>
                    <p>PIN 22122, India</p>
                    <p className={styles.emailId}>saurabh@franchizerz.com</p>
                    <h4>+91132232242</h4>
                </div>
                <div className={styles.col}>
                    <h3>Links <div className={styles.underline}><span></span></div></h3>
                    {/* <ul className={styles.linkList}> */}
                    <p><a href="/">Home</a></p>
                    <p><a href="/">About Us</a></p>
                    <p><a href="/">Services</a></p>
                    <p><a href="/">Features</a></p>
                    <p><a href="/contact-us">Contact Us</a></p>
                    
                    {/* </ul> */}
                </div>
                <div className={styles.col}>
                    <h3>Newsletter <div className={styles.underline}><span></span></div></h3>
                    <form action="" className={styles.form}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        <input type="email" placeholder="Enter your email-id" required className={styles.input} />
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
