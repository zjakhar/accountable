import React from 'react'

const LineitemTile = (props) => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteLineitem(props.lineitemData.id)
  }

  return (
    <div className="budget-item">
      <li className = "lineitem">{props.lineitemData.lineitem}: {props.lineitemData.value}</li>
      <input onClick={handleDelete} className="delete-button" type="submit" value="Delete Item"/>
    </div>
  )
}

export default LineitemTile
