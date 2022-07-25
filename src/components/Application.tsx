import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import MainLayout from './MainLayout';
import PostList from './PostList';

// type Props = {
//   title: string;
//   version: string;
// };

const Application: React.FC = () => {

  return (
      <MainLayout>
      <PostList />
      </MainLayout>
  );
};

export default hot(module)(Application);
