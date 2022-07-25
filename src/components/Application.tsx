import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import BlogLayout from './BlogLayout';
import PostList from './PostList';

// type Props = {
//   title: string;
//   version: string;
// };

const Application: React.FC = () => {

  return (
      <BlogLayout>
      <PostList />
      </BlogLayout>
  );
};

export default hot(module)(Application);
