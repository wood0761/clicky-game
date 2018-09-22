import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar fixed-top navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
        Memory Game
    </a>
    <h4 className="card-text">Score: {props.score} | Top Score: {props.topScore}</h4>
  </nav>
);

export default Nav;