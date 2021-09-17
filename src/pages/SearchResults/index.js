import { Link } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

import useGifs from "../../hooks/useGifs";
import styles from "./searchResults.module.css";

const SearchResultsPage = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  if (loading) {
    return (
      <section className="loading">
        <span>Loading ...</span>
      </section>
    );
  }

  return (
    <>
      <Link to="/" className={styles.backLink}>
        ⬅️ Go back home
      </Link>

      <section className="section">
        <ListOfGifs gifs={gifs} />
      </section>
    </>
  );
};

export default SearchResultsPage;
