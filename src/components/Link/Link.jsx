import React, { Children } from "react";
import styles from "./style.module.scss";

const Link = ({ children, style, icon }) => {
  return (
    <a
      href="#"
      className={
        styles.link + " " + (style === "light" ? styles.linkLight : undefined)
      }
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </a>
  );
};

export default Link;
