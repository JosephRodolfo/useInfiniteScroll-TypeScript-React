import { fetchArticles } from '@src/actions/fetchArticles';
import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import Post from './Post';

// type Props = {
//   title: string;
//   version: string;
// };



const PostList: React.FC = () => {
   const [articleList, setArticles] = useState([]);


    useEffect(()=>{
        let isCancelled = false;
        const fetchData = async ()=>{
        const articles = await fetchArticles(10, false);
        !isCancelled && setArticles(articles);
        }
        fetchData();
        return ()=>{
            isCancelled = true;
        }
    },[])

  return (
    <React.Fragment>
        <div className='main-list'>
            {articleList.map((article)=>{
              return ( <Post key={article.id} article={article} />)


            })}


          </div>

    </React.Fragment>
  );
};

export default hot(module)(PostList);