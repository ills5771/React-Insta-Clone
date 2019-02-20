import React from "react";
import { Link } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <div style={{ display: "flex" }} className="logo">
          <span className="logo-img">
            <i className="fab fa-instagram fa-2x" />
          </span>
          <div
            style={{
              height: "35px",
              borderLeft: "1px solid black",
              margin: "0 16px "
            }}
          />
          <span className="logo-name">
            <img
              style={{ width: "120px", height: "40px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt="cursive-logo"
            />
          </span>
        </div>
        <div className="search-input">
          <input
            onChange={props.filterSearch}
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "140px",
            opacity: "0.7"
          }}
          className="search-icons"
        >
          {/* <Link to="/login">logout</Link> */}

          <span>
            <i className="far fa-compass fa-lg" />
          </span>
          <span>
            <i className="far fa-heart fa-lg" />
          </span>
          <span>
            <i className="far fa-user fa-lg" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
