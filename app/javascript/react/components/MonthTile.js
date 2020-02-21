import React from 'react'
import { Link } from 'react-router-dom'

const MonthTile = ({ monthData }) => {
  let { id, month } = monthData

  return (
    <Link className="cell small-12 medium 3 calendar" to={`/months/${id}`}>
      <div className="month-text">{ month }</div>
    </Link>
  )
}

export default MonthTile
