import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_value: 0
    };
  }

  render() {
    return (
      <div>
        <span className="screen">{this.state.screen_value}</span>
        <hr />
        <div className="buttons">
          <div className="button">0</div>
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button">+</div>
          <div className="button">-</div>
          <div className="button">=</div>
        </div>
      </div>
    );
  }
}
