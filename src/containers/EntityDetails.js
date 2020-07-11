import React, { useState, useEffect } from 'react';
import Machine from '../components/Machine';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBListGroup,
  MDBIcon,
} from 'mdbreact';

const EntityDetails = (props) => {
  const [entity, setEntity] = useState(props);
  const [showMachine, setShowMachine] = useState(false);
  const [allowedTypes, setAllowedTypes] = useState(props.allowed_types[0]);
  const [input, setInput] = useState(props.entity_name);
  const onClick = () => setShowMachine(true);
  const [machineValue, setMachineValue] = useState();

  // function to update state from child component
  const updateMachine = (machine) => {
    setMachineValue(machine);
  };

  // {
  // :project_name => "Default", # string, any valie project name, see /api/v1/projects
  // :task_name => "example", # string, see /api/v1/tasks api for a list of possible values
  // :entity_type_string => "Domain", # string, see /api/v1/entities api for a list of possible values
  // :entity_name => "test.com" # string, the name of this entity
  // :entity_details => {}, # hash of values, usually empty
  // :task_options => [{name: "value1", name2: "value2"}],  # hash of values  TODO... verify this format
  // :handler_names => [], # list of strings, see /api/v1/handlers for a list of possible values
  // :machine_name => "external_discovery_light_active", # string, a valid machine name, see /api/v1/machines for a list of valid values
  // :machine_depth => 1, # integer, max depth (can be 1-5)
  // :auto_enrich => 1, # bool, specifies whether to run the automatic entity enrichment
  // :auto_scope => 1, # bool, specifies whether to automatically scope this entity in
  // :queue_name => "task", # string specifying which queue to place the task in. best left as 'task'
  // }

  const taskResult = {
    project_name: 'Default',
    task_name: props.name,
    entity_type_string: allowedTypes,
    entity_name: input,
    entity_details: {},
    task_options: [],
    handler_names: [],
    machine_name: machineValue,
    machine_depth: 1,
    auto_enrich: 1,
    auto_scope: 1,
    queue_name: 'task',
  };

  // const postApi = `https://localhost:7777/api/v1/task_result?key=intrigue`;
  const handleTaskRunnerClick = () => {
    // const postTask = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(taskResult),
    // };

    // fetch(postApi, postTask)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
    console.log(taskResult);
  };

  const style = { backgroundColor: '#d2d7EB' };

  // filter options with a boolean value
  const booleanOptions = !props.options
    ? []
    : props.options.filter((option) => option.regex === 'boolean');

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
            {' '}
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
                onChange={(e) => setAllowedTypes(e.currentTarget.value)}
              >
                {entity.allowed_types.map((allowedTypes, i) => (
                  <option key={i} value={allowedTypes}>
                    {allowedTypes}
                  </option>
                ))}
              </select>
            </MDBCardText>

            <MDBCardText className='form-group'>
              <b>Entity Name:</b>
              <input
                type='text'
                className='form-control'
                placeholder={entity.entity_name}
                onChange={(e) => setInput(e.target.value)}
              />
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
              {'  '} Run Single Task
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {showMachine ? <Machine onMachineUpdate={updateMachine} /> : null}
    </>
  );
};

export default EntityDetails;
