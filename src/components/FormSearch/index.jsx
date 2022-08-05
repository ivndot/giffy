import React, { useState } from "react";
import { useLocation } from "wouter";

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
    <form onSubmit={handleSubmit} className="w-full pt-10">
      <input
        type="text"
        placeholder="Game of Thrones..."
        onChange={handleChange}
        value={query}
        className="w-2/5 h-12 px-4 mx-auto block rounded-md text-slate-600 shadow-md shadow-gray-300 font-serif focus:border border-blue-900 outline-0"
      />
    </form>
  );
}

export default React.memo(FormSearch);
