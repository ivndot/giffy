import React from "react";
import GifsGrid from "../../components/GifsGrid";

function Search({ params }) {
  let { query } = params;
  query = query || "random";

  return (
    <>
      <p className="text-xl text-slate-700 px-12 py-3">
        Results for search: <span className="font-bold">{decodeURI(query)}</span>
      </p>
      <GifsGrid query={query} />
    </>
  );
}

export default Search;
