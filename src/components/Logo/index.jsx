import React from "react";
import { Link } from "wouter";

function Logo() {
  return (
    <Link href="/">
      <h1 className="text-center text-slate-700 font-light font-title text-7xl mt-10 hover:cursor-pointer">Giffy</h1>
    </Link>
  );
}

export default React.memo(Logo);
