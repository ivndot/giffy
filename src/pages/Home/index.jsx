import React from "react";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import { useSearchGifs } from "../../hooks/useSearchGifs";
import Container from "../../components/Container";
import LazyTrending from "../../components/Trending";
import { useLastSearch } from "../../hooks/useLastSearch";
import Footer from "../../components/Footer";

function Home() {
  // get last search
  const { query, lastSearchHasResults } = useLastSearch();
  // use custom hook to get the gifs from the API
  const { gifs, loading } = useSearchGifs(query);

  return (
    <>
      <Container>
        <p className="text-gray-800 text-xl font-serif pb-3 tracking-widest uppercase font-extralight">
          {loading
            ? null
            : lastSearchHasResults && !lastSearchHasResults.current
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
      <Footer />
    </>
  );
}

export default Home;
