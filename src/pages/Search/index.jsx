import React from "react";
import Container from "../../components/Container";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import { useSearchGifs } from "../../hooks/useSearchGifs";

function Search({ params }) {
  let { query } = params;
  query = query || "random";
  // use custom hook to get the gifs from the API
  const { gifs, loading } = useSearchGifs(query);
  console.log({ gifs, loading, render: "render" });

  if (!loading && gifs.length === 0)
    return (
      <Container>
        <p className="text-center text-gray-600 text-2xl">
          No gifs found for the search <span className="text-gray-800 font-semibold">{decodeURI(query)}</span>
        </p>
      </Container>
    );

  return (
    <Container>
      {gifs.length > 0 && (
        <p className="text-xl text-slate-700 py-3">
          Results for search: <span className="font-bold">{decodeURI(query)}</span>
        </p>
      )}
      {loading ? <Loader size={90} /> : <GifsGrid gifs={gifs} />}
    </Container>
  );
}

export default Search;
