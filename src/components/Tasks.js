import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import Modal from "./Modal";

const tasks = (props) => {
  return (
    <MDBCol className='task'>
      <MDBCard style={{ backgroundColor: "#d2d7EB" }}>
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>Description: {props.description}</MDBCardText>
          <Modal
            type={props.type}
            name={props.name}
            options={props.options}
            references={props.references}
          />
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  );
};

export default tasks;
