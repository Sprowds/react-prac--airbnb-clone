import React from "react";
import classes from "./style.module.scss";
import starIcon from "./star.svg";

const Card = () => {
  return (
    <article className={classes.card}>
      <img
        src="/img/card-images/1.jpg"
        srcset="/img/card-images/1@2x.jpg 2x"
        alt="Card image"
        className={classes.image}
      />
      <div className={classes.descWrapper}>
        <div className={classes.titleWrapper}>
          <h3 className={classes.title}>Title</h3>
          <div className={classes.rating}>
            <img src={starIcon} alt="Star icon" />
            5.0
          </div>
        </div>

        <p className={classes.desc}>Description</p>

        <p className={classes.date}>Date</p>

        <p className={classes.price}>
          <strong>$388</strong> night
        </p>
      </div>
    </article>
  );
};

export default Card;
