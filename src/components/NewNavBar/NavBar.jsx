import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../../assets/home.svg";
import FranchizerzTitle from "../../assets/logo.svg";
import FranchizerzLogo from "../../assets/logo_1.svg";
import About from "../../assets/AboutUs.svg";
import Blog from "../../assets/blog.svg";
import ArrowDown from "../../assets/arrowdown.svg";
import Profile from "../../assets/profile.svg";
import ContactUs from "../../assets/contactUs.svg";
import Franchises from "../../assets/franchises.svg";
import WishList from "../../assets/wishlist.svg";
import Search from "../../assets/search.svg";
import { Input } from "@mui/material";
import { Login as LoginIcon, PersonAdd as SignUpIcon } from "@mui/icons-material";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleDropdownToggle = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleCategoryDropdownToggle = () => {
        setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setIsDropdownVisible(false);
    };

    return (
        <div>
            <div className={styles.topBar}>
                <div className={styles.logoTitle}>
                    <div className={styles.logo}>
                        <FranchizerzLogo />
                    </div>
                    <div className={styles.title}>
                        <FranchizerzTitle />
                    </div>
                </div>
                <div className={styles.searchBar}>
                    <div className={styles.searchCategory} onClick={handleCategoryDropdownToggle}>
                        <button className={styles.categoryBtn}>
                            <p>All</p>
                            <ArrowDown className={styles.arrowdownLogo} />
                        </button>
                        {isCategoryDropdownVisible && (
                            <div className={styles.categoryDropdownModal}>
                                <div className={styles.categoryDropdownItem}>
                                    <p>Express</p>
                                </div>
                                <div className={styles.categoryDropdownItem}>
                                    <p>Gold</p>
                                </div>
                                <div className={styles.categoryDropdownItem}>
                                    <p>Platinum</p>
                                </div>
                                <div className={styles.categoryDropdownItem}>
                                    <p>All</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <Input
                        type="text"
                        placeholder="search..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <div className={styles.searchIconContainer}>
                        <Search className={styles.searchIcon} />
                    </div>
                </div>
                <div className={styles.profileContainer} onClick={handleDropdownToggle}>
                    <Profile />
                    <ArrowDown className={styles.arrowdownLogo} />
                    {isDropdownVisible && (
                        <div className={styles.dropdownModal}>
                            <NavLink to="/sign-in" className={styles.dropdownLink}>
                                <LoginIcon className={styles.dropdownIcon} />
                                Sign In
                            </NavLink>
                            <NavLink to="/sign-up" className={styles.dropdownLink}>
                                <SignUpIcon className={styles.dropdownIcon} />
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.bottomBar}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <Home className={styles.navLogo} />
                        <p className={styles.navText}>Home</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <About className={styles.navLogo} />
                        <p className={styles.navText}>About Us</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <Blog className={styles.navLogo} />
                        <p className={styles.navText}>Blog</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <ContactUs className={styles.navLogo} />
                        <p className={styles.navText}>Contact Us</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/franchises"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <Franchises className={styles.navLogo} />
                        <p className={styles.navText}>Franchises</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/wishlist"
                    className={({ isActive }) =>
                        isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                    }
                >
                    <div className={styles.navItemContainer}>
                        <WishList className={styles.navLogo} />
                        <p className={styles.navText}>WishLists</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
