import React from "react";

export class ContactItem extends React.Component {

  render() {
    return (

        <div className="">
          <h1>Portfolio</h1>
          <img src = {require(`./../../assets/contact-icons/${this.props.svgName}.svg`)}/>
        </div>

    );
  }
}
export default ContactItem;
