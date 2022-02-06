import React from "react";
import logo from "../images/svg/TESTHY.svg"
import info from "../images/svg/info.svg"

const NavBar = () => {
  return <nav className="navbar">
    <div className="navbar-content--left">
      <a href="https://github.com/Beefaz/giphy-app">
        <img
          src={logo}
          alt=""
        />
      </a>
    </div>
    <div className="navbar-content--right">
      <img
        src={info}
        alt=""
      />
      <span>
        Press <u>spacebar</u> to shuffle or
      </span>
      <button
        className="shuffle-button"
        type="button"
      >
        <span>
          Click here
        </span>
      </button>
    </div>
  </nav>
};
export default NavBar;
