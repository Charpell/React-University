import React, { Component } from 'react';

import ConfirmButton from './ConfirmButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfirmButton 
          times={3}
          dialog={['Delete', 'Are you Sure?', 'Once more to delete']}
          action={() => console.log('action!')} 
        />
      </div>
    );
  }
}

export default App;
