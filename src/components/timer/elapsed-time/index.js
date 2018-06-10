import React from 'react'

function elapsedTime() {
  return '00:00'
}

export default function ElapsedTime(props) {
  return (
    <div className='elapsed-time'>
      {elapsedTime()}
    </div>
  )
}