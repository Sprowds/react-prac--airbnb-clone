import React from "react";
import classes from "./style.module.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className={classes.categoryItem}>
      <img
        src={category.iconURL}
        alt={category.name}
        className={classes.categoryImg}
      />
      <p className={classes.categoryTitle}>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
