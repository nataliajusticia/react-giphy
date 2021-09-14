import { useState, useEffect } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

import getGifs from "../../services/getGifs";

const SearchResultsPage = ({ params }) => {
  const { keyword } = params;

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return (
      <section className="loading">
        <span>Loading ...</span>
      </section>
    );
  }

  return (
    <section className="section">
      <ListOfGifs gifs={gifs} />
    </section>
  );
};

export default SearchResultsPage;
