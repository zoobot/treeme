import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
// import GoogleMap from './containers/google_map_test'
import registerServiceWorker from './registerServiceWorker';

// import reducers from './reducers';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('.root'));
registerServiceWorker();




