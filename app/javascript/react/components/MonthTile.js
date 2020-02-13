import React from 'react'

const MonthTile = ({ monthData }) => {
  let { month } = monthData

  return (
    <div className="Grid-item">{ month }</div>
  )
}

export default MonthTile
