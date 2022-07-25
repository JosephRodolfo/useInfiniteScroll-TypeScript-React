import React, { useState, useEffect, MutableRefObject } from 'react';
import { fetchArticles } from '@src/actions/fetchArticles';
//custom hook that fetches data on component load, and on loadMore parameter change to true;
//returns updated array of data and a loading status.
export function useFetchedArticles() {
  const [articleList, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setLoading(true);
      const articles = await fetchArticles(20, false);

      !isCancelled && setArticles(articles);
      setLoading(false);
    };
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, []);

const loadMoreItems = async () => {
      setLoading(true);
      const articles = await fetchArticles(20, false);
      const updatedList = articleList.concat(articles);
      setArticles(updatedList);
      setLoading(false);
    }

  return { articleList, loading, loadMoreItems };
}
