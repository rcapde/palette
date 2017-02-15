import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navtitles">
          <div className="title">Radical palette</div>
          <div className="subtitle">Most extreme palette on the net</div>
        </div>
        <div className="help">Click to copy !</div>
      </div>
    );
  }
}

export default Navbar;
