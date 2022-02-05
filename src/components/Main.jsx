import React from "react";
import {useSelector} from "react-redux";
import {getAllGifs} from "../redux/slices/gifsSlice";

const Main = (props) => {
  const gifs = useSelector(getAllGifs);
  console.dir(gifs);
  return <div className={'content-container'}>
    {gifs.map((item) => (
      <div style={{display:'flex'}}>
        <p>{item.id}</p>
        <p>{item.import_datetime}</p>
        <p>{item.slug}</p>
        <p>{item.id}</p>
        <p>{item.url}</p>
      </div>
    ),)}
  </div>
};

export default Main;
