import React from "react";
import { Link } from "wouter";

function Gif({ id, title, url }) {
  return (
    <Link href={`/detail/${id}`}>
      <img src={url} alt={title} width="auto" loading="lazy" className="object-cover hover:cursor-pointer" />
    </Link>
  );
}

export default Gif;
