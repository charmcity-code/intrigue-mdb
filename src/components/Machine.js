import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Machine = () => {
  const style = { backgroundColor: "#d2d7EB" };
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([
    { label: "Loading...", value: "" },
  ]);
  const [value, setValue] = useState("External Discovery - Light, Active");
  const selected = machines.find((mac) => mac.value === value);

  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:7777/api/v1/machines")
      .then((res) => res.json())
      .then((data) => {
        if (!unmounted) {
          setMachines(
            data.result
              .filter((machine) => machine.user_selectable)
              .map((machine) => ({
                label: machine.pretty_name,
                value: machine.pretty_name,
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

  return (
    <MDBCol style={{ paddingTop: "10px" }}>
      <MDBCard style={style}>
        <MDBCardBody>
          Machine Name:
          <select
            disabled={loading}
            className='browser-default custom-select'
            onChange={(e) => setValue(e.currentTarget.value)}
          >
            {machines.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <MDBCardText style={{ paddingTop: "10px" }}>
            {selected ? selected.description : ""}
          </MDBCardText>
          <MDBBtn size='sm' href='#'>
            Run with Machine
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Machine;
