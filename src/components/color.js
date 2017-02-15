import React, { Component } from 'react';
import '../css/Palette.css';

class Color extends Component {


  render() {
    return (
      <div className="colorcontentbg">
        <div className="colorcontent" style={{backgroundColor : this.props.colorcode}}>
          <div className="cname" style={{color: this.props.fontcolor}}>{this.props.colorname}</div>
          <div className="ccode" style={{color: this.props.fontcolor}}>{this.props.colorcode}</div>
        </div>
      </div>
    );
  }
}

export default Color;
