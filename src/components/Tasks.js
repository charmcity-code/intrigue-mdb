import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const tasks = (props) => {
  return (
    <MDBCol className='task' onClick={props.clicked}>
      <MDBCard style={{ backgroundColor: "#d2d7EB" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.pretty_name}</MDBCardTitle>
          {/* <MDBCardText>Type: {props.type}</MDBCardText>
          <MDBCardText>Passive: {String(props.passive)}</MDBCardText> */}
          <MDBCardText>Description: {props.description}</MDBCardText>
          <MDBCardText>References: {props.references}</MDBCardText>

          <MDBCardText>Allowed Types: {props.allowed_types}</MDBCardText>
          <MDBCardText>Example Entities: {props.example_entities}</MDBCardText>
          <MDBBtn href='#'>---></MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  );
};

export default tasks;
