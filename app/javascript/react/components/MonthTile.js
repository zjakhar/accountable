import React from 'react'
import { Link } from 'react-router-dom'

const MonthTile = ({ monthData }) => {
  let { id, month } = monthData

  return (
      <div>
        <Link to={`/months/${id}`}>
          <div className="Grid-item month-text">{ month }</div>
        </Link>
      </div>
  )
}

export default MonthTile
