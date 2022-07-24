import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';

type Props = {
  article: {
    id: string;
    title: string;
    subtitle: string;
    fulltext: string;
    date: string;
  };
};

const Post: React.FC<Props> = ({ article }) => {
  return (
    <React.Fragment>
      <article className='article-card'>
        <div className='article-card-title'>
          <h2>{article.title}</h2>
        </div>
        <div className='article-card-subtitle'>
          <h3>{article.subtitle}</h3>
          <div className='article-card-date'>
            <p>{article.date}</p>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default hot(module)(Post);
