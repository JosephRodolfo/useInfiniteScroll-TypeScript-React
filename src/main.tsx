import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { inDev } from './utils/helpers';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import '../src/components/base/base.scss'

// Say something
console.log('[RWT] : Execution started');

// Application to Render
const app = (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
