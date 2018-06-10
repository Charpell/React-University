import React, { Component } from 'react';
import CoinTable from './component/coin-table';

import data from './data/coins.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <CoinTable data={data} /> 
      </div>
    );
  }
}

export default App;
