import React, { useState, useEffect } from "react";
import Machine from "../components/Machine";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBListGroup,
  MDBIcon,
} from "mdbreact";

const EntityDetails = (props) => {
  const [entity, setEntity] = useState(props);
  const [showMachine, setShowMachine] = useState(false);
  const [value, setValue] = useState(props.allowed_types[0]);
  const onClick = () => setShowMachine(true);

  const handleTaskRunnerClick = () =>
    console.log({
      project_name: "testxx",
    });

  const style = { backgroundColor: "#d2d7EB" };

  // filter options with a boolean value
  const booleanOptions = !props.options
    ? []
    : props.options.filter((option) => option.regex === "boolean");

  useEffect(() => {
    setEntity(props);
  }, [props]);

  // if (!props.options) return null;

  // get references if not null
  const references = !entity.references
    ? []
    : entity.references.map((reference, i) => (
        <li key={i}>
          <a href={reference} rel='noopener noreferrer' target='_blank'>
            {" "}
            Reference {i + 1}
          </a>
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

  // show options if not null
  const options = !booleanOptions
    ? []
    : booleanOptions
        // .filter((option) => option.regex === "boolean")
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
    <>
      <MDBCol>
        <MDBCard style={style}>
          <MDBCardBody>
            <MDBCardTitle>{props.pretty_name}</MDBCardTitle>
            <MDBCardText>
              <b>References:</b> {references}
            </MDBCardText>
            <MDBCardText>
              <b>Entity Type:</b> {entity.type}
            </MDBCardText>
            <MDBCardText>
              {/* dropdown for allowed entities */}
              <b>Allowed Entities:</b>
              <select
                className='browser-default custom-select'
                onChange={(e) => setValue(e.currentTarget.value)}
              >
                {entity.allowed_types.map((value, i) => (
                  <option key={i} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </MDBCardText>

            <MDBListGroup>
              <b>Options:</b>
              {options}
            </MDBListGroup>
            <MDBBtn size='sm' onClick={onClick}>
              Add Machine
            </MDBBtn>
            <MDBBtn size='sm' onClick={handleTaskRunnerClick}>
              <MDBIcon icon='fas fa-server' />
              {"  "} Run Single Task
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {showMachine ? <Machine /> : null}
    </>
  );
};

export default EntityDetails;
