import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module
import HomeIcon from "@mui/icons-material/HomeOutlined";
import BookIcon from "@mui/icons-material/BookOutlined";
import CallIcon from "@mui/icons-material/CallOutlined";
import HandshakeIcon from "@mui/icons-material/HandshakeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src={logo} className={styles.logoImg} alt='logo' /> */}
        <h1>Franchizerz</h1>
        <h4>Your Own Partner</h4>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">
            <HomeIcon /> Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blogs">
            <BookIcon />
            Blogs
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact-us">
            <CallIcon />
            Contact Us
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/partners">
            <HandshakeIcon />
            Partners
          </Link>
        </li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon />
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/login">
            <LoginOutlinedIcon />
            Log In
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/wishlist">
            <FavoriteBorderOutlinedIcon />
            WishList
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
