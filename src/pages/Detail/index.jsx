import React, { useEffect, useState } from "react";
import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import { getGifByID } from "../../services/getGifs";

function Detail({ params }) {
  const { gifID } = params;
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState({});

  useEffect(() => {
    setLoading(true);
    getGifByID(gifID).then(gif => {
      setLoading(false);
      setGif(gif);
    });
  }, [gifID]);

  if (loading) return <Loader />;

  if (Object.keys(gif).length === 0)
    return <p className="text-center text-xl text-slate-800">No gif found 😟</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <Gif url={gif.url} id={gif.id} />
      <p className="text-2xl mt-4 text-cyan-900 font-semibold">{gif.title}</p>
    </div>
  );
}

export default Detail;
