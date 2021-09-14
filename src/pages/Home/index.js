import { useState } from "react";
import { Link, useLocation } from "wouter";

import styles from "./home.module.css";

const POPULAR_GIFS = ["pizza", "barcelona", "pokemon"];

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <section className={styles.home}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleChange}
          value={keyword}
          placeholder="Search for a gif"
          type="text"
        />
        <button>Search</button>
      </form>

      <h1>🔥 Trending GIFs</h1>

      <ul className={styles.list}>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs of {popularGif}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
