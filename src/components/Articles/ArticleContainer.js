import React, { Component } from "react";
import Article from "./Article";
import "./ArticleContainer.scss";

export default class ArticleContainer extends Component {
  render() {
    return (
      <div className="articles">
        <Article />
        <Article />
        <Article />
        {/* map */}
      </div>
    );
  }
}
