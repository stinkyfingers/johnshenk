import React from 'react';
import Menu from './menu';
import '../css/toolbar.css';

const Toolbar = () => (
  <div className="toolbar">
    <Menu />
    <span className="myName">John Shenk, Software Engineer</span>
    <h3 className="inlineHeader">Eau Claire, Wisconsin</h3>
  </div>
);
export default Toolbar;
