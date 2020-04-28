import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";

const EntityDetails = (props) => {
  const [entity, setEntity] = useState(props);
  const style = { backgroundColor: "#d2d7EB" };
  const booleanOptions = !props.options
    ? []
    : props.options.filter((option) => option.regex === "boolean");
  console.log(entity);

  useEffect(() => {
    setEntity(props);
  }, [props]);

  // if (!props.options) return null;

  const references = !entity.references
    ? []
    : entity.references.map((reference, i) => (
        <li key={i}>
          <a href={reference}> Reference {i + 1}</a>
        </li>
      ));

  const handleSwitchChange = (i) => {
    console.log(booleanOptions[i].default);
    console.log(!booleanOptions[i].default);

    // let switchNumber = `switch${nr}`;
    // this.setState({
    //   [switchNumber]: !this.state[switchNumber]
    // });
  };

  const options = !booleanOptions
    ? []
    : booleanOptions
        .filter((option) => option.regex === "boolean")
        .map((option, i) => (
          <div key={i} className='custom-control custom-switch'>
            <input
              type='checkbox'
              className='custom-control-input'
              id={`customSwitches_${i}`}
              // uncontrolled Component - defaultChecked
              defaultChecked={option.default}
              onChange={() => handleSwitchChange(i)}
              readOnly
            />
            <label
              className='custom-control-label'
              htmlFor={`customSwitches_${i}`}
            >
              {option.name}
            </label>
          </div>
        ));

  return (
    <MDBCol>
      <MDBCard style={style}>
        <MDBCardBody>
          <MDBCardTitle>Create Entity</MDBCardTitle>
          <MDBCardText>
            <b>References:</b> {references}
          </MDBCardText>
          <MDBCardText>
            <b>Entity Type:</b> {entity.type}
          </MDBCardText>
          <MDBCardText>
            <b>Entity Name:</b> {entity.name}
          </MDBCardText>
          <MDBListGroup>
            <b>Options:</b>
            {options}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default EntityDetails;
