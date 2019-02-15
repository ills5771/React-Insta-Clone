import React from "react";

const SearchBar = props => {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <div className="logo">
          <span className="logo-img">logo img</span>
          <span className="logo-name">Instagram</span>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-icons">
          <span>compass</span>
          <span>heart</span>
          <span>add user</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
