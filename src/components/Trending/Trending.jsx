import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { getTrendingTerms } from "../../services/getGifs";

function Trending() {
  const [trendingTerms, setTrendingTerms] = useState([]);

  useEffect(() => {
    console.log("render trending");
    getTrendingTerms().then(topics => setTrendingTerms(topics));
  }, []);

  return (
    <section className="w-full mt-11">
      <p className="text-2xl font-semibold text-center">Trending 🔥</p>
      <div className="w-full p-6 flex flex-row flex-wrap justify-center">
        {trendingTerms.map((term, idx) => (
          <span key={idx}>
            <Link href={`/search/${term}`}>
              <a className="px-3 hover:underline ">{`${term}`}</a>
            </Link>
            {idx !== trendingTerms.length - 1 && <span>•</span>}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Trending;
