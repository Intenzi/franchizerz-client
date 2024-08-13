
import React, { useState } from "react";
import Logo from "../../assets/logo_1.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
    <nav className="navbar">
      <div className="logo">
         
         <Logo className="logo-img" alt="Franchizerz Logo"  />
        <div className="logo-text">
          <h1>Franchizerz</h1>
          <h4>Your Own Partner</h4>
        </div>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon /> Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <BookIcon /> Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <CallIcon /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <HandshakeIcon /> About-Us
            </Link>
          </li>
          <li>
            <Link to="/sign-in">
            <AccountCircleOutlinedIcon /> Log In
            </Link>
          </li>
          <li>
            <Link to="/">
              <FavoriteBorderOutlinedIcon /> WishList
            </Link>
          </li>
        </ul>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon />
      </div>
    </nav>
  );
};

export default Navbar;


