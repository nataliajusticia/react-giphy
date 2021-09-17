import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

import useGifs from "../../hooks/useGifs";

import styles from "./home.module.css";

const POPULAR_GIFS = ["pizza", "barcelona", "pokemon", "spain", "love"];

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  if (loading) {
    return (
      <section className="loading">
        <span>Loading ...</span>
      </section>
    );
  }

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

      <h2>🔥 Trending GIFs</h2>

      <ul className={styles.list}>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>#{popularGif}</Link>
          </li>
        ))}
      </ul>

      <h2>🔎 Last Search</h2>

      <div className={`${styles.section} section`}>
        <ListOfGifs gifs={gifs} />
      </div>
    </section>
  );
};

export default HomePage;
