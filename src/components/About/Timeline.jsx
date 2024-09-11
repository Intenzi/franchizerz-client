import React from 'react';
import styles from './Timeline.module.css';

const Timeline = () => {
  return (
    <div>
      <section className={styles.timelineContainer}>
        <h2 className={styles.sectionHeading}>What We Offer</h2>
        <div className={styles.timeline}>
          <ul>
            <li>
              <div className={styles.timelineContent}>
                <h1>Comprehensive Franchise Listings</h1>
                <p>We provide an extensive database of franchise opportunities across various industries, complete with detailed profiles and essential information.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Fair Comparison Tools</h1>
                <p>Our platform offers innovative tools for side-by-side comparison of multiple franchise opportunities, highlighting key metrics and user reviews.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Lead Generation for Brands</h1>
                <p>We connect registered brands with serious and qualified investors, enhancing their growth prospects through targeted outreach and high-quality leads.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Educational Resources</h1>
                <p>Our knowledge hub is packed with articles, guides, and webinars to educate and empower users about the franchising process.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Expert Consultation</h1>
                <p>Personalized advice and consultation services are available to guide investors through every step of their franchising journey.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <h1>Community Building</h1>
                <p>We foster a supportive community for franchise enthusiasts, encouraging networking, knowledge sharing, and continuous support.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
