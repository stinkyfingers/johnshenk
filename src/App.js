import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar';
import Resume from './components/resume';

class App extends Component {

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
