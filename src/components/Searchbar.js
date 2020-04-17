import React from "react";
import { MDBCol } from "mdbreact";

const searchbar = ({ filter }) => {
  const style = {
    paddingTop: "15px",
    // paddingBottom: "20px",
    zIndex: 1,
  };
  return (
    <MDBCol md='6' className='offset-md-3 position-fixed' style={style}>
      <input className='form-control' placeholder='Search' onChange={filter} />
    </MDBCol>
  );
};

export default searchbar;
