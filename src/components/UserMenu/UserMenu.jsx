import React from "react";
import "./style.scss";
import Link from "../Link/Link";
import globeIcon from "./globe.svg";
import Account from "../Account/Account";

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
        <Account />
      </div>
    </div>
  );
};

export default UserMenu;
