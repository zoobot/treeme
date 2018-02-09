import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

class Auth extends Component {
  state = {
    username:'',
    email: '',
    password: '',
    isSignup: true
  }

  checkUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  checkPassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth(this.state.username, this.state.password)
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {isSignup: !prevState.isSignup}
    })
  }

  render() {


    return (
      <div className="container main-login-container">
        <div className="col-md-4 col-md-offset-4">
          <h1>Log In</h1>
          <form onSubmit={this.submitHandler} className="form-signin login">
            <div className="form-group row">
              <label htmlFor="username" className="col-xs-4 col-form-label">username</label>
              <div className="col-xs-8">
                <input type="username" className="form-control" id="username" placeholder="username" onChange={this.checkUsername.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-xs-4 col-form-label">Password</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="password" type="password" placeholder="Password" onChange={this.checkPassword.bind(this)}></input>
              </div>
            </div>

            <button>SUBMIT</button>
          </form>
          <button onClick={this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup ? 'LOGIN' : 'SIGNUP'}</button>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password, isSignup) => dispatch(actions.auth(username, password, isSignup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
