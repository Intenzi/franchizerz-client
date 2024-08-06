import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import BookIcon from "@mui/icons-material/BookOutlined";
import CallIcon from "@mui/icons-material/CallOutlined";
import HandshakeIcon from "@mui/icons-material/HandshakeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logoImg} alt="Franchizerz Logo" />
        <div className={styles.logoText}>
          <h1 className={styles.logoH1}>Franchizerz</h1>
          <h4 className={styles.logoH4}>Your Own Partner</h4>
        </div>
      </div>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksActive : ""}`}>
        <ul className={styles.navLinksUl}>
          <li className={styles.navLinksLi}>
            <Link to="/" className={styles.navLinksA}>
              <HomeIcon className={styles.navLinksSvg} /> Home
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link to="/blogs" className={styles.navLinksA}>
              <BookIcon className={styles.navLinksSvg} /> Blogs
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link to="/contact-us" className={styles.navLinksA}>
              <CallIcon className={styles.navLinksSvg} /> Contact Us
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link to="/partners" className={styles.navLinksA}>
              <HandshakeIcon className={styles.navLinksSvg} /> Partners
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link to="/login" className={styles.navLinksA}>
              <AccountCircleOutlinedIcon className={styles.navLinksSvg} /> Log In
            </Link>
          </li>
          <li className={styles.navLinksLi}>
            <Link to="/wishlist" className={styles.navLinksA}>
              <FavoriteBorderOutlinedIcon className={styles.navLinksSvg} /> WishList
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" className={styles.searchBoxInput} />
        <SearchOutlinedIcon className={styles.searchBoxSvg} />
      </div>
    </nav>
  );
};

export default Navbar;
