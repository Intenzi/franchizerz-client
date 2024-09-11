import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Input } from "@mui/material";
import { Login as LoginIcon, PersonAdd as SignUpIcon, Menu as MenuIcon } from "@mui/icons-material";
import styles from "./NavBar.module.css";
import LogoTitle from "./LogoTitle";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1160);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1160);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
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
                <LogoTitle />
                <SearchBar
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                    handleCategoryDropdownToggle={handleCategoryDropdownToggle}
                    handleCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                    isCategoryDropdownVisible={isCategoryDropdownVisible}
                />
                <ProfileMenu />
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMobileMenuToggle}
                        className={styles.hamburgerIcon}
                    >
                        <MenuIcon style={{ color: '#0096ff' }} />
                    </IconButton>
                )}
            </div>
            {!isMobile && <NavLinks />}
            {isMobile && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}
        </div>
    );
}
