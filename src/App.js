import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";
import Aside from './components/Aside'
// importando enrutamiento

import Query from './components/Query'

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Header/>
          <Aside/>
          <div>
          <Query/>
          </div>
        </Router>
      </Fragment>
    );
  }
}
