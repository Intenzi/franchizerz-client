// src/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SearchResults.css';
import data from '../constant/TemplateData.json';

const SearchResults = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  
  const filteredData = data.filter((val) =>
    val.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for: {searchTerm}</h2>
      <div className="results">
        {filteredData.map((item) => (
          <div key={item.id} className="result-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
