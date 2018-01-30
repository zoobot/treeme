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
import Foo from '../containers/foo'

const App = () => (
  <div>
    <Header />
    <Foo />
    <Main />

  </div>
)

export default App