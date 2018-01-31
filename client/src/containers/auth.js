import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from  '../actions/auth'

class Auth extends Component {
  state = {
    email: '',
    password: ''
  }

  checkUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  checkPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth(this.state.email, this.state.password)
  }

  render() {
    return (
      <div className="container main-login-container">
        <div className="col-md-4 col-md-offset-4">
          <h1>Log In</h1>
          <form onSubmit={this.submitHandler} className="form-signin login">
            <div className="form-group row">
              <label htmlFor="username" className="col-xs-4 col-form-label">Email</label>
              <div className="col-xs-8">
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.checkUsername.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-xs-4 col-form-label">Password</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="password" type="password" placeholder="Password" onChange={this.checkPassword.bind(this)}></input>
              </div>
            </div>
            <button btntype="Success">Log In</button>
          </form>

        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(null,mapDispatchToProps)(Auth)