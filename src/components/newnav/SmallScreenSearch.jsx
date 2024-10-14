import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SmallScreenSearch.module.css";

const SmallScreenSearch = ({ searchTerm, handleSearchChange, filteredSuggestions, handleSuggestionClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    // Add or remove the blur class when the popup is opened or closed
    if (isPopupOpen) {
      document.body.classList.add(styles.blur);
    } else {
      document.body.classList.remove(styles.blur);
    }
    // Clean up on component unmount
    return () => {
      document.body.classList.remove(styles.blur);
    };
  }, [isPopupOpen]);

  return (
    <>
      <SearchIcon className={styles.searchIcon} onClick={handlePopupToggle} />
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <CloseIcon className={styles.closeIcon} onClick={handlePopupToggle} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {filteredSuggestions.length > 0 && (
              <ul className={styles.suggestionsList}>
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={styles.suggestionItem}
                    onClick={() => {
                      handleSuggestionClick(suggestion);
                      handlePopupToggle(); // Close popup on suggestion click
                    }}
                  >
                    {suggestion.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SmallScreenSearch;
