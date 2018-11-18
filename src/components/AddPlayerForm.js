import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />

        <input
          type="submit"
          placeholder="Add Player"
        />
      </form>
    )
  }
}

export default AddPlayerForm;