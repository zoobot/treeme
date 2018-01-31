import React from 'react'
import axios from 'axios'
import { Route, Redirect } from 'react-router'


export default class SignUp extends React.Component {
  //keep state
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    loggedIn: false
  };


  sendCredentials() {
    let userUpdate = this.props.updateUser;
    axios.post('/auth/signup', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      response.json()
      userUpdate(response.data);
      this.setState({ loggedIn: true });

    })
    .then((data) => {
      if (data.status == 201 || data.status == 200) {
        this.props.history.push('/')
        console.log('Success Login')
      } else {
        console.log('Success Not Login')
      }


    })
    .catch(function(err) {
      console.error('ERROR', err);
    });
  }

  checkLoggedIn(e) {
    this.setState({ loggedIn: true });
  }
  checkFirstname(e) {
    this.setState({ firstname: e.target.value });
  }
  checkLastname(e) {
    this.setState({ lastname: e.target.value });
  }
  checkUsername(e) {
    this.setState({ username: e.target.value });
  }
  checkPassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="container main-signup-container">
        <div className="col-md-6 col-md-offset-3">
          <h1>Sign Up</h1>
          <form className="form-signup signup">
           <div className="form-group row">
              <label htmlFor="firstname" className="col-xs-4 col-form-label">First Name</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="firstname" onChange={this.checkFirstname.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lastname" className="col-xs-4 col-form-label">Last Name</label>
              <div className="col-xs-8">
                <input type="text" className="form-control" id="lastname" onChange={this.checkLastname.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-xs-4 col-form-label">Email</label>
              <div className="col-xs-8">
                <input type="email" className="form-control" id="email" onChange={this.checkUsername.bind(this)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-xs-4 col-form-label">Password</label>
              <div className="col-xs-8">
                <input type="password" className="form-control" id="password" onChange={this.checkPassword.bind(this)}></input>
              </div>
            </div>
            <button className="btn btn-sm btn-primary" type="submit" onClick={this.sendCredentials.bind(this)}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
