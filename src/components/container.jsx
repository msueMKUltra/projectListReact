import React, { Component } from "react";
import ProjectList from "./projectList";

class Container extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <ProjectList />
      </div>
    );
  }
}

export default Container;
