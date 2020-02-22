import React, { useState } from 'react'
import _ from "lodash"

const MonthsForm = (props) => {
  const[monthForm, setMonthForm] = useState({
    month: ""
  })

  const monthDropDown = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
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
      props.onSubmit(formPayload)
      setMonthForm({
        month: ""
      })
    }
  }

  return (
    <div className="month_form">
      <form onSubmit={ handleSubmit }>
        <label>Add New Month
          <select
            type="text"
            name="month"
            onChange={handleChange}
            value={monthForm.month}
          >
            <option></option>
            { monthOptions }
          </select>
        </label>

        <input
          type="submit"
          className="button"
          value="ADD MONTH"
        />
      </form>
    </div>
  )
}

export default MonthsForm
