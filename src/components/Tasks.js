import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";
import Modal from "./Modal";

const tasks = (props) => {
  return (
    <MDBCol className='task'>
      <MDBCard style={{ backgroundColor: "#d2d7EB" }}>
        <MDBCardBody>
          <MDBCardTitle>
            <MDBIcon icon='fas fa-tasks' />
            {"  "}
            {props.pretty_name}
          </MDBCardTitle>
          <MDBRow>
            <MDBCol md='9'>
              <MDBCardText>
                <b>Description:</b> {props.description}
              </MDBCardText>
            </MDBCol>
            <MDBCol md='3'>
              <Modal
                type={props.type}
                pretty_name={props.pretty_name}
                options={props.options}
                references={props.references}
                allowed_types={props.allowed_types}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <br />
    </MDBCol>
  );
};

export default tasks;
