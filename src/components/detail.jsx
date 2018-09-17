import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      info: {
        id: this.props.project.id,
        name: this.props.project.name,
        leader: this.props.project.leader,
        members: "--",
        start: "--",
        end: "--"
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  maintainDetail() {
    console.log(this.state);
    const info = this.state.info;
    const project = this.props.project;
    info.id = project.id;
    info.name = project.name;
    info.leader = project.leader;
    info.members = project.detail.members;
    info.start = project.detail.start;
    info.end = project.detail.end;
    this.toggle();
  }

  renderTitle() {
    const detail = this.state.info;
    return Object.keys(detail).map((info, i) => <th key={i}>{info}</th>);
  }

  renderInfo() {
    const detail = this.state.info;
    return Object.keys(detail).map((info, i) => (
      <td key={i}>{this.state.info[info]}</td>
    ));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.maintainDetail.bind(this)}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.modalTitle}
          </ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>{this.renderTitle()}</tr>
              </thead>
              <tbody>
                <tr>{this.renderInfo()}</tr>
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
