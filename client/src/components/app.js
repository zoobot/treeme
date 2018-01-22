import React, {Component } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

// import { Router, Route, Switch } from 'react-router'
import Header from './header'
import Main from './main'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App