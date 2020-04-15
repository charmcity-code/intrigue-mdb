import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const EntityDetails = ({ index }) => {
  const style = { backgroundColor: "#d2d7EB" };

  return (
    <MDBCol>
      <MDBCard style={style}>
        <h1>Create Entity</h1>
        <MDBCardBody>
          <MDBCardTitle>{index}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default EntityDetails;
