import React from "react";

import { Navbar, Nav,NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./../../style/floating-navigation.css"
import NavItem from './NavItem';
import ReactDOM from "react-dom";

class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.handleBarClick = this.handleBarClick.bind(this);
  }

  handleBarClick(){
    console.log('clikced');
    document.getElementById('navigation-bars').classList.toggle('navigation__bars-selected');
    document.getElementById('navigation-menu').classList.toggle('navigation__menu-hidden');
    document.getElementById('navigation-links').classList.toggle('navigation__links-hidden');
    
  
    }

  render() {
    return (
      <header className ="navigation">
        <div className="navigation__container">   
        <div className = "navigation__menu" id = "navigation-menu" onClick={this.handleBarClick}>Menu</div>
        <ul className = "navigation__links navigation__links-hidden" id= "navigation-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
        
        {/* <div className = "navigation-menu navigation__menu-hidden" id = "navigation-menu-hidden">
          <div> 
          About</div>
          <div> 
          About</div>
          <div> 
          About</div>
          </div> */}
     
         <div className = "navigation__bars" onClick={this.handleBarClick} id = "navigation-bars">
        <i className="fa fa-bars"  aria-hidden="false"></i>
      </div>
      </div>
      </header>
    );
  }
}

export default Navigation;
