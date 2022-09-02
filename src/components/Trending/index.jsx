import React, { Suspense, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Loader from "../Loader";

// import lazy for Trending component
const Trending = React.lazy(() => import("./Trending"));

function LazyTrending() {
  const elementRef = useRef();
  const { isNearScreen } = useIntersectionObserver("50px", 0, elementRef, true);
  
  return (
    <section ref={elementRef}>
      <Suspense
        fallback={
          <div className="flex justify-center py-5">
            <Loader size={50} />
          </div>
        }
      >
        {isNearScreen ? (
          <Trending />
        ) : (
          <div className="flex justify-center py-5">
            <Loader size={50} />
          </div>
        )}
      </Suspense>
    </section>
  );
}

export default LazyTrending;
