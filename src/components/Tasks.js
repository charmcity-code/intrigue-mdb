import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const task = (props) => (
  <MDBCard
    className='task'
    style={{
      marginLeft: "15%",
      marginRight: "50%",
      marginTop: "10px",
      paddingLeft: "4px",
      backgroundColor: "#cfcfcf",
    }}
    onClick={props.clicked}
  >
    <MDBCard.Title>{props.pretty_name}</MDBCard.Title>
    <MDBCard.Text>Type: {props.type}</MDBCard.Text>
    <MDBCard.Text>Passive: {String(props.passive)}</MDBCard.Text>
    <MDBCard.Text>Description: {props.description}</MDBCard.Text>
    <MDBCard.Text>References: {props.references}</MDBCard.Text>

    <MDBCard.Text>Allowed Types: {props.allowed_types}</MDBCard.Text>
    <MDBCard.Text>Example Entities: {props.example_entities}</MDBCard.Text>
  </MDBCard>
);

export default task;
