import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import './styles/index.scss';
import {fetchGifs} from "./redux/slices/gifsSlice";

function App() {
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.gifsStore.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchGifs())
    }
  }, [postStatus, dispatch])

  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
