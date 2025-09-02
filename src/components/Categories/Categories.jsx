import React from "react";
import "./style.scss";
import FilterBtn from "../FilterBtn/FilterBtn";
import CategoryItem from "../CategoryItem/CategoryItem";
import categoriesData from "./../../data/categories.json";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__row">
          <div className="categories__list">
            {categoriesData.map((category) => {
              return <CategoryItem category={category} />;
            })}
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
