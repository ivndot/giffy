import React from "react";
import GifsGrid from "../../components/GifsGrid";

function Home() {
  return (
    <>
      <p className="text-gray-500 text-xl font-serif font-extralight px-12 pb-3">Last search:</p>
      <GifsGrid query={localStorage.getItem("lastSearch")} />
    </>
  );
}

export default Home;
