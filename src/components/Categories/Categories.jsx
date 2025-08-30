import React from "react";
import "./style.scss";
import FilterBtn from "../FilterBtn/FilterBtn";
import CategoryList from "../CategoryList/CategoryList";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__row">
          <div className="categories__list">
            <CategoryList />
          </div>
          <div className="categories__filter">
            <FilterBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
