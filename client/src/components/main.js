import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../containers/homepage';
import Login from '../containers/login';
import Signup from '../containers/signup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/:id" component={Child}/>
    </Switch>
  </main>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default Main