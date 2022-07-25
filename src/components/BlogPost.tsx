import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import { useLocation } from 'react-router-dom';
import BlogLayout from './BlogLayout';

// type Props = {
//   article: {
//     id: string;
//     title: string;
//     subtitle: string;
//     fulltext: string;
//     date: string;
//   };
// };

const BlogPost: React.FC = () => {
  type Article = {
    id?: string;
    title?: string;
    subtitle?: string;
    fulltext?: string;
    date?: string;
  };
  const [articlePost, setArticle] = useState<Article>({});
  const [postIndex, setIndex] = useState<Number>(null);

  type Props = {
    article?: {
      id?: string;
      title?: string;
      subtitle?: string;
      fulltext?: string;
      date?: string;
    };
    index?: number;
  };
  const location = useLocation();

  useEffect(() => {
    const { article, index }: Props = location.state || {};
    setArticle(article);
    setIndex(index);
  }, []);

  useEffect(() => {
    console.log(articlePost);
  }, [articlePost]);

  return (
    
    <BlogLayout>
      <article className='article-card'>
        <div className='article-card-title'>
          <h2>{articlePost.title}</h2>
        </div>
        <div className='article-card-subtitle'>
          <h3>{articlePost.subtitle}</h3>
          <div className='article-card-date'>
            <p>{articlePost.fulltext}</p>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default hot(module)(BlogPost);
