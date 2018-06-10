import React, { Component } from 'react';
import CoinTable from './component/coin-table';

import data from './data/coins.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        price_usd: 'asc',
      }
    }
  }

  sortBy = (key) => {
    console.log(key)
    this.setState({
      data: data.sort((a, b) => (
        this.state.direction[key] === 'asc' ? 
          parseFloat(a[key]) - parseFloat(b[key ]) : 
          parseFloat(b[key]) - parseFloat(a[key ])
      )),

      direction: {
        [key]: this.state.direction[key] === 'asc' ?
          'desc' :
          'asc'
      }
    })
  }


  render() {
    return (
      <div className="page-container">
        <CoinTable 
          data={this.state.data} 
          sortBy={this.sortBy}
        /> 
      </div>
    );
  }
}

export default App;
