import React from 'react'
import { Link } from 'react-router-dom'
import LineitemTile from './LineitemTile'

const MonthShow = (props) => {
  return(
    <div className="test">
      <h1 className="month-title">Your Budget for {props.month.month}</h1>
        <Link to={`/month/${props.month.id}/edit`} className = "button">Edit Month</Link>
    </div>
  )
}

export default MonthShow
