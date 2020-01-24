import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REDUX IS SMURFIN' HARD!</h1>
        <h2>BECAUSE SMURFIN' AIN'T EASY!</h2>
        <SmurfList />
      </div>
    );
  }
}

export default App;