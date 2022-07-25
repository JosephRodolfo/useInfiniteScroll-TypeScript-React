import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { Link, Outlet } from 'react-router-dom';
import './Application.scss';

type Props = {
  article: {
    id: string;
    title: string;
    subtitle: string;
    fulltext: string;
    date: string;
  },
  index: number;

};

const Post: React.FC<Props> = ({ article, index, children }) => {
  return (
    <React.Fragment>
              <Outlet />

      <article className='article-card'>
        <p>{children}</p>
        <div className='article-card-title'>
          <h2><Link key={article.id} to={`/blogpost/${article.id}`} state={{article, index}}>{article.title}</Link></h2>
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
