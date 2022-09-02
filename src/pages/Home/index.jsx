import React, { useRef } from "react";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import FormSearch from "../../components/FormSearch";
import { useSearchGifs } from "../../hooks/useSearchGifs";
import Container from "../../components/Container";
import LazyTrending from "../../components/Trending";

function Home() {
  // get last search from local storage
  const lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
  // use ref to store if the last search has results
  const lastSearchHasResults = useRef(lastSearch.hasResults);
  const query = !lastSearch.query || !lastSearch.hasResults ? "random" : lastSearch.query;
  // use custom hook to get the gifs from the API
  const { gifs, loading } = useSearchGifs(query);

  return (
    <>
      <FormSearch />
      <Container>
        <p className="text-gray-800 text-xl font-serif pb-3 tracking-widest uppercase font-extralight">
          {loading
            ? null
            : !lastSearchHasResults.current
              ? "CHECK SOME INTERESTING GIFS..."
              : "LAST SEARCH..."}
        </p>
        {loading ? (
          <div className="w-full min-h-screen flex justify-center items-center">
            <Loader size={90} />
          </div>
        ) : (
          <GifsGrid gifs={gifs} />
        )}
      </Container>
      <LazyTrending />
    </>
  );
}

export default Home;
