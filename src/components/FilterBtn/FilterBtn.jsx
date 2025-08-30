import React from "react";
import "./style.scss";
import filterIcon from "./filter-btn.svg";

const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <img src={filterIcon} alt="Filter Icon" />
      Filters
    </button>
  );
};

export default FilterBtn;
