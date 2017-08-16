import React from "react";
import "./../../style/navigation.css"

export class NavItem extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className = 'navigation__link'>
                   <a key = {this.props.url} href={this.props.url}>{this.props.linkName}</a>

    </div>
    );
  }
}
export default NavItem;
