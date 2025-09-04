import React from "react";
import classes from "./style.module.scss";
import starIcon from "./star.svg";

const Card = ({ data }) => {
  return (
    <article className={classes.card}>
      <a href="#" className={classes.link}></a>
      <img
        src={data.image}
        srcSet={data.image2x}
        alt={data.title}
        className={classes.image}
      />
      <div className={classes.descWrapper}>
        <div className={classes.titleWrapper}>
          <h3 className={classes.title}>Title</h3>
          <div className={classes.rating}>
            <img src={starIcon} alt="Star icon" />
            {data.rating}
          </div>
        </div>

        <p className={classes.desc}>{data.desc}</p>

        <p className={classes.date}>{data.date}</p>

        <p className={classes.price}>
          <strong>${data.price}</strong> night
        </p>
      </div>
    </article>
  );
};

export default Card;
