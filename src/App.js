import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {sortByDateParam} from "./helpers/sort-by-date-param";
import {filterObjectProperties} from "./helpers/filter-object-properties";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import './styles/index.scss';
import {setGifs} from "./redux/slices/gifsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGifs = async () => {
      await fetch('https://api.giphy.com/v1/gifs/trending?api_key=f5hp3qYikfuNpEWmJfYECuJ5EmGMK7dZ&limit=12&rating=g')
        .then((response) => response.json())
        .then((response) => {
          const cleanedGifs = filterObjectProperties(
            response.data,
            ['id', 'images', 'import_datetime']
          );
          const sortedGifs = sortByDateParam(cleanedGifs, 'import_datetime');
          dispatch(setGifs(sortedGifs));
        })
        .catch((error) => {
          console.log(error);
        })
    };
    fetchGifs();
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
