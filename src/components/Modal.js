import React, { Component } from "react";
import EntityDetails from "../containers/EntityDetails";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal8: false,
    modal9: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    console.log(this.props);

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
          <MDBModalHeader toggle={this.toggle(8)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody>
            <EntityDetails
              type={this.props.type}
              name={this.props.name}
              options={this.props.options}
              references={this.props.references}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={this.toggle(8)}>
              Close
            </MDBBtn>
            <MDBBtn color='primary'>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
