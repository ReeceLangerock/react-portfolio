import React from "react";
import ContactItem from './ContactItem'
import "./../../style/contact.css"

export class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <h1>Contact</h1>
        <h1>Contact</h1>
        <h1>Contact</h1>

                  <div className = "contact__icon-container">

          <ContactItem svgName = "linkedin" urlLink = "https://www.linkedin.com/in/reece-langerock/"/>
          <ContactItem svgName = "email" urlLink = "mailto:reecelangerock@gmail.com"/>
          <ContactItem svgName = "github" urlLink = "https://github.com/ReeceLangerock"/>

        </div>
      </section>
    );
  }
}
export default Contact;
