const API_KEY = "hD3H95AQ2lW0CqQUDQayS78jDExfrhT8&q";

const getGifs = ({ keyword = "" }) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${keyword}&limit=24&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((result) => {
      const { data } = result;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { id, title, images } = gif;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });

        return gifs;
      }
    });
};

export default getGifs;
