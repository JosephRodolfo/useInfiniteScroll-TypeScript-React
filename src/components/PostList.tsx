import React, {
  useEffect,
  useState,
} from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import Post from './Post';
import { useRef } from 'react';
import { useInfiniteScroll } from '@src/hooks/useInfiniteScroll';
import { useFetchedArticles } from '@src/hooks/useFetchedArticles';


const PostList: React.FC = () => {
  const endRef = useRef(null);
  const {articleList, loading, loadMoreItems} = useFetchedArticles();

  const loadMore = useInfiniteScroll(endRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  },
  loadMoreItems);

  return (
    <React.Fragment>
      <div id='main-list'>
        {articleList.map((article) => {
          return <Post key={article.id} article={article} />;
        })}
      </div>

      <div ref={endRef} id='hidden-div'>
        This div should come at the end
      </div>
    </React.Fragment>
  );
};

export default hot(module)(PostList);
