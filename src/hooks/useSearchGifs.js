import { useState, useEffect, useContext } from "react";
import { GifsContext } from "../context/GifsContext";
import { searchGif } from "../services/getGifs";

const INITIAL_PAGE = 0;

/**
 * Custom hook to get the gifs from the API
 * @param {string} query The query for the search
 * @returns An object that contains the array of gifs and the state of the loading
 */
function useSearchGifs(query) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    //console.log({ query });
    searchGif(query.trim(), page).then(gifs => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true);
    searchGif(query.trim(), page).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
      setLoadingPage(false);
    });
  }, [page]);

  return { gifs, loading, loadingPage, setPage };
}

export { useSearchGifs };
