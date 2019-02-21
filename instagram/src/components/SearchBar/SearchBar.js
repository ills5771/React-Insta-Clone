import React from "react";
import styled from "styled-components";

import "./SearchBar.css";

const LogoDiv = styled.div`
  display: flex;
`;
const LineDiv = styled.div`
  height: 35px;
  border-left: 1px solid black;
  margin: 0 16px;
`;
const BrandLogo = styled.img`
  width: 120px;
  height: 40px;
`;

const SearchBar = props => {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <LogoDiv>
          <span className="logo-img">
            <i className="fab fa-instagram fa-2x" />
          </span>
          <LineDiv />
          <span>
            <BrandLogo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt="cursive-logo"
            />
          </span>
        </LogoDiv>
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
