import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import Project from "./project";
import New from "./new";

class ProjectList extends Component {
  state = {
    title: ["id", "name", "leader", "info", "--", "--"],
    project: [
      {
        id: 0,
        name: "project1",
        leader: "jason",
        detail: {
          start: "2018-08-01",
          end: "2018-08-31",
          members: "3"
        }
      },
      {
        id: 1,
        name: "project2",
        leader: "williams",
        detail: {
          start: "2018-09-01",
          end: "2018-09-30",
          members: "4"
        }
      }
    ]
  };

  handleDelete = projectId => {
    const project = this.state.project.filter(p => p.id !== projectId);
    this.setState({ project });
  };

  handleEdit = form => {
    console.log(form);
    const project = [...this.state.project];
    let index = null;
    project.map((f, i) => {
      if (f.id === form.id.value) index = i;
    });
    console.log(project);
    project[index].id = form.id.value;
    project[index].name = form.name.value;
    project[index].leader = form.leader.value;
    project[index].detail.start = form.start.value;
    project[index].detail.end = form.end.value;
    project[index].detail.members = form.members.value;
    this.setState({ project });
  };

  handleNew = form => {
    const project = [...this.state.project];
    project.push({
      id: this.state.project.length,
      name: form.name.value,
      leader: form.leader.value,
      detail: {
        start: form.start.value,
        end: form.end.value,
        members: form.members.value
      }
    });
    this.setState({ project });
  };

  render() {
    return (
      <Table>
        <thead>
          <tr>
            {this.state.title.map((title, i) => (
              <th key={i}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.project.map(project => (
            <Project
              key={project.id}
              title={this.state.title}
              project={project}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          ))}
          <tr>
            <td colSpan={this.state.title.length}>
              <New
                buttonLabel="new"
                modalTitle="New project"
                className=""
                onNew={this.handleNew}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ProjectList;
