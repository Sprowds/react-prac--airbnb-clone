import React from "react";
import "./style.scss";
import searchIcon from "./search-icon.svg";
import Link from "../Link/Link";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        <div className="searchbar__btn">
          <Link>Anywhere</Link>
        </div>
        <div className="searchbar__btn">
          <Link>Any week</Link>
        </div>
        <div className="searchbar__btn">
          <Link style="light">Add guests</Link>
        </div>
      </div>
      <button className="searchbar__btn-search">
        <img src={searchIcon} alt="Search button" />
      </button>
    </div>
  );
};

export default SearchBar;
