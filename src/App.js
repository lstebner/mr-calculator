import React, { Component } from "react";
import Calculator from "./calculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="calculator-main">
        <Calculator />
      </div>
    );
  }
}

export default App;
