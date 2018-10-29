import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen_value: 0,
      number_a: 0,
      number_b: 0
    };
  }

  render() {
    return (
      <div>
        <div
          className="trademark"
          style={{ fontSize: "11px", color: "#a0a0a0" }}
        >
          basic calculator™
        </div>
        <span className="screen">{this.state.screen_value}</span>
        <hr />
        <div className="buttons">
          <div className="button" onClick={this.click_0}>
            0
          </div>
          <div className="button" onClick={this.click_1}>
            1
          </div>
          <div className="button" onClick={this.click_2}>
            2
          </div>
          <div className="button" onClick={this.click_3}>
            3
          </div>
          <div className="button" onClick={this.click_4}>
            4
          </div>
          <div className="button" onClick={this.click_5}>
            5
          </div>
          <div className="button" onClick={this.click_6}>
            6
          </div>
          <div className="button" onClick={this.click_7}>
            7
          </div>
          <div className="button" onClick={this.click_8}>
            8
          </div>
          <div className="button" onClick={this.click_9}>
            9
          </div>
          <div className="button" onClick={this.click_plus}>
            +
          </div>
          <div className="button" onClick={this.click_minus}>
            -
          </div>
          <div className="button" onClick={this.click_equals}>
            =
          </div>
        </div>
      </div>
    );
  }

  click_0() {
    console.log("clicked 0");
  }

  click_1() {
    console.log("clicked 1");
  }
  click_2() {
    console.log("clicked 2");
  }
  click_3() {
    console.log("clicked 3");
  }
  click_4() {
    console.log("clicked 4");
  }
  click_5() {
    console.log("clicked 5");
  }
  click_6() {
    console.log("clicked 6");
  }
  click_7() {
    console.log("clicked 7");
  }
  click_8() {
    console.log("clicked 8");
  }
  click_9() {
    console.log("clicked 9");
  }

  click_plus() {
    console.log("clicked plus");
  }

  click_minus() {
    console.log("clicked minus");
  }

  click_equals() {
    console.loog("clicked equals");
  }
}
