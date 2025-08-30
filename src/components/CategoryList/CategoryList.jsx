import React from "react";
import "./style.scss";
import Category from "../Category/Category";

const categoryList = [
  {
    name: "Amazing views",
    iconURL: "./icons/amazing-views.svg",
  },
  {
    name: "Lakefront",
    iconURL: "./icons/lakefront.svg",
  },
  {
    name: "Caves",
    iconURL: "./icons/caves.svg",
  },
  {
    name: "OMG!",
    iconURL: "./icons/omg.svg",
  },
  {
    name: "Earth homes",
    iconURL: "./icons/earth-homes.svg",
  },
  {
    name: "Treehouses",
    iconURL: "./icons/treehouses.svg",
  },
  {
    name: "Mansions",
    iconURL: "./icons/mansions.svg",
  },
  {
    name: "Cabins",
    iconURL: "./icons/cabins.svg",
  },
  {
    name: "Amazing pools",
    iconURL: "./icons/amazing-pools.svg",
  },
  {
    name: "Islands",
    iconURL: "./icons/islands.svg",
  },
  {
    name: "Beachfront",
    iconURL: "./icons/beachfront.svg",
  },
  {
    name: "Trending",
    iconURL: "./icons/trending.svg",
  },
];

const CategoryList = () => {
  return (
    <div>
      {categoryList.map((category) => {
        <Category category={category} />;
      })}
    </div>
  );
};

export default CategoryList;
