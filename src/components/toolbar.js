import React, { Component } from 'react';
import SiteActions from '../actions/site';
import SiteStore from '../stores/site';
import '../css/toolbar.css';

class Toolbar extends Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(status) {
    this.setState({ resume: status.resume, projects: status.projects });
  }

  componentDidMount() {
    SiteStore.listen(this.onChange);
  }

  toggle(e) {
    SiteActions.show(e.target.value);
  }

  render() {
    return (
        <div className="toolbar">
          <span className="myName">John Shenk, Software Engineer</span>
          <h3 className="inlineHeader">Eau Claire, Wisconsin</h3>
        </div>
    );
  }
}

export default Toolbar;
