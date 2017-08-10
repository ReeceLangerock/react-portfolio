import React from "react";
import ContactItem from './ContactItem'

export class Contact extends React.Component {
  render() {
    return (
      <section id="section-contact">
        <div className ="">
          <ContactItem svgName = "linkedin"/>
          <ContactItem svgName = "email"/>
          <ContactItem svgName = "github"/>



        </div>
      </section>
    );
  }
}
export default Contact;
