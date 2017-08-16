import React from "react";

import { Navbar, Nav,NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./../../style/navigation.css"
import NavItem from './NavItem';
import ReactDOM from "react-dom";

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop > 52.2){
      document.getElementById('test').classList.add('fixed');
    } else {
      document.getElementById('test').classList.remove('fixed');
    }
  console.log(scrollTop);
  
   
}
  render() {
    return (
      <header className ="" id="test">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>

            <Navbar.Brand>
              rlangerock
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <div className = "navigation__link-container">
             
              <NavItem url="#about" linkName= "About"/>
              <NavItem url="#skills" linkName ="Skills"/>
              <NavItem url="#profile" linkName ="Profile"/>
              <NavItem url="#contact" linkName ="Contact"/>

            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Navigation;
