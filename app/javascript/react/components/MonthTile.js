import React from 'react'
import { Link } from 'react-router-dom'

const MonthTile = ({ monthData }) => {
  let { id, month } = monthData

  return (
      <div className="">
        <Link to={`/months/${id}`}>
          <div className="Grid-item">{ month }</div>
        </Link>
      </div>
  )
}

export default MonthTile
