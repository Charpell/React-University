import React from 'react'
import ElapsedTime from './elapsed-time'
import Buttons from './buttons'


class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timingEvents: [],
    }
  }

  render() {
    return (
      <div className='container'>
        <ElapsedTime />
        <Buttons />
      </div>
    )
  }
}

export default Timer