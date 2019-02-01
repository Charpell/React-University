import React, { Component } from 'react';

import Toggle from './ToggleRenderProps';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Toggle 
          render={({ on, toggle}) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />

        <Toggle 
          render={({ on, toggle}) => (
            <div>
              {on && <nav>nav item</nav>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        />

      </div>
    );
  }
}

export default App;
