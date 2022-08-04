import React, { useState, useEffect } from "react";
import Gif from "../Gif";
import { searchGif } from "../../services/getGifs";
import Loader from "../Loader";

function GifsGrid({ query }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchGif(query).then(data => {
      setGifs(data);
      setLoading(false);
    });
  }, [query]);

  if (loading) return <Loader size={90} />;

  return (
    <>
      <section className="px-12 grid grid-cols-4 gap-4">
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} title={title} url={url} key={id} />
        ))}
      </section>
    </>
  );
}

export default React.memo(GifsGrid);
