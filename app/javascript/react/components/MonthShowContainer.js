import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import LineitemsForm from './LineitemsForm'
import MonthShow from './MonthShow'
import LineitemTile from './LineitemTile'
import Charts from './Charts'

const MonthShowContainer = (props) => {
  let monthId = props.match.params.id
  const [month, setMonth] = useState({})
  const [lineitems, setLineitems] = useState([])

  useEffect(() => {
    fetch(`/api/v1/months/${monthId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(body => {
      setMonth(body)
      setLineitems(body.lineitems)
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
      setLineitems([
        ...lineitems, body
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const deleteLineitem = (lineitemId) => {
    fetch(`/api/v1/months/${monthId}/lineitems/${lineitemId}`, {
      credentials: "same-origin",
      method: 'DELETE',
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
      window.location.reload()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const lineitemTile = lineitems.map((lineitem) => {
    return (
      <div>
        <LineitemTile
          key = {lineitem.id}
          lineitemData = {lineitem}
          deleteLineitem = { deleteLineitem }
        />
      </div>
    )
  })

  const remainingToBudget = (lineitems) => {
    let income = 0
    let expense = 0
    let i = 0
    for (i; i < lineitems.length; i++) {
      if (lineitems[i].category === "Income") {
        income = income + lineitems[i].value
      } else if (lineitems[i].category === "Expense") {
        expense = expense + lineitems[i].value
      }
    }
    return income - expense
  }

  return (
    <div>
      <div className="container ">
        <MonthShow
          month = { month }
        />
      <div className="charts columns small-4">
        <Charts
          lineitems = { lineitems }
          month = { month }
          remainingToBudget = { remainingToBudget }
        />
      </div>
      <div className="columns small-4 left-box">
        {lineitemTile}
      </div>
      <br/>
      <div className="row zerobased">
        <h5>Remaining left to Budget for this month is: ${remainingToBudget(lineitems)}</h5>
      </div>
        <LineitemsForm
        onSubmit = { submitNewLineitem }
        />
      </div>
    </div>
  )
}

export default MonthShowContainer
