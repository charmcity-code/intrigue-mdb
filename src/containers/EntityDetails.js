import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

class EntityDetails extends Component {
  render() {
    let entity = "Create Entity";
    console.log(this.props.index);

    if (this.props.index) {
      entity = <h1>{this.props.index}</h1>;
    }
    return (
      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{entity}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default EntityDetails;
