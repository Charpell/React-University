import React, { Component } from 'react';

class StopWatch extends Component {
  state = {
    isRunning: false,
    elaspedTime: 0,
    previousTime: 0
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elaspedTime: prevState.elaspedTime + (now - this.state.previousTime)
      }))
    }
  }

  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() })
    }
  }

  handleReset = () => {
    this.setState({ elaspedTime: 0 })
  }

  render() {
    const seconds = Math.floor(this.state.elaspedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopWatch}>
          { this.state.isRunning ? 'Stop': 'Start' }
        </button> 
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default StopWatch;