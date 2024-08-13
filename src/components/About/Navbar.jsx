import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Judix</div>
      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <div className={styles.leftLinks}>
          <Link to="/" className={styles.link}>Product</Link>
          <Link to="/pricing" className={styles.link}>Pricing</Link>
          <Link to="/customer" className={styles.link}>Customer</Link>
          <Link to="/talk-to-lawyer" className={`${styles.link} ${styles.talkToLawyer}`}>Talk to Lawyer/CA</Link>
        </div>
        <div className={styles.rightLinks}>
          <Link to="/login" className={styles.link}>Login/Signup</Link>
          <Link to="/lawyers-ca" className={`${styles.link} ${styles.lawyersCA}`}>Lawyers/CA Click Here</Link>
        </div>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
