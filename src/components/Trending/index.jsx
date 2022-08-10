import React, { Suspense } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Loader from "../Loader";

// import lazy for Trending component
const Trending = React.lazy(() => import("./Trending"));

function LazyTrending() {
  const { show, elementRef } = useIntersectionObserver();
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Loader size={50} />}>{show ? <Trending /> : <Loader size={50} />}</Suspense>
    </div>
  );
}

export default React.memo(LazyTrending);
