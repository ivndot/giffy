import { useRef } from "react";
/**
 * Custom hooks to get the last search
 * @returns An object containing the query and the has results
 */
function useLastSearch() {
  // get last search from local storage
  let lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
  // if last search does not exists, create new last search with no results
  if (!lastSearch) {
    lastSearch = {
      query: "",
      hasResults: false
    };
  }
  // use ref to store if the last search has results
  const lastSearchHasResults = useRef(lastSearch.hasResults);
  let query = "";
  if (lastSearch) {
    if (!lastSearch.query || !lastSearchHasResults) {
      query = "random";
    } else {
      query = lastSearch.query;
    }
  } else {
    query = "random";
  }
  return { query, lastSearchHasResults };
}

export { useLastSearch };
