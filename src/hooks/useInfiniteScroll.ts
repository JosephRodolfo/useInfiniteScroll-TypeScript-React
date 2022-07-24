import React, { useState, useEffect, MutableRefObject } from 'react';
//custom hook that takes 1. useRef reference to HTML element at end of page that will trigger end of page state change.
// and 2. IntersectionObserver options object to set threshhold and rootmargin.
//returns true or false on containerRef becoming observable.
export function useInfiniteScroll(
  endRef: MutableRefObject<HTMLElement>,
  options: IntersectionObserverInit,
  loadMoreFunc: Function,
) {
  const [endPage, setEndPage] = useState(false);

  const callback = (e: any) => {
    setEndPage(e[0].isIntersecting);
    endPage && loadMoreFunc();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (endRef.current) observer.observe(endRef.current);

    return () => {
      if (endRef.current) observer.unobserve(endRef.current);
    };
  });

  return endPage;
}
