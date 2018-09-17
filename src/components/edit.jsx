import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        id: {
          value: this.props.project.id,
          type: "text",
          readOnly: true
        },
        name: {
          value: this.props.project.name,
          type: "text",
          readOnly: true
        },
        leader: {
          value: this.props.project.leader,
          type: "text",
          readOnly: false
        },
        members: {
          value: this.props.project.detail.members,
          type: "number",
          readOnly: false
        },
        start: {
          value: this.props.project.detail.start,
          type: "date",
          readOnly: false
        },
        end: {
          value: this.props.project.detail.end,
          type: "date",
          readOnly: false
        }
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  triggerEdit() {
    this.props.triggerEdit(this.state.form);
    this.toggle();
  }

  changeInput(event) {
    const form = { ...this.state.form };
    form[event.target.name].value = event.target.value;
    this.setState({ form });
  }

  renderForm() {
    const form = this.state.form;
    return Object.keys(form).map((info, i) => (
      <FormGroup row key={this.props.project.id + "_" + i}>
        <Label
          for={"project" + "_" + info + "_" + this.props.project.id}
          sm={2}
        >
          {info}
        </Label>
        <Col sm={10}>
          <Input
            type={form[info].type}
            name={info}
            id={"project" + "_" + info + "_" + this.props.project.id}
            value={form[info].value}
            readOnly={form[info].readOnly}
            onChange={this.changeInput.bind(this)}
          />
        </Col>
      </FormGroup>
    ));
  }

  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
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
            <Form>{this.renderForm()}</Form>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.triggerEdit.bind(this)}>
              Submit
            </Button>
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
