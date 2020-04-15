import React from "react";
import jsonData from "../containers/testConfig.json";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const ConfigContainer = () => {
  return jsonData.map((config, index) => (
    <MDBCol key={index}>
      <MDBCard style={{ backgroundColor: "#d2d7EB", width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Setting: {config.setting}</MDBCardTitle>
          <MDBCardText>Password: {config.password}</MDBCardText>
          <MDBCardText>Details: {config.details}</MDBCardText>
          <MDBBtn href='#'>---></MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  ));
};
export default ConfigContainer;
