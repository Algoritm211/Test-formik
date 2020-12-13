import React from "react";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={ NavLink }
        to={ '/registration' }
      >
        Go to login
      </Button>
    </div>
  )
}


export default Navbar