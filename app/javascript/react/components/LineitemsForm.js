import React, { useState } from 'react'
import _ from 'lodash'
import ErrorsList from './ErrorList'

const LineitemsForm = (props) => {
  const[ errors, setErrors ] = useState({})
  const[ newLineitem, setNewLineitem ] = useState({
    category: "",
    lineitem: "",
    value: 0
  })

  const typeDropdown = ['Income', 'Expense']
  const typeOptions = typeDropdown.map((type) => <option key={type} value={type}>{type}</option>)

  const lineitemsDropdown = ['Paycheck', 'Rental Income', 'Other Income', 'Mortgage/Rent', 'Utilities', 'Insurance', 'Transportation/Gas', 'Groceries', 'Debt', 'Life Style', 'Savings', 'Giving', 'Other']
  const lineitemOptions = lineitemsDropdown.map((lineitem) => <option key={lineitem} value={lineitem}>{lineitem}</option>)

  const handleChange = (event) => {
    setNewLineitem({
      ...newLineitem,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["category", "lineitem", "value"]
    requiredFields.forEach((field) => {
      if(newLineitem[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = newLineitem
    if(validFormSubmission()){
      props.onSubmit(formPayLoad)
      setNewLineitem({
        category: "",
        lineitem: "",
        value: 0
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="trans-form">
        <ErrorsList errors={errors} />
        <label>
          INCOME OR EXPENSE?
          <select
            name="category"
            id="category"
            type="text"
            value={newLineitem.category}
            onChange={handleChange}
          >
            <option></option>
            {typeOptions}
          </select>
        </label>

        <label>CATEGORIES
          <select
            name="lineitem"
            id="lineitem"
            type="text"
            value={newLineitem.lineitem}
            onChange={handleChange}
          >
            <option></option>
            {lineitemOptions}
          </select>
        </label>

        <label>VALUE
          <input
            name="value"
            id="value"
            type="text"
            value={newLineitem.value}
            onChange={handleChange}
          />
        </label>

        <input
          type="submit"
          className="button"
          value="SUBMIT BUDGET"
        />
      </form>
    </div>
  )
}

export default LineitemsForm
