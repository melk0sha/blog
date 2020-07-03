import React, { Component } from "react";
import "./ButtonDown.scss";

const animationDuration = 400;

const scrollingDown = (element, duration) => {
  let temp;
  cancelAnimationFrame(temp);
  const start = performance.now();
  const from = window.pageYOffset || document.documentElement.scrollTop;
  const to = element.parentElement.getBoundingClientRect().bottom;
  requestAnimationFrame(function step(timestamp) {
    let progress = (timestamp - start) / duration;
    1 <= progress && (progress = 1);
    window.scrollTo(0, (from + to * progress) | 0);
    1 > progress && (temp = requestAnimationFrame(step));
  });
};

export default class ButtonDown extends Component {
  render() {
    return (
      <div
        className="btn-down"
        onClick={({ currentTarget }) =>
          scrollingDown(currentTarget, animationDuration)
        }
      >
        <div className="btn-down-arrow"></div>
      </div>
    );
  }
}
