import Container from "../../components/Container";
import React from "react";
import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import { useGif } from "../../hooks/useGif";
import { isObjectEmpty } from "../../util/";
import BackIcon from "../../assets/icons/BackIcon";
import Footer from "../../components/Footer";

function Detail({ params }) {
  const { gifID } = params;
  const { loading, selectedGif } = useGif(gifID);

  if (loading)
    return (
      <>
        <section className="w-full flex flex-row justify-center mt-12">
          <Loader />
        </section>
        <Footer />
      </>
    );

  if (isObjectEmpty(selectedGif)) {
    return (
      <>
        <Container>
          <p className="text-center text-4xl text-slate-800">Gif not found 😟</p>
          <p className="text-center text-xl text-slate-500 pt-4">
            Make sure that the URL is correct or try to search another GIF
          </p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <section className="flex flex-col items-center mb-12">
          <button className="self-start mb-4" onClick={() => window.history.back()}>
            <BackIcon color="#333333" />
            <span className="inline text-gray-500 ml-2">Regresar</span>
          </button>
          <section className="w-full md:w-3/5">
            <Gif url={selectedGif.url} id={selectedGif.id} />
          </section>
          <p className="text-2xl mt-4 text-cyan-900 font-semibold">{selectedGif.title}</p>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Detail;
