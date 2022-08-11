import React from "react";
import GifsGrid from "../../components/GifsGrid";
import Loader from "../../components/Loader";
import FormSearch from "../../components/FormSearch";
import { useSearchGifs } from "../../hooks/useSearchGifs";
import Container from "../../components/Container";

function Home() {
  const query = localStorage.getItem("lastSearch") || "random";
  // use custom hook to get the gifs from the API
  const { gifs, loading } = useSearchGifs(query);
  return (
    <>
      <FormSearch />
      <Container>
        <p className="text-gray-800 text-xl font-serif pb-3 tracking-widest uppercase font-extralight">
          Last search:
        </p>
        {loading ? (
          <div className="w-full min-h-screen flex justify-center items-center">
            <Loader size={90} />
          </div>
        ) : (
          <GifsGrid gifs={gifs} />
        )}
      </Container>
    </>
  );
}

export default Home;
