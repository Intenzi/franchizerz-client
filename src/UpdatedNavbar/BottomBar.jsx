import React from 'react';
import styles from './BottomBar.module.css';
import { FaHome, FaUserAlt, FaSearch } from 'react-icons/fa';

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div>
        <FaHome className={styles.bottomBarIcon} />
        <div className={styles.bottomBarLabel}>Home</div>
      </div>
      <div>
        <FaSearch className={styles.bottomBarIcon} />
        <div className={styles.bottomBarLabel}>Search</div>
      </div>
      <div>
        <FaUserAlt className={styles.bottomBarIcon} />
        <div className={styles.bottomBarLabel}>Profile</div>
      </div>
    </div>
  );
};

export default BottomBar;
