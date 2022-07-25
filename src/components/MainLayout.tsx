import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './Application.scss';
import PostList from './PostList';

// type Props = {
//   title: string;
//   version: string;
// };

const MainLayout: React.FC = ({children}) => {

  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <h1>Randomly Generated News Site</h1>
          </div>

{children}
      </main>
    </React.Fragment>
  );
};

export default hot(module)(MainLayout);
