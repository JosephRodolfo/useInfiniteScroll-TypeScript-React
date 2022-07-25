import React from 'react';
import { hot } from 'react-hot-loader';
import './PostList.scss';
import Post from './Post';
import loader from '@src/assets/images/loader.gif'
import { useRef } from 'react';
import { useInfiniteScroll } from '@src/hooks/useInfiniteScroll';
import { useFetchedArticles } from '@src/hooks/useFetchedArticles';


const PostList: React.FC = () => {
  const endRef = useRef(null);
  const {articleList, loading, loadMoreItems} = useFetchedArticles();

  const scrollLoading = useInfiniteScroll(endRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  },
  loadMoreItems,
  loading,
  3000);

  return (
    <React.Fragment>
      <div id='main-list'>
        {articleList.map((article, index) => {
          return <Post key={article.id} index={index} article={article} />;
        })}

     {scrollLoading || loading ? <img src={loader} className="loading-gif" alt="loading gif"/> : <div ref={endRef} id='hidden-div'>
        This div should come at the end
      </div>}
      </div>


      
    </React.Fragment>
  );
};

export default hot(module)(PostList);
