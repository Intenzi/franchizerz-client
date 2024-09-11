import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.values} id="values">
      <div className={styles.tit}>
        <h1>Our Values</h1>
      </div>
      <div className={styles.section}>
      <div className={styles.card}>
          <h2>Support and Assistance</h2>
          <p>Our dedicated support team, expert consultations, and comprehensive resources are designed to guide and assist users throughout their franchising experience.</p>
          <button className={styles.button}>Read More...</button>
        </div>
        <div className={styles.card}>
          <h2>Innovation and Improvement</h2>
          <p>We continually update our platform with advanced tools and data-driven insights to stay ahead of franchising trends and best practices.</p>
          <button className={styles.button}>Read More...</button>
        </div>
        <div className={styles.card}>
          <h2>Support and Assistance</h2>
          <p>Our dedicated support team, expert consultations, and comprehensive resources are designed to guide and assist users throughout their franchising experience.</p>
          <button className={styles.button}>Read More...</button>
        </div>
      </div>
    </div>
  );
};


export default Services;
