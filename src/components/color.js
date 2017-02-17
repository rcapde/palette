import React, { Component } from 'react';
import '../css/Palette.css';
import CopyToClipboard from 'react-copy-to-clipboard';

class Color extends Component {
  state = {
    copied: false,
  }

  handleCopy(){
    this.setState({copied: true})
  }


  render() {
    if(this.state.copied==true) {
        setTimeout(function(){
             this.setState({copied:false});
        }.bind(this),2000);  // wait 5 seconds, then reset to false
    }
    return (

      <CopyToClipboard text={this.props.colorcode}
        onCopy={this.handleCopy.bind(this)}
        >
        <div className="colorcontentbg">
          <div className="colorcontent" style={{backgroundColor : this.props.colorcode}}>
            <div className="cname" style={{color: this.props.fontcolor}}>{this.props.colorname}</div>
            {this.state.copied ? <span className="copied">Copied.</span> : null}
            <div className="ccode" style={{color: this.props.fontcolor}}>{this.props.colorcode}</div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default Color;
