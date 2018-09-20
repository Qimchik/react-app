import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    const errorMessage = '';
    return (
      <div className="Login">
        <form className="login-form">
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
            </div>
            {errorMessage && <span className="alert alert-danger">{{errorMessage}}</span>}
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Login;
