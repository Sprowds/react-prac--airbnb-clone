import React, { Children } from "react";
import "./style.scss";

const Link = ({ children, style, icon }) => {
  return (
    <a href="#" className={`link ${style === "light" ? "link--light" : ""}`}>
      {icon && <img src={icon} alt="" />}
      {children}
    </a>
  );
};

export default Link;
