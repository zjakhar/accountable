import React from 'react'

const LineitemTile = (props) => {
  return (
    <div>
      <li className = "lineitem">{props.lineitemData.lineitem}: {props.lineitemData.value}</li>
    </div>
  )
}

export default LineitemTile
