import React, { Component } from 'react';

import '../App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerFom from './AddPlayerForm';



class App extends Component {
  state = {
    players : [{
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }]
  }

  // player id counter
  playerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }))
  }
  
  handleAddPlayer = name => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  render() {
    const { players } = this.state;
    
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={players} 
        />

        {players.map((player, index) => (
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      
          <AddPlayerFom 
            addPlayer={this.handleAddPlayer}
          />
      </div>
    );
  }
}









export default App;
