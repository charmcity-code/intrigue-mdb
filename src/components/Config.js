import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const config = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ backgroundColor: "#d2d7EB", width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Setting: {props.setting}</MDBCardTitle>
          <MDBCardText>Password: {props.password}</MDBCardText>
          <MDBCardText>Details: {props.details}</MDBCardText>
          <MDBBtn href='#'>---></MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <br />
    </MDBCol>
  );
};

export default config;
