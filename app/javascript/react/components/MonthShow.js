import React from 'react'
import LineitemTile from './LineitemTile'

const MonthShow = (props) => {
  return(
    <div>
      <h1 className="month-title">Your Budget for {props.month.month}</h1>
    </div>
  )
}

export default MonthShow
