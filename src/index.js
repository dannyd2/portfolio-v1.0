import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/blk-design-system-pro-react.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
