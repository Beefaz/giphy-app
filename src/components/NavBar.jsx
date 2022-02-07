import React, {useEffect} from "react";
import logo from "../images/svg/TESTHY.svg"
import info from "../images/svg/info.svg"
import {useDispatch} from "react-redux";
import {shuffleGifs} from "../redux/slices/gifsSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.code === 'Space')
        e.preventDefault();
        dispatch(shuffleGifs());
    }
  }, [dispatch])

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
        onClick={() => dispatch(shuffleGifs())}
      >
        <span>
          Click here
        </span>
      </button>
    </div>
  </nav>
};
export default NavBar;
