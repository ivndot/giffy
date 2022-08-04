import React from "react";
import { Link } from "wouter";

function Logo() {
  return (
    <Link href="/">
      <h1 className="w-1/5 text-slate-700 font-light font-title text-7xl mt-10 mx-auto hover:cursor-pointer">Giffy</h1>
    </Link>
  );
}

export default React.memo(Logo);
