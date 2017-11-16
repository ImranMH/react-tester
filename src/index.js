import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './example/App';
//import App from './comp/App';
//import BaseLayout from './route/layout';
import App from './App';
//import App from './mobx/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( (
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
