import React, { useState, useEffect } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Input } from "@mui/material";
import { Login as LoginIcon, PersonAdd as SignUpIcon } from "@mui/icons-material";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1160);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1160);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDropdownToggle = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleCategoryDropdownToggle = () => {
        setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsCategoryDropdownVisible(false);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                            <p>{selectedCategory}</p>
                            <ArrowDown className={styles.arrowdownLogo} />
                        </button>
                        {isCategoryDropdownVisible && (
                            <div className={styles.categoryDropdownModal}>
                                <div className={styles.categoryDropdownItem} onClick={() => handleCategorySelect("Express")}>
                                    <p>Express</p>
                                </div>
                                <div className={styles.categoryDropdownItem} onClick={() => handleCategorySelect("Gold")}>
                                    <p>Gold</p>
                                </div>
                                <div className={styles.categoryDropdownItem} onClick={() => handleCategorySelect("Platinum")}>
                                    <p>Platinum</p>
                                </div>
                                <div className={styles.categoryDropdownItem} onClick={() => handleCategorySelect("All")}>
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
                    {isProfileMenuOpen && (
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
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMobileMenuToggle}
                        className={styles.hamburgerIcon}
                    >
                        <MenuIcon style={{ color: '#0096ff' }}/>
                    </IconButton>
                )}
            </div>
            {!isMobile && (
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
                        to="/partner-with-us"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                    >
                        <div className={styles.navItemContainer}>
                            <Franchises className={styles.navLogo} />
                            <p className={styles.navText}>Partner With Us</p>
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
            )}
            {isMobile && isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Home className={styles.navLogo} />
                        <p className={styles.navText}>Home</p>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <About className={styles.navLogo} />
                        <p className={styles.navText}>About Us</p>
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Blog className={styles.navLogo} />
                        <p className={styles.navText}>Blog</p>
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <ContactUs className={styles.navLogo} />
                        <p className={styles.navText}>Contact Us</p>
                    </NavLink>
                    <NavLink
                        to="/franchises"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Franchises className={styles.navLogo} />
                        <p className={styles.navText}>Partner With Us</p>
                    </NavLink>
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) =>
                            isActive ? `${styles.navItemContainer} ${styles.activeNavLink}` : `${styles.navItemContainer} ${styles.inactiveNavLink}`
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <WishList className={styles.navLogo} />
                        <p className={styles.navText}>WishLists</p>
                    </NavLink>
                </div>
            )}
        </div>
    );
}
