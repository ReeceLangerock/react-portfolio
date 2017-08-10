import React from "react";

export class PortfolioPopup extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
        <div id = {`portfolio-item-${this.props.projectName}`} className ="">
          <h1>portfolio Item</h1>

        </div>
    );
  }
}
export default PortfolioPopup;
