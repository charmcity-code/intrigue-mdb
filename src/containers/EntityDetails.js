import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
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
    const style = { backgroundColor: "#d2d7EB" };

    return (
      <MDBCol>
        <MDBCard style={style}>
          <MDBCardBody>
            <MDBCardTitle>{entity}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default EntityDetails;
