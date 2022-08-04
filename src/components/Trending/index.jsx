import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { getTrendingTerms } from "../../services/getGifs";

function Trending() {
  const [trendingTerm, setTrendingTerms] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(topics => setTrendingTerms(topics));
  }, []);
  
  return (
    <section className="p-12">
      <p className="text-2xl font-semibold mb-3 text-center">Trending 🔥</p>
      <div className="text-center">
        {trendingTerm.map((term, idx) => (
          <span key={idx}>
            <Link href={`/search/${term}`}>
              <a className="px-3 hover:underline ">{`${term}`}</a>
            </Link>
            {idx !== trendingTerm.length - 1 && <span>•</span>}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Trending;
