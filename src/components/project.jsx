import React, { Component } from "react";
import { Button } from "reactstrap";
import Delete from "./delete";
import Detail from "./detail";
import Edit from "./edit";

class Project extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th scope="row">{this.props.project.id}</th>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.leader}</td>
        <td>
          <Detail
            buttonLabel="more"
            modalTitle="More information"
            className=""
            project={this.props.project}
          />
        </td>
        <td>
          <Edit
            buttonLabel="edit"
            modalTitle="Edit information"
            className=""
            project={this.props.project}
            triggerEdit={this.props.onEdit}
          />
        </td>
        <td>
          <Delete
            buttonLabel="delete"
            modalTitle="Delete project"
            className=""
            project={this.props.project}
            triggerDelete={this.props.onDelete}
          />
        </td>
      </tr>
    );
  }
}

export default Project;
