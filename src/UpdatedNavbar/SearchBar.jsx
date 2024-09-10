import React from "react";
import { Input } from "@mui/material";
import ArrowDown from "../assets/arrowdown.svg";
import Search from "../assets/search.svg";
import styles from "./NavBar.module.css";

const SearchBar = ({ searchQuery, handleSearch, handleCategoryDropdownToggle, handleCategorySelect, selectedCategory, isCategoryDropdownVisible }) => (
    <div className={styles.searchBar}>
        <div className={styles.searchCategory} onClick={handleCategoryDropdownToggle}>
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
);

export default SearchBar;
