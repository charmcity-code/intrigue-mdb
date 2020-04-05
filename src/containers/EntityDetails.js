import React, { Component } from "react";

class EntityDetails extends Component {
  render() {
    let entity = "Create Entity";
    console.log(this.props.index);

    if (this.props.index) {
      entity = <h1>{this.props.index}</h1>;
    }
    return entity;
  }
}

export default EntityDetails;
