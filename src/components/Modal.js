import React, { Component } from "react";
import EntityDetails from "../containers/EntityDetails";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBIcon,
} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal8: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn style={{ float: "right" }} onClick={this.toggle(8)}>
          <MDBIcon icon='angle-double-right' />
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position='right'
        >
          <MDBModalHeader toggle={this.toggle(8)}>New Task</MDBModalHeader>
          <MDBModalBody>
            <EntityDetails
              name={this.props.name}
              type={this.props.type}
              options={this.props.options}
              references={this.props.references}
            />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
