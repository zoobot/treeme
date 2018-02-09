import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router'
// import ErrorBoundary from '../errorboundary/errorboundary'


import Main from './main'
import Auth from '../containers/auth'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/auth/" component={Auth}/>
          <Route path="/:id" component={Child}/>
        </Switch>
      </div>

    )
  }
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default App