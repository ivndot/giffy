import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(rootMargin = "50px", threshold = 0) {
  const [show, setShow] = useState(false);
  // define an element to observer
  // use the ref of this component
  const elementRef = useRef();

  useEffect(() => {
    const onChangeIntersection = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        // the element is intersecting
        // show the element
        setShow(true);
        // disable the observer
        observer.disconnect();
      }
    };
    // create an observer
    const observer = new IntersectionObserver(onChangeIntersection, {
      rootMargin,
      threshold
    });
    // observe the element
    observer.observe(elementRef.current);
  }, []);

  return { elementRef, show };
}

export { useIntersectionObserver };
