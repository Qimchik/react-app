import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <div layout="row" layout-align="center center">
          <span>Copyright 2018</span>
        </div>
      </div>
    );
  }
}

export default Footer;
