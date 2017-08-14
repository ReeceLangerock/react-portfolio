import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReactDOM from "react-dom";

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>

            <Navbar.Brand>
              rlangerock
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <div style={{float:'right'}}>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>

              <a href="#profile">Profile</a>
              <a href="#contact">Contact</a>

            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
