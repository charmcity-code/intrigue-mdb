import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const tasks = ({ clicked, pretty_name, description }) => {
  return (
    <MDBCol className='task' onClick={clicked}>
      <MDBCard style={{ backgroundColor: "#d2d7EB" }}>
        <MDBCardBody>
          <MDBCardTitle>{pretty_name}</MDBCardTitle>
          <MDBCardText>Description: {description}</MDBCardText>

          <MDBBtn style={{ float: "right" }} href='#'>
            <MDBIcon icon='angle-double-right' />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  );
};

export default tasks;
