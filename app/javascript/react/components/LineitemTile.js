import React from 'react'

const LineitemTile = (props) => {
  return (
    <div>
      <h3>{props.lineitemData.lineitem}: {props.lineitemData.value}</h3>
    </div>
  )
}

export default LineitemTile
