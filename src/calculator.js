import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen_value: 0,
      number_a: 0,
      number_b: 0,
      operator: null
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
          <div className="button" onClick={this.click_0.bind(this)}>
            0
          </div>
          <div className="button" onClick={this.click_1.bind(this)}>
            1
          </div>
          <div className="button" onClick={this.click_2.bind(this)}>
            2
          </div>
          <div className="button" onClick={this.click_3.bind(this)}>
            3
          </div>
          <div className="button" onClick={this.click_4.bind(this)}>
            4
          </div>
          <div className="button" onClick={this.click_5.bind(this)}>
            5
          </div>
          <div className="button" onClick={this.click_6.bind(this)}>
            6
          </div>
          <div className="button" onClick={this.click_7.bind(this)}>
            7
          </div>
          <div className="button" onClick={this.click_8.bind(this)}>
            8
          </div>
          <div className="button" onClick={this.click_9.bind(this)}>
            9
          </div>
          <div className="button" onClick={this.click_plus.bind(this)}>
            +
          </div>
          <div className="button" onClick={this.click_minus.bind(this)}>
            -
          </div>
          <div className="button" onClick={this.click_equals.bind(this)}>
            =
          </div>
        </div>
      </div>
    );
  }

  click_0() {
    if (this.state.number_a) {
      this.setState({ number_a: 0 });
    } else {
      this.setState({ number_b: 0 });
    }

    console.log("clicked 0");
  }

  click_1() {
    if (this.state.number_a) {
      this.setState({ number_a: 1 });
    } else {
      this.setState({ number_b: 1 });
    }
    console.log("clicked 1");
  }
  click_2() {
    if (this.state.number_a) {
      this.setState({ number_a: 2 });
    } else {
      this.setState({ number_b: 2 });
    }
    console.log("clicked 2");
  }
  click_3() {
    if (this.state.number_a) {
      this.setState({ number_a: 3 });
    } else {
      this.setState({ number_b: 3 });
    }
    console.log("clicked 3");
  }
  click_4() {
    if (this.state.number_a) {
      this.setState({ number_a: 4 });
    } else {
      this.setState({ number_b: 4 });
    }
    console.log("clicked 4");
  }
  click_5() {
    if (this.state.number_a) {
      this.setState({ number_a: 5 });
    } else {
      this.setState({ number_b: 5 });
    }
    console.log("clicked 5");
  }
  click_6() {
    if (this.state.number_a) {
      this.setState({ number_a: 6 });
    } else {
      this.setState({ number_b: 6 });
    }
    console.log("clicked 6");
  }
  click_7() {
    if (this.state.number_a) {
      this.setState({ number_a: 7 });
    } else {
      this.setState({ number_b: 7 });
    }
    console.log("clicked 7");
  }
  click_8() {
    if (this.state.number_a) {
      this.setState({ number_a: 8 });
    } else {
      this.setState({ number_b: 8 });
    }
    console.log("clicked 8");
  }
  click_9() {
    if (this.state.number_a) {
      this.setState({ number_a: 9 });
    } else {
      this.setState({ number_b: 9 });
    }
    console.log("clicked 9");
  }

  click_plus() {
    this.setState({ operator: "plus" });
    console.log("clicked plus");
  }

  click_minus() {
    this.setState({ operator: "minus" });
    console.log("clicked minus");
  }

  click_equals() {
    this.calculate();
    console.loog("clicked equals");
  }

  calculate() {
    let result;
    if (this.state.number_a && this.state.number_b && this.state.operator) {
      if (this.state.operator == "plus") {
        result = this.state.number_a + this.state.number_b;
      }

      if (this.state.operatore == "minus") {
        result = this.state.number_a - this.state.number_b;
      }
    }

    this.setState({
      result: result,
      screen_value: result
    });
  }
}
