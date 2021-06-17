import React from "react"
import { Button } from "reactstrap"
import { Plus } from "react-feather"
import { connect } from "react-redux"

const AddEventButton = props => {
  return (
    <Button.Ripple
      color="primary"
      
      className="d-sm-block d-none"
    >
      {" "}
      <Plus size={15} /> <span className="align-middle">Add</span>
    </Button.Ripple>
  )
}

export default AddEventButton