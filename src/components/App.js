import React, { Component, Fragment } from "react";
import Welcome from "./Welcome";
import Articles from "./Articles";
import "../assets/scss/index.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Articles />
      </Fragment>
    );
  }
}
