import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={1} />

        <Player name="Ebuka" score={50} />
        <Player name="Guil" score={350} />
        <Player name="John" score={50} />
        <Player name="Ken" score={150} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter score={ props.score } />      
    </div>
  )
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

export default App;
