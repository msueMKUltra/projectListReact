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
        name: {
          value: "",
          type: "text",
          placeholder: "project name"
        },
        leader: {
          value: "",
          type: "text",
          placeholder: "project leader"
        },
        members: {
          value: 1,
          type: "number",
          placeholder: null
        },
        start: {
          value: this.formatTime(),
          type: "date",
          placeholder: null
        },
        end: {
          value: this.formatTime(),
          type: "date",
          placeholder: null
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

  formatTime() {
    const time = new Date(Date.now());
    const year = time.getFullYear();
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const date = ("0" + time.getDate()).slice(-2);
    return year + "-" + month + "-" + date;
  }

  changeInput(event) {
    const form = { ...this.state.form };
    form[event.target.name].value = event.target.value;
    this.setState({ form });
  }

  renderForm() {
    const form = this.state.form;
    return Object.keys(form).map((info, i) => (
      <FormGroup row key={"new_" + i}>
        <Label for={"project" + "_" + info + "_new"} sm={2}>
          {info}
        </Label>
        <Col sm={10}>
          <Input
            type={form[info].type}
            name={info}
            id={"project" + "_" + info + "_new"}
            value={form[info].value}
            placeholder={form[info].placeholder}
            onChange={this.changeInput.bind(this)}
          />
        </Col>
      </FormGroup>
    ));
  }

  triggerNew() {
    const form = { ...this.state.form };
    this.props.onNew(form);
    form.name.value = "";
    form.leader.value = "";
    form.members.value = 1;
    form.start.value = this.formatTime();
    form.end.value = this.formatTime();
    this.setState({ form });
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
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
            <Button color="success" onClick={this.triggerNew.bind(this)}>
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
