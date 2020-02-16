import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import LineitemsForm from './LineitemsForm'
import MonthShow from './MonthShow'
import LineitemTile from './LineitemTile'

const MonthShowContainer = (props) => {
  let monthId = props.match.params.id
  const [month, setMonth] = useState({})
  const [lineitems, setLineitems] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

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
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if(shouldRedirect) {
    return <Redirect to={`/months/${monthId}`} />
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

  // const budgetTotal = (number) => {
  //   debugger
  //   let i = 0
  //   let income = 0
  //   let total = 0
  //   let expense = 0
  //   for (i; i < lineitems.length; i++) {
  //     if (number.category === "income") {
  //       income = lineitems[i].value
  //       total = total + income
  //     }
  //     if (income > 0 && number.category === "expense") {
  //       expense = lineitems[i].value
  //       total = total - expense
  //     }
  //     return total
  //   }
  // }

  const remainingToBudget = (lineitems) => {
    let income = 0
    let expense = 0
    let i = 0
    for (i; i < lineitems.length; i++) {
      if (lineitems[i].category === "income") {
        income = income + lineitems[i].value
      } else if (lineitems[i].category === "expense") {
        expense = expense + lineitems[i].value
      }
    }
    return income - expense
  }

  return (
    <div className="test">
      <MonthShow
        month = { month }
      />
    <div className="left-box">
      {lineitemTile}
    </div>
      <h5>Remaining left to Budget for this month is: ${remainingToBudget(lineitems)}</h5>
      <LineitemsForm
        onSubmit = { submitNewLineitem }
      />
    </div>
  )
}

export default MonthShowContainer
