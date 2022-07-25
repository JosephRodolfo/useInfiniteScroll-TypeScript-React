import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import { useLocation } from 'react-router-dom';
import MainLayout from './MainLayout';

const BlogPost: React.FC = () => {
  type Article = {
    id?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    date?: string;
  };
  const [articlePost, setArticle] = useState<Article>({});
  const [postIndex, setIndex] = useState<Number>(null);

  type Props = {
    article?: Article;
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
    <MainLayout>
      <article className='article-card'>
        <div className='article-card-title'>
          <h2>{articlePost.title}</h2>
        </div>
        <div className='article-card-subtitle'>
          <h3>{articlePost.subtitle}</h3>
          </div>

          <div className='article-card-date'>
            <p>{articlePost.date}</p>
          </div>
          <div className='article-card-text'>
            <p>{articlePost.text}</p>
          </div>
      </article>
    </MainLayout>
  );
};

export default hot(module)(BlogPost);
