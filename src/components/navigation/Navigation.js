import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
            <Nav >
              <a href ="#profile">Profile</a>
              <a href ="#test">Test</a>
              <a href ="#test">Test</a>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/draftboard">
              <NavItem eventKey={1} >Draftboard</NavItem>
            </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
