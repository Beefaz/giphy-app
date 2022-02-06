import React from "react";
import {useSelector} from "react-redux";
import {getAllGifs} from "../redux/slices/gifsSlice";
import lock from "../images/svg/lock.svg"
import unlock from "../images/svg/unlock.svg"

const Main = () => {
  const gifs = useSelector(getAllGifs);
  const doSomething = (e) => {
    e.target.isLocked = true;
  }

  return <div className="main">
    <div className="content-container">
      {gifs.map((item, index) => (
        <div
          className={`gif-container ${index === 1 ? 'locked' : 'unlocked'}`}
          key={`gif-item-${index}`}
          onClick={(e) => doSomething(e)}
        >
          <div className="lock-wrapper">
            <div className="lock">
              <img
                src={lock}
                alt=""
              />
              <span>
                Click to lock
              </span>
            </div>
            <div className="unlock">
              <img
                src={unlock}
                alt=""
              />
              <span>
                Click to unlock
              </span>
            </div>
          </div>
          <img
            className="gif"
            src={item.images.downsized.url}
            alt=""
          />
        </div>
      ),)}
    </div>
  </div>
};

export default Main;
