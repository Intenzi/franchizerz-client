import React, { useState } from 'react';
import styles from './LegalAffairs.module.css';
import { FaLaptop } from 'react-icons/fa';

const LegalAffairs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    "Current processes are inefficient, resulting in wasted time and resources, as well as a lack of accountability.",
    "Our solution automates legal and taxation complexities, providing transparency and efficiency.",
    "Ensure compliance with legal standards and reduce the risk of errors with our streamlined processes.",
    "Benefit from expert advice and support, tailored to your business needs and objectives."
  ];

  // Function to handle index change
  const handleIndexChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.legalAffairs}>
      <h2 className={styles.title}>Managing legal affairs is complicated</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {cards.slice(activeIndex, activeIndex + 2).map((text, index) => (
            <div key={index} className={styles.card}>
              <FaLaptop className={styles.icon} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.indexContainer}>
        <span
          className={`${styles.index} ${activeIndex === 0 ? styles.activeIndex : ''}`}
          onClick={() => handleIndexChange(0)}
        />
        <span
          className={`${styles.index} ${activeIndex === 1 ? styles.activeIndex : ''}`}
          onClick={() => handleIndexChange(1)}
        />
      </div>
    </section>
  );
};

export default LegalAffairs;
