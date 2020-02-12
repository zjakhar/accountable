import React, { useState, useEffect } from 'react'
import MonthTile from './MonthTile'
import { Link } from 'react-router-dom'

const MonthsIndex = (props) => {
  const [months, setMonths] = useState([])

  useEffect(() => {
    fetch('/api/v1/months.json')
      .then(response => {
        if(response.ok) {
          return response
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(response => response.json())
      .then(body => {
        setMonths(body)
      })
      .catch(error => {
        console.log(`Error fetching albums: ${error.message}`)
      })
  }, [])

  const monthTiles = months.map((month) => {
    return (
      <MonthTile
        key={month.id}
        monthData= {month}
      />
    )
  })

  return (
    <div className="test">
      <span>
        { monthTiles }
      </span>
      <span className="Grid">
        <Link to={`/months/new`} className="Grid-item">
          <div className="month-text-last">
            + Add New Month +
          </div>
        </Link>
      </span>
    </div>
  )
}

export default MonthsIndex
