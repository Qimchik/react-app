import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { REQUEST_LOGIN } from '../../store/actions';
import './login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(event, name) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event, name) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.REQUEST_LOGIN({ username: this.state.email, password: this.state.password });
  }
  render() {
    return (
      <div className="Login">
        <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={this.handleUserNameChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={this.handlePasswordChange} className="form-control" />
            </div>
            {this.props.currentUser && this.props.currentUser.status === "error" &&
              <span className="alert alert-danger">{this.props.currentUser.message}</span>}
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  REQUEST_LOGIN: PropTypes.func,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  REQUEST_LOGIN: REQUEST_LOGIN(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
