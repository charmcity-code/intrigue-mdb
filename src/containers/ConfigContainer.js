import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import jsonData from "./testConfig.json";

class ConfigContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [],
    };
  }

  getConfig() {
    this.setState({ config: jsonData });
  }

  componentDidMount() {
    this.getConfig();
  }

  render() {
    const showConfig = this.state.config.map((config) => (
      <MDBCard
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "10px",
          paddingLeft: "4px",
          backgroundColor: "#cfcfcf",
        }}
      >
        <MDBCard.Title>Setting: {config.setting}</MDBCard.Title>
        <MDBCard.Text>Password: {config.value}</MDBCard.Text>
        <MDBCard.Text>Details: {config.comment}</MDBCard.Text>
      </MDBCard>
    ));

    return <div>{showConfig}</div>;
  }
}

export default ConfigContainer;
