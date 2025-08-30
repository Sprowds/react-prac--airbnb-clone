import React from "react";
import "./style.scss";

const Account = () => {
  return (
    <button className="account">
      <div className="account__nav-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="account__avatar">
        <img src="/img/user-avatar.png" alt="Avatar of user" />
      </div>
    </button>
  );
};

export default Account;
