import React from "react";
import { MDBCol } from "mdbreact";

const searchbar = ({ filter }) => {
  const style = {
    paddingTop: "15px",
    paddingBottom: "20px",
  };
  return (
    <MDBCol md='6' className='offset-md-3' style={style}>
      <input className='form-control' placeholder='Search' onChange={filter} />
    </MDBCol>
  );
};

export default searchbar;
