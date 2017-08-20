import React from "react";
import "./../../style/contact.css";

export class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="contact__container">
          <div className="contact__form-container">
            <span className="contact__title">Contact Me</span>
            <form method="post" action="http://www.fatcow.com/scripts/formemail.bml">
              <input type="hidden" name="my_email" value="reece@reecelangerock.com" />
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="email" placeholder="email" />
              <textarea name="name" rows="4" placeholder="message" />
              <input type="submit" name="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
