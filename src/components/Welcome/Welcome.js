import React, { Component } from "react";
import ButtonDown from "./ButtonDown";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome-text">
          <span className="welcome-text-1">Привет...</span>
          <span className="welcome-text-2">ну шо ты...</span>
        </div>
        <ButtonDown />
      </div>
    );
  }
}
