import React, { useState } from "react";
import styles from '../SearchBar/SearchBar.module.css'
import data from "./constant/TemplateData.json";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((val) =>
        val.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setFilteredData([]);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.searchInput_Container}>
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <i className={`fa fa-search ${styles.searchIcon}`}></i>
      </div>
      {filteredData.length > 0 && (
        <div className={styles.suggestionsList}>
          {filteredData.map((val) => (
            <div
              key={val.id}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(val)}
            >
              <img src={val.image} alt={val.title} className={styles.suggestionImage} />
              {val.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
