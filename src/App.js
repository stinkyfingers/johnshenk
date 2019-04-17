import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar';
import SiteStore from './stores/site';
import Resume from './components/resume';

class App extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(status) {
    this.setState({ resume: status.resume, projects: status.projects });
  }

  componentDidMount() {
    SiteStore.listen(this.onChange);
  }

  render() {
    return (
      <div className="App">
          <Toolbar />
          <Resume />
      </div>
    );
  }
}

export default App;
