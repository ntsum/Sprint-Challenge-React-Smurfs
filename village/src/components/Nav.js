import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  P;

  render() {
    return (
      <div>
        <Link to="/">
          <h2>Home of the SMURFS</h2>
        </Link>
        <Link to="/smurf-form">
          <h2>Add a Smurf to the village!</h2>
        </Link>
      </div>
    );
  }
}

export default Nav;
