import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
          <div className="app-content">
            {this.props.children}
          </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
