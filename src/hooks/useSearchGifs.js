import { useState, useEffect } from "react";
import { searchGif } from "../services/getGifs";

/**
 * Custom hook to get the gifs from the API
 * @param {string} query The query for the search
 * @returns An object that contains the array of gifs and the state of the loading
 */
function useSearchGifs(query) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchGif(query).then(data => {
      setGifs(data);
      setLoading(false);
    });
  }, [query]);

  return { gifs, loading };
}

export { useSearchGifs };
