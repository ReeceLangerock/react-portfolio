import React from "react";
import ContactItem from './../contact/ContactItem'
import "./../../style/contact.css"
import "./../../style/floating-navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleBarClick = this.handleBarClick.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleBarClick() {
    document.getElementById("navigation-bars").classList.toggle("navigation__bars-selected");
    document.getElementById("navigation-menu").classList.toggle("navigation__menu-hidden");
    document.getElementById("navigation-links").classList.toggle("navigation__links-hidden");
  }

  scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <header>
        <div className="navigation">
          <div className="navigation__container">
            <div className="navigation__menu" id="navigation-menu" onClick={this.handleBarClick}>Menu</div>
            <ul className="navigation__links navigation__links-hidden" id="navigation-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="navigation__bars" onClick={this.handleBarClick} id="navigation-bars">
              <i className="fa fa-bars" aria-hidden="false" />
            </div>
          </div>
        </div>
        <div className="logo" id="logo" onClick={this.scrollToTop}>

          RL
        </div>

        <div className="contact" id="contact">

          <ContactItem svgName = "linkedin" urlLink = "https://www.linkedin.com/in/reece-langerock/"/>
          <ContactItem svgName = "email" urlLink = "mailto:reecelangerock@gmail.com"/>
          <ContactItem svgName = "github" urlLink = "https://github.com/ReeceLangerock"/>

        </div>
      </header>
    );
  }
}

export default Navigation;
