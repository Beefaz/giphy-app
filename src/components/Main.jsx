import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllGifs, lockGif, unlockGif} from "../redux/slices/gifsSlice";
import lock from "../images/svg/lock.svg"
import unlock from "../images/svg/unlock.svg"

const Main = () => {
  const dispatch = useDispatch();
  const gifs = useSelector(getAllGifs);

  const lockHandler = (item, index) => {
    item = {...item, position: index, locked: !item.locked};
    if (!item.locked) {
      return dispatch(unlockGif(item));
    }
    return dispatch(lockGif(item));
  }

  return <div className="main">
    <div className="content-container">
      {gifs.map((item, index) => (
        <div
          className={`gif-container ${item.locked ? 'locked' : 'unlocked'}`}
          key={`gif-item-${index}`}
          onClick={() => lockHandler(item, index)}
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
            src={item.images.downsized.url ?? item.images.original.url}
            alt=""
          />
        </div>
      ),)}
    </div>
  </div>
};

export default Main;
