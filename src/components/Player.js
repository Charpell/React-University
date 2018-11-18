import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    isHighScore: PropTypes.bool
  }

  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button 
            className="remove-player" 
            onClick={ () => this.props.removePlayer(this.props.id) }>
              x
          </button>

          <Icon isHighScore={this.props.isHighScore} />
          { this.props.name }
        </span>
  
        <Counter 
          score={this.props.score} 
          changeScore={this.props.changeScore}
          index={this.props.index}
        />      
      </div>
    )
  }
}

export default Player;