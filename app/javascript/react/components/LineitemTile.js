import React from 'react'

const LineitemTile = (props) => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteLineitem(props.lineitemData.id)
  }

  return (
    <div className="budget-item">
      <li className = "lineitem">{props.lineitemData.lineitem}: ${props.lineitemData.value}</li>
      <i onClick={handleDelete} className="far fa-trash-alt"></i>
    </div>
  )
}

export default LineitemTile
