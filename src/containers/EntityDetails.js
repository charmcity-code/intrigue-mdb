import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const EntityDetails = ({ task }) => {
  const style = { backgroundColor: "#d2d7EB" };
  let entityType = task[0];
  let entityName = task[1];
  let allowedTypes = task[2];
  return (
    <MDBCol>
      <MDBCard style={style}>
        <MDBCardBody>
          <MDBCardTitle>Create Entity</MDBCardTitle>
          <MDBCardText>
            <b>Entity Type:</b> {entityType}
          </MDBCardText>
          <MDBCardText>
            <b>Entity Name:</b> {entityName}
          </MDBCardText>
          <MDBCardText>
            <b>Allowed Types:</b> {allowedTypes}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default EntityDetails;
