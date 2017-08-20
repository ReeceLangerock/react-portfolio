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
          <i className={`fa fa-${this.props.iconName}`} aria-hidden="false" onClick = {()=>this.handleIconClick(this.props.urlLink)}></i>
         
        </div>

    );
  }
}
export default ContactItem;
