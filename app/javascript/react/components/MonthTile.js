import React from 'react'

const MonthTile = ({ monthData }) => {
  let { month } = monthData

  return (
    <div className="Grid">
      <div className="Grid-item">{ month }</div>
    </div>
  )
}

export default MonthTile
