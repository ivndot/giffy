import React, { useEffect, useRef, useCallback } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useSearchGifs } from "../../hooks/useSearchGifs";

function Search({ params }) {
  let { query } = params;
  query = query || "random";

  // use custom hook to get the gifs from the API
  const { gifs, loading, loadingPage, setPage } = useSearchGifs(query);
  // use custom hook to make infinite scroll
  const elementRef = useRef();
  const { isNearScreen } = useIntersectionObserver("100px", 0, elementRef, false);

  const handlePagination = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  useEffect(() => {
    if (isNearScreen) handlePagination();
  }, [isNearScreen]);

  let renderComponent = null;

  if (!loading && gifs.length === 0) {
    // there is no results for the search
    renderComponent = (
      <>
        <div id="observe" ref={elementRef}></div>
        <p className="text-center text-gray-600 text-2xl">
          No gifs found for the search <span className="text-gray-800 font-semibold">{decodeURI(query)}</span>
        </p>
      </>
    );
  }

  if (!loading && gifs.length !== 0) {
    // show results
    renderComponent = (
      <>
        <p className="text-xl text-slate-700 py-3">
          Results for search: <span className="font-bold">{decodeURI(query)}</span>
        </p>
        <GifsGrid gifs={gifs} />
        {loadingPage && (
          <section className="w-full flex flex-col items-center py-5">
            <p>Loading...</p>
            <Loader size={40} />
          </section>
        )}
      </>
    );
  }

  if (loading) {
    // loading the results
    renderComponent = (
      <>
        <section className="w-full min-h-screen flex justify-center items-center">
          <Loader size={90} />
        </section>
      </>
    );
  }

  return (
    <>
      <Container>
        {renderComponent}
        <div id="observe" ref={elementRef}></div>
      </Container>
      <Footer />
    </>
  );
}

export default React.memo(Search);
