import './App.css';
import {useEffect} from "react";

function App() {

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=f5hp3qYikfuNpEWmJfYECuJ5EmGMK7dZ&limit=25&rating=g')
      .then(response => response.json())
      .then(response => console.dir(response.data));
  });
  return (
    <div className="App">
      <h1>belekas</h1>
    </div>
  );
}

export default App;
