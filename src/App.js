import { useState, useEffect } from "react";
import "./App.css";

const API =
  "https://api.giphy.com/v1/gifs/search?api_key=hD3H95AQ2lW0CqQUDQayS78jDExfrhT8&q=pokemon&limit=10&offset=0&rating=g&lang=en";

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((result) => {
        const { data } = result;
        if (Array.isArray(data)) {
          const gifs = data.map((image) => image.images.downsized_medium.url);
          setGifs(gifs);
        }
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif) => (
          <img src={gif} alt="Gif" />
        ))}
      </section>
    </div>
  );
};

export default App;
