import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Welcome from "./Welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Welcome />
        <Welcome />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
