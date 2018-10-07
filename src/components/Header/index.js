import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../../store/actions';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <a href="/courses">Logo</a>
        <h1>Courses</h1>
        <span onClick={this.props.LOGOUT}>Logout</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  LOGOUT: LOGOUT(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
