import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BlogIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FranchizerzLogo from "../../assets/logo_1.svg";
import FranchizerzTitle from "../../assets/logo.svg";

// Import your search components
import LargeScreenSearch from "./LargeScreenSearch";
import SmallScreenSearch from "./SmallScreenSearch";

import styles from "./newnav.module.css";

const suggestions = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Services", path: "/services" },
  { label: "Franchises", path: "/franchises" },
];

const Newnav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.label);
    setFilteredSuggestions([]);
    navigate(suggestion.path);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search input visibility
  };

  return (
    <div
      className={`${styles.new_nav} ${menuOpen ? styles.active : ""} ${
        scrolled ? styles.nav_scrolled : ""
      }`}
    >
      <div className={styles.nav_data}>
        {/* Logo */}
        <div className={styles.navlogo}>
          <NavLink to="/" className={styles.logoContainer}>
            <FranchizerzLogo className={styles.logoImage} />
            <FranchizerzTitle className={styles.logoTitle} />
          </NavLink>
        </div>

        {/* Search bar - Based on screen size */}
        <div className={styles.searchWrapper}>
          <div className={styles.largeScreenSearch}>
            <LargeScreenSearch
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              filteredSuggestions={filteredSuggestions}
              handleSuggestionClick={handleSuggestionClick}
            />
          </div>
          <div className={styles.smallScreenSearch}>
            <SmallScreenSearch
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              filteredSuggestions={filteredSuggestions}
              handleSuggestionClick={handleSuggestionClick}
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className={`${styles.left_data} ${menuOpen ? styles.open : ""}`}>
          <NavLink to="/" className={styles.navItem}>
            <HomeIcon className={styles.navLogo} />
            <p className={styles.navText}>Home</p>
          </NavLink>
          <NavLink to="/about-us" className={styles.navItem}>
            <InfoIcon className={styles.navLogo} />
            <p className={styles.navText}>About Us</p>
          </NavLink>
          <NavLink to="/blog" className={styles.navItem}>
            <BlogIcon className={styles.navLogo} />
            <p className={styles.navText}>Blog</p>
          </NavLink>
          <NavLink to="/contact-us" className={styles.navItem}>
            <ContactMailIcon className={styles.navLogo} />
            <p className={styles.navText}>Contact Us</p>
          </NavLink>
        </div>

        {/* User Profile and Menu */}
        <div className={styles.right_data}>
          <Avatar className={styles.avatar} onClick={handleMenuClick} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className={styles.menu}
          >
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <LogoutIcon className={styles.logoutIcon} />
              Logout
            </MenuItem>
          </Menu>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon style={{ color: "#000" }} />
            ) : (
              <>
                <div></div>
                <div></div>
                <div></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newnav;
