import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <div className='main-layout-container'>
        <main>
          <div className='main-heading'>
            <h1><Link to="/">Randomly Generated News Site</Link></h1>
          </div>

          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default hot(module)(MainLayout);
