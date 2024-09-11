import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3>Contact Us</h3>
          <p>Email: Info@example.com</p>
          <p>Phone: +121 56556 565556</p>
          <p>Address: Your Address 123 street</p>
        </div>
        <div className={styles.footerContent}>
          <h3>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <h3>Follow Us</h3>
          <ul className={styles.socialIcons}>
            <li><a href="/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Franchizerz. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
