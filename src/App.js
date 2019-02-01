import React, { Component } from 'react';

import Toggle from './Toggle';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          <h1>Hello</h1>
        </Toggle>
      </div>
    );
  }
}

export default App;
