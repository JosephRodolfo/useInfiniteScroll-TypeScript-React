import React, { useState, useEffect, MutableRefObject } from 'react';
//custom hook that takes 1. useRef reference to HTML element at end of page that will trigger end of page state change.
// 2. IntersectionObserver options object to set threshhold and rootmargin.
//3. function to call when it's time to load more content
//4. loading status from your loading content hook so this hook knows not to keep firing it's load more callback
//returns true or false on containerRef becoming observable.
export function useInfiniteScroll(
  endRef: MutableRefObject<HTMLElement>,
  options: IntersectionObserverInit,
  loadMoreFunc: Function,
  loading: boolean,
  loadingDelay: number,
) {
  const [scrollLoading, setScrollLoading] = useState(false);
  const callback = (e: Array<IntersectionObserverEntry>) => {
    setScrollLoading(true);
    setTimeout(() => {
      if (e[0].isIntersecting) loadMoreFunc();
      setScrollLoading(false);
    }, loadingDelay);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (each) {
        if (each.isIntersecting && !loading) {
          callback(entries);
        }
      });
    }, options);
    if (endRef.current) observer.observe(endRef.current);

    return () => {
      if (endRef.current) observer.unobserve(endRef.current);
    };
  });
  return scrollLoading;
}
