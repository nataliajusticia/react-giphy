import { Link } from "wouter";

const POPULAR_GIFS = ["pizza", "barcelona", "pokemon"];

const HomePage = () => {
  return (
    <>
      <h3>The most popular GIFS</h3>

      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs of {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
