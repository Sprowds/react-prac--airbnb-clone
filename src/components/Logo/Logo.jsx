import React from "react";
import "./style.scss";
import logo from "./logo.svg";

const Logo = () => {
  return (
    <a href="#">
      <img src={logo} alt="Logo of AirBNB" />
    </a>
  );
};

export default Logo;
