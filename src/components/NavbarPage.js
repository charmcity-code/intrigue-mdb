import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigContainer from "../containers/ConfigContainer";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const style = { backgroundColor: "#0C2678" };
    return (
      <MDBNavbar style={style} dark expand='md'>
        <MDBNavbarBrand>
          <strong className='white-text'>Intrigue</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to='/config'>[Default]</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Start</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#!'>Single Task</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Upload File</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Configuration</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Seeds</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>Entities</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>Results</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>Issues</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Analysis</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#!'>Graph</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Domains</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Systems</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Services</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Apps</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>App Certificates</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>App Ciphers</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>App Vulns (CVE)</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>App Javascript</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>App Technology</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Export</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#!'>
                    Export Project (JSON)
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>System</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
