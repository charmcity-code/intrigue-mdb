import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from 'mdbreact';

const Machine = ({ onMachineUpdate }) => {
  const style = { backgroundColor: '#d2d7EB' };
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([
    { label: 'Loading...', value: '' },
  ]);
  const [value, setValue] = useState('external_discovery_light_active');
  const selected = machines.find((mac) => mac.value === value);

  useEffect(() => {
    onMachineUpdate(value);
  }, [value, onMachineUpdate]);

  useEffect(() => {
    const machineList = fetch('https://localhost:7777/api/v1/machines');
    let unmounted = false;
    machineList
      .then((res) => res.json())
      .then((data) => {
        if (!unmounted) {
          setMachines(
            data.result
              .filter((machine) => machine.user_selectable)
              .map((machine) => ({
                label: machine.pretty_name,
                value: machine.name,
                description: machine.description,
              }))
          );
        }
      });
    setLoading(false);
    return () => {
      unmounted = true;
    };
  }, []);

  const handleMachineSelection = (e) => {
    setValue(e.currentTarget.value);
    // updates state in parent component
    onMachineUpdate(value);
  };

  return (
    <MDBCol style={{ paddingTop: '15px' }}>
      <MDBCard style={style}>
        <MDBCardBody>
          <b>Machine Name:</b>
          <select
            disabled={loading}
            className='browser-default custom-select'
            onChange={(e) => handleMachineSelection(e)}
          >
            {machines.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <MDBCardText style={{ paddingTop: '10px' }}>
            {selected ? selected.description : ''}
          </MDBCardText>
          <MDBBtn style={{ float: 'right' }} size='sm' href='#'>
            <MDBIcon icon='fas fa-server' />
            {'  '}
            Run with Machine
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Machine;
