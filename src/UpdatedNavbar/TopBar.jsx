import React from "react";
import { NavLink } from "react-router-dom";
import FranchizerzLogo from "../assets/logo_1.svg";
import FranchizerzTitle from "../assets/logo.svg";
import ArrowDown from "../assets/arrowdown.svg";
import Profile from "../assets/profile.svg";
import Search from "../assets/search.svg";
import { Input } from "@mui/material";
import styles from "./TopBar.module.css";

export default function TopBar({
  isMobile,
  handleDropdownToggle,
  handleSearch,
  handleCategoryDropdownToggle,
  selectedCategory,
  isProfileMenuOpen,
  isCategoryDropdownVisible,
  handleCategorySelect,
  searchQuery,
}) {
  return (
    <div className={styles.topBar}>
      <div className={styles.logoTitle}>
        <div className={styles.logo}>
          <img src={FranchizerzLogo} alt="Franchizerz Logo" />
        </div>
        <div className={styles.title}>
          <img src={FranchizerzTitle} alt="Franchizerz Title" />
        </div>
      </div>
      <div className={styles.searchBar}>
        <div
          className={styles.searchCategory}
          onClick={handleCategoryDropdownToggle}
        >
          <button className={styles.categoryBtn}>
            <p>{selectedCategory}</p>
            <ArrowDown className={styles.arrowdownLogo} />
          </button>
          {isCategoryDropdownVisible && (
            <div className={styles.categoryDropdownModal}>
              {["Express", "Gold", "Platinum", "All"].map((category) => (
                <div
                  key={category}
                  className={styles.categoryDropdownItem}
                  onClick={() => handleCategorySelect(category)}
                >
                  <p>{category}</p>
                </div>
              ))}
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
              Sign In
            </NavLink>
            <NavLink to="/sign-up" className={styles.dropdownLink}>
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
