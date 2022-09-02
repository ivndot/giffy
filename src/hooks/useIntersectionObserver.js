import { useState, useEffect } from "react";

/**
 * Custom hook to observe an element and do whatever you want when the element is seen
 * @param {string} rootMargin The margin in pixels to see the element
 * @param {number} threshold The threshold of the element from `0` to `1`
 * @param {any} fromRef The reference from the element to observe
 * @param {boolean} once `true` to just observe the element once, `false` otherwise
 * @returns An object containing if the element is near to screen
 */
function useIntersectionObserver(rootMargin = "50px", threshold = 0, fromRef = null, once = true) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const element = fromRef ? fromRef.current : fromRef;

  useEffect(() => {
    const onChangeIntersection = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        // the element is intersecting
        // show the element
        setIsNearScreen(true);
        // disable the observer if we want to observe only once
        if (once) observer.disconnect();
      } else {
        if (!once) setIsNearScreen(false);
      }
    };
    // create an observer
    const observer = new IntersectionObserver(onChangeIntersection, {
      rootMargin,
      threshold
    });
    // observe the element if exists
    if (element) {
      observer.observe(element);
      //console.log("observing...", element);
    }
  }, [rootMargin, threshold, element]);

  return { isNearScreen };
}

export { useIntersectionObserver };
