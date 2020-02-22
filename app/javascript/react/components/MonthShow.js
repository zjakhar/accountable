import React from 'react'
import { Link } from 'react-router-dom'
import LineitemTile from './LineitemTile'

const MonthShow = (props) => {
  return(
    <div>
      <h1 className="month-title">YOUR BUDGET FOR {props.month.month}</h1>
    </div>
  )
}

export default MonthShow
