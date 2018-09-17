import React, { Component } from "react";
import "./App.css";
import Navbars from "./components/navbar";
import Container from "./components/container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars />
        <Container />
      </div>
    );
  }
}

export default App;
