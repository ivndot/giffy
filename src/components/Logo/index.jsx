import React from "react";
import { Link } from "wouter";

function Logo() {
  console.log("render logo");
  return (
    <header className="flex justify-center mt-10">
      <Link href="/">
        <h1 className="text-slate-700 font-light font-title text-7xl hover:cursor-pointer">
          Giffy
        </h1>
      </Link>
    </header>
  );
}

export default React.memo(Logo);
