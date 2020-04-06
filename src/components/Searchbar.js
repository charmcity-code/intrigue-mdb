import React from "react";
import { MDBCol } from "mdbreact";

const searchbar = (props) => {
  return (
    <MDBCol md='12'>
      <input
        className='form-control'
        placeholder='Search'
        input
        type='text'
        onChange={props.filter}
      />
    </MDBCol>
  );
};

export default searchbar;
