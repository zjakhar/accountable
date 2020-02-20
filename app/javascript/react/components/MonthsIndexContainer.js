import React, { useState, useEffect } from 'react'
import MonthTile from './MonthTile'
import MonthsForm from './MonthsForm'
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

  const submitNewMonth = (formPayload) => {
    fetch('/api/v1/months.json', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setMonths([
        ...months,
        body])
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  const monthTiles = months.map((month) => {
    return (
      <MonthTile
        key={month.id}
        monthData= {month}
      />
    )
  })

  return (
    <div className="container">
      <div className="Grid row">
        { monthTiles }
      </div>
      <MonthsForm
        onSubmit = { submitNewMonth }
      />
    </div>
  )
}

export default MonthsIndex
