import React from "react";

export class PortfolioItem extends React.Component {
  constructor(props){
    super(props);
  }
  renderBuiltWith(){
    return this.props.itemInfo['built-with'].map((item, index) => <h5 key= {index} >{item}</h5>)
  }
  render() {

    return (
        <div  id = {`portfolio-item-${this.props.itemName}`} className ="portfolio__item">
          <h1>{this.props.itemName}</h1>
          {this.renderBuiltWith()}
          <img src = "#"/>

        </div>
    );
  }
}
export default PortfolioItem;
