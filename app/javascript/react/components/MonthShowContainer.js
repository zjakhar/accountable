import React, { useState, useEffect } from 'react'
import LineitemsForm from './LineitemsForm'
import MonthShow from './MonthShow'
import LineitemTile from './LineitemTile'

const MonthShowContainer = (props) => {
  let monthId = props.match.params.id
  // const [month, setMonth] = useState({})
  const [lineitems, setLineitems] = useState([])

  useEffect(() => {
    fetch(`/api/v1/months/${monthId}/lineitems`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(body => {
      // debugger
      setLineitems(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const submitNewLineitem = (formPayLoad) => {
    fetch(`/api/v1/months/${monthId}/lineitems`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayLoad),
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
      debugger
      setLineitems([
        ...lineitems, body
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const lineitemTile = lineitems.map((lineitem) => {
    return (
      <div>
        <LineitemTile
          key = {lineitem.id}
          lineitemData = {lineitem}
        />
      </div>
    )
  })

  return (
    <div className="test">
      <MonthShow />
      {lineitemTile}
      <LineitemsForm
        onSubmit = { submitNewLineitem }
      />
    </div>
  )
}

export default MonthShowContainer
