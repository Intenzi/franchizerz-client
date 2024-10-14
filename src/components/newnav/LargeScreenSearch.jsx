import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./LargeScreenSearch.module.css";
//this is the code
const LargeScreenSearch = ({ searchTerm, handleSearchChange, filteredSuggestions, handleSuggestionClick }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles.iconContainer}>
        <SearchIcon className={styles.searchIcon} />
      </div>
      {filteredSuggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LargeScreenSearch;
