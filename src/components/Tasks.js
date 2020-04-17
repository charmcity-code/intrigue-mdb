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

const tasks = (props) => {
  return (
    <MDBCol className='task'>
      <MDBCard style={{ backgroundColor: "#d2d7EB" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.pretty_name}</MDBCardTitle>
          <MDBCardText>Description: {props.description}</MDBCardText>

          <MDBBtn style={{ float: "right" }} href='#' onClick={props.clicked}>
            <MDBIcon icon='angle-double-right' />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  );
};

export default tasks;
