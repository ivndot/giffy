import React from "react";
import Gif from "../Gif";

function GifsGrid({ gifs }) {
  return (
    <>
      <section
        className="grid gap-4 min-h-screen"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "stretch",
          justifyItems: "stretch"
        }}
      >
        {gifs.map(({ id, title, url }) => (
          <Gif id={id} title={title} url={url} key={id} />
        ))}
      </section>
    </>
  );
}

export default React.memo(GifsGrid);
