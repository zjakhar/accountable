import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import ErrorList from './ErrorList'

const EditMonthForm = (props) => {
  let monthId = props.match.params.id
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const[monthForm, setMonthForm] = useState({
    month: ""
  })

  const monthDropDown = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthOptions = monthDropDown.map((month) => <option key={month} value={month}>{month}</option>)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setMonthForm({
      ...monthForm,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
      if (monthForm["month"].trim() === ""){
        submitErrors = {
          ...submitErrors,
          ["month"]: "is blank"
        }
      }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = monthForm
    if(validFormSubmission()){
      editFetch(formPayload)
      setMonthForm({
        month: ""
      })
    }
  }

  const editFetch = (formPayload) => {
    fetch(`/api/v1/months/${monthId}`, {
      credentials: "same-origin",
      method: 'PATCH',
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
        debugger
        setMonthForm(body.month)
        setShouldRedirect(true)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if(shouldRedirect) {
    return <Redirect to ={`/months/${monthId}`} />
  }

  return(
    <div className=" edit month_form">
      <form onSubmit={ handleSubmit }>
        <label>Not the correct Month? Change Month Name here
          <select
            type="text"
            name="month"
            onChange={handleChange}
            value={monthForm.month}
          >
            <option></option>
            {monthOptions}
          </select>
        </label>

        <input
          type="submit"
          className="button"
          value="Edit Month"
        />
      </form>
    </div>
  )
}

export default EditMonthForm
