import React, { useState } from "react";
import { useLocation } from "wouter";
import SearchIcon from "../../assets/icons/SearchIcon";

function FormSearch() {
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setLocation(`/search/${query}`);
    setQuery("");
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pt-10 flex flex-row flex-nowrap justify-center gap-3">
      <div className="w-4/5 h-12 px-5 flex flex-row flex-nowrap justify-center items-center gap-1 transition-all bg-white rounded-md overflow-hidden shadow-md shadow-gray-300 md:w-2/5">
        <SearchIcon className="w-6 h-6" color="#494949" />
        <input
          type="text"
          placeholder="Search a gif..."
          onChange={handleChange}
          value={query}
          className="flex-1 h-12 px-4 text-gray-900 font-serif outline-0"
        />
      </div>
      <button
        type="submit"
        className="hidden text-gray-400 text-md p-3 rounded-md hover:text-blue-700 hover:bg-blue-900/20 md:inline"
      >
        Search
      </button>
    </form>
  );
}

export default React.memo(FormSearch);
