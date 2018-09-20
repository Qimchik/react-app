import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <a href="/courses">Logo</a>
        <h1>Courses</h1>
        <span>Logout</span>
      </div>
    );
  }
}

export default Header;
