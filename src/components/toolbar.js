import React, { Component } from 'react';
import Menu from './menu';
import '../css/toolbar.css';

class Toolbar extends Component {

  render() {
    return (
        <div className="toolbar">
          <Menu />
          <span className="myName">John Shenk, Software Engineer</span>
          <h3 className="inlineHeader">Eau Claire, Wisconsin</h3>
        </div>
    );
  }
}

export default Toolbar;
