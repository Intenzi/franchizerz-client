import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {/* <div className={styles.horizontalLine}></div> */}
        <h1 className={styles.title}>
          Yours Startup's legal partner. Simplified, transparent, automated. 
          <span className={styles.orangeYellow}> From Start to Scale.</span>
        </h1>
        <p className={styles.description}>
          The only end-to-end platform offering integrated solutions that combine human intelligence and technology to automate all your legal and taxation complexities and provide you with peace of mind to focus on your startup.
        </p>
        <button className={styles.ctaButton}>Book a Demo</button>
        <div className={styles.trustedByContainer}>
          {/* <div className={styles.horizontalLine}></div> */}
          <p className={styles.trustedBy}>
            Trusted By Startups <span className={styles.orangeYellow}>Like Yours</span>
          </p>
          {/* <div className={styles.horizontalLine}></div> */}
        </div>
        <div className={styles.logos}>
          <img src="logo1.png" alt="Company 1" className={styles.logo} />
          <img src="logo2.png" alt="Company 2" className={styles.logo} />
          <img src="logo3.png" alt="Company 3" className={styles.logo} />
          <img src="logo4.png" alt="Company 4" className={styles.logo} />
          <img src="logo5.png" alt="Company 5" className={styles.logo} />
          <img src="logo6.png" alt="Company 6" className={styles.logo} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
