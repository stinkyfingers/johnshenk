import React from 'react';
import Menu from './menu';
import '../css/toolbar.css';

const Toolbar = () => (
  <div className="toolbar">
    <Menu />
    <span className="myName">John Shenk, Software Engineer</span>
    <div className="inlineHeader">Eau Claire, Wisconsin</div>
  </div>
);
export default Toolbar;
