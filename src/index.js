import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.scss';
import './styles/reset.scss';
import Router from './Router';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
