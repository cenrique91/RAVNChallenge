import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    isLogged: false
  };
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            RAVN Challenge
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId"></div>
        </nav>
      </header>
    );
  }
}
