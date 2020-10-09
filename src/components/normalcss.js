import React from 'react';
import '../css/resume.css';

const Css = () => {
  const bkgd = <div className="backgroundImage">
      <img src={require("../Photos/IMG_0981_low.jpg")} alt="Me with sunglasses."/>
    </div>;

  return (
    <React.Fragment>
      {bkgd}
    </React.Fragment>
)};


export default Css;
