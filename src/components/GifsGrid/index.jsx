import React from "react";
import Gif from "../Gif";

function GifsGrid({ gifs }) {
  return (
    <>
      <section className="grid grid-cols-4 gap-4 min-h-screen">
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} title={title} url={url} key={id} />
        ))}
      </section>
    </>
  );
}

export default React.memo(GifsGrid);
