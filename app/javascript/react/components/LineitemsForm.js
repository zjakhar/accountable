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
          Type:
          <input
            name="category"
            id="category"
            type="text"
            value={newLineitem.category}
            onChange={handleChange}
          />
        </label>

        <h3>Line Item</h3>

        <label>Line Item
          <input
            name="lineitem"
            id="lineitem"
            type="text"
            value={newLineitem.lineitem}
            onChange={handleChange}
          />
        </label>

        <label>Value
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
          value="Submit Budget"
        />

      </form>
    </div>
  )
}

export default LineitemsForm
