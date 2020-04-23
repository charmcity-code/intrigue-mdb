import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const EntityDetails = (props) => {
  const [entity, setEntity] = useState(props);
  const style = { backgroundColor: "#d2d7EB" };

  useEffect(() => {
    setEntity(props);
  }, [props]);

  // if no allowed_option, empty array else filter for boolean values and map
  const optionName = !entity.options
    ? []
    : entity.options
        .filter((option) => option.regex === "boolean")
        .map((option, i) => (
          <li style={{ listStyleType: "none" }} key={i}>
            {option.name}
          </li>
        ));

  return (
    <MDBCol>
      <MDBCard style={style}>
        <MDBCardBody>
          <MDBCardTitle>Create Entity</MDBCardTitle>
          <MDBCardText>
            <b>Entity Type:</b> {entity.type}
          </MDBCardText>
          <MDBCardText>
            <b>Entity Name:</b> {entity.name}
          </MDBCardText>
          <MDBCardText tag='div'>
            <b>Options:</b> {optionName}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default EntityDetails;
