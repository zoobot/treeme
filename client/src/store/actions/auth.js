import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = (token, id) => {

  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    id: id
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const auth = (username, password, isSignup) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      username: username,
      password: password,
      returnSecureToken: true
    }
    console.log(window.location.href )
    let url = '/auth/signup'
    // if (!isSignup && window.location.pathname === '/auth/signup') {
    if (!(window.location.pathname === '/auth/signup')) {
      url = '/auth/login'
      console.log('changing url to login', url)
    }
    console.log(url, window.location.href )
    var stringPathName = window.location.pathname
    console.log(stringPathName)
    // <protocol>//<hostname>:<port>/<pathname><search><hash>

  axios.post(url, authData)
    .then(response => {
      console.log('response body', response)
      let data = JSON.parse(response)
      localStorage.setItem('id_token', data.id)
      this.jwt(context, data.id)
      dispatch(authSuccess(response.data.idToken, response.data.id))
      dispatch(checkAuthTimeout(response.data.expiratesIn))
    })
    .catch(error => {
      dispatch(authFail(error))
    })
  }
}