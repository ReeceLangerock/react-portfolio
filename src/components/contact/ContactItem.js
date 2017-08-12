import React from "react";

export class ContactItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleIconClick = this.handleIconClick.bind(this);
  }
handleIconClick(link) {
  if(link.includes('mailto')){
     window.location.href = link
  
  } else {
  window.open(
    link,"_blank"
  )
  } 
    }
  render() {
    
    return (

        <div className="contact__icon">
         
          <img src = {require(`./../../assets/contact-icons/${this.props.svgName}.svg`)} onClick = {()=>this.handleIconClick(this.props.urlLink)} />
        </div>

    );
  }
}
export default ContactItem;
