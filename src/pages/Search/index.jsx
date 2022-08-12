import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import { useSearchGifs } from "../../hooks/useSearchGifs";

function Search({ params }) {
  let { query } = params;
  query = query || "random";
  // use custom hook to get the gifs from the API
  const { gifs, loading, loadingPage, setPage } = useSearchGifs(query);

  const handlePagination = () => {
    setPage(prevPage => prevPage + 1);
  };

  let renderComponent = null;

  if (!loading && gifs.length === 0) {
    // there is no results for the search
    renderComponent = (
      <p className="text-center text-gray-600 text-2xl">
        No gifs found for the search <span className="text-gray-800 font-semibold">{decodeURI(query)}</span>
      </p>
    );
  } else {
    renderComponent = loading ? (
      <section className="w-full min-h-screen flex justify-center items-center">
        <Loader size={90} />
      </section>
    ) : (
      <>
        <p className="text-xl text-slate-700 py-3">
          Results for search: <span className="font-bold">{decodeURI(query)}</span>
        </p>
        <GifsGrid gifs={gifs} />
        {loadingPage ? (
          <section className="w-full flex justify-center py-5">
            <Loader size={40} />
          </section>
        ) : (
          <article className="flex justify-center">
            <Button handleClick={handlePagination} content="Get more results" />
          </article>
        )}
      </>
    );
  }

  return <Container>{renderComponent}</Container>;
}

export default React.memo(Search);
