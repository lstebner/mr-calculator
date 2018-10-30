import React from "react";
import $ from 'jquery';
import style from "./calculator.css";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen_value: 0,
      number_a: null,
      number_b: null,
      operator: null,
      result: null,
      auto_calculate: false // disabling some code with state to i can decide if i want to keep this feature later on
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.number_a != null &&
      this.state.number_b != null &&
      this.state.operator != null &&
      this.state.result == null &&
      this.state.auto_calculate
    ) {
      this.calculate();
    } else {
      if (this.state.operator == null) {
        if (this.state.number_a != null) {
          if (this.state.screen_value != this.state.number_a) {
            this.setState({ screen_value: this.state.number_a });
          }
        }
      } else if (this.state.operator != null) {
        if (this.state.number_b == null) {
          if (this.state.screen_value == this.state.number_a) {
            if (this.state.operator == "plus") {
              this.setState({ screen_value: "+" });
            } else {
              this.setState({ screen_value: "-" });
            }
          }
        } else if (this.state.number_b != null) {
          if (
            this.state.screen_value != this.state.number_b &&
            this.state.result == null
          ) {
            this.setState({ screen_value: this.state.number_b });
          }
        }
      }

      this.mark_selected_operator()
    }
  }

  mark_selected_operator() {
    if (this.state.result === null) {
      if (this.state.operator === "plus") {
        $(".plus_operator").addClass("selected")
      }
      if (this.state.operator === "minus") {
        $(".minus_operator").addClass("selected")
      }
    }
    else {
      $(".minus_operator.selected").removeClass("selected")
      $(".plus_operator.selected").removeClass("selected")
    }
  }

  render() {
    return (
      <div className="calculator-main">
        <div
          className="trademark"
          style={{ fontSize: "11px", color: "#a0a0a0" }}
        >
          basic calculator™
        </div>
        <span className="screen">{this.state.screen_value}</span>
        <hr />
        <div className="buttons">
          <div className="button-group">
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
          </div>
          <div className="button-group">
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
          </div>
          <div className="button-group">
            <div className="button" onClick={this.click_8.bind(this)}>
              8
            </div>
            <div className="button" onClick={this.click_9.bind(this)}>
              9
            </div>
            <div className="button plus_operator" onClick={this.click_plus.bind(this)}>
              +
            </div>
            <div className="button minus_operator" onClick={this.click_minus.bind(this)}>
              -
            </div>
          </div>
          <div className="button-group">
            <div className="button" onClick={this.click_equals.bind(this)}>
              =
            </div>
            <div className="button" onClick={this.click_clear.bind(this)}>
              C
            </div>
          </div>
        </div>
      </div>
    );
  }

  click_0(e) {
    if (this.state.operator === null) {
      this.setState({ number_a: 0 });
    } else {
      this.setState({ number_b: 0 });
    }

    console.log("clicked 0");
  }

  click_1() {
    if (this.state.operator === null) {
      this.setState({ number_a: 1 });
    } else {
      this.setState({ number_b: 1 });
    }
    console.log("clicked 1");
  }
  click_2() {
    if (this.state.operator === null) {
      this.setState({ number_a: 2 });
    } else {
      this.setState({ number_b: 2 });
    }
    console.log("clicked 2");
  }
  click_3() {
    if (this.state.operator === null) {
      this.setState({ number_a: 3 });
    } else {
      this.setState({ number_b: 3 });
    }
    console.log("clicked 3");
  }
  click_4() {
    if (this.state.operator === null) {
      this.setState({ number_a: 4 });
    } else {
      this.setState({ number_b: 4 });
    }
    console.log("clicked 4");
  }
  click_5() {
    if (this.state.number_a === null) {
      this.setState({ number_a: 5 });
    } else {
      this.setState({ number_b: 5 });
    }
    console.log("clicked 5");
  }
  click_6() {
    if (this.state.operator === null) {
      this.setState({ number_a: 6 });
    } else {
      this.setState({ number_b: 6 });
    }
    console.log("clicked 6");
  }
  click_7() {
    if (this.state.operator === null) {
      this.setState({ number_a: 7 });
    } else {
      this.setState({ number_b: 7 });
    }
    console.log("clicked 7");
  }
  click_8() {
    if (this.state.operator === null) {
      this.setState({ number_a: 8 });
    } else {
      this.setState({ number_b: 8 });
    }
    console.log("clicked 8");
  }
  click_9() {
    if (this.state.operator === null) {
      this.setState({ number_a: 9 });
    } else {
      this.setState({ number_b: 9 });
    }
    console.log("clicked 9");
  }

  click_plus() {
    this.setState({ operator: "plus" }, () => {
      if (this.state.number_a !== null && this.state.number_b !== null) {
        this.calculate(false);
      }
    });
    console.log("clicked plus");
  }

  click_minus() {
    this.setState({ operator: "minus" }, () => {
      if (this.state.number_a !== null && this.state.number_b !== null) {
        this.calculate(false);
      }
    });
    console.log("clicked minus");
  }

  click_equals() {
    this.calculate();
    console.log("clicked equals");
  }

  click_clear() {
    this.setState({
      number_a: null,
      number_b: null,
      result: null,
      operator: null,
      screen_value: 0
    });
  }

  calculate(final = true) {
    let result;
    if (this.state.number_a && this.state.number_b && this.state.operator) {
      if (this.state.operator == "plus") {
        result = this.state.number_a + this.state.number_b;
      }

      if (this.state.operatore == "minus") {
        result = this.state.number_a - this.state.number_b;
      }
    }

    if (final) {
      this.setState({
        result: result,
        screen_value: result
      });
    } else {
      this.setState({
        number_a: result,
        number_b: null,
        result: null,
        screen_value: result
      });
    }
  }
}
