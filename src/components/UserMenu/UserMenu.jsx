import React from "react";
import "./style.scss";
import Link from "../Link/Link";
import globeIcon from "./globe.svg";
import userAvatar from "./user-avatar.png";

const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="user-menu__home">
        <Link>Airbnb your home</Link>
      </div>
      <div className="user-menu__local">
        <Link icon={globeIcon}></Link>
      </div>
      <div className="user-menu__user">
        <button className="user-menu__burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="user-menu__avatar">
          <img src={userAvatar} alt="Avatar of user" />
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
