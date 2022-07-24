import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import PostList from './PostList';

// type Props = {
//   title: string;
//   version: string;
// };

const Application: React.FC = () => {

  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <h1></h1>
          </div>
    <PostList />
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
