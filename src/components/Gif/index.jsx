import React from "react";
import { Link } from "wouter";
import { getCustomGifName } from "../../util";

function Gif({ id, title, url }) {
  return (
    <Link href={`/detail/${id}`} className="relative w-full h-full">
      <img src={url} alt={title} loading="lazy" className="w-full z-0 object-cover hover:cursor-pointer" />
      <span className="absolute top-0 px-2 bg-zinc-900/40 text-zinc-50 z-10">{getCustomGifName(title)}</span>
    </Link>
  );
}

export default Gif;
