import React from "react";  
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReactDOM from 'react-dom'

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                Mansion Men
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
    <a href ="#about">About</a>
              <a href ="#profile">Profile</a>
              <a href ="#contact">Contact</a>
          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
