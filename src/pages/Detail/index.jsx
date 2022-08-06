import React from "react";
import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import { useGif } from "../../hooks/useGif";
import { isObjectEmpty } from "../../util/";

function Detail({ params }) {
  const { gifID } = params;
  const { loading, selectedGif } = useGif(gifID);

  if (loading) return <Loader />;

  if (isObjectEmpty(selectedGif))
    return <p className="text-center text-xl text-slate-800">No gif found 😟</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <Gif url={selectedGif.url} id={selectedGif.id} />
      <p className="text-2xl mt-4 text-cyan-900 font-semibold">{selectedGif.title}</p>
    </div>
  );
}

export default Detail;
