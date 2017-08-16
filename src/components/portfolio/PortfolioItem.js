import React from "react";
import "./../../style/portfolio.css"

export class PortfolioItem extends React.Component {

  renderBuiltWith() {

    return this.props.itemInfo["built-with"].map((item, index) => (
        <h5 key={item+index}>{item}</h5>

    ));
  }
  render() {
    return (
      <div id={`portfolio-item-${this.props.itemName}`} className="portfolio__item">
        <img src={require("./../../assets/images/temp.ico")} />
        <div className="portfolio__item-info">
          <h1>{this.props.itemName}</h1>

        {this.renderBuiltWith()}
      </div>


      </div>
    );
  }
}
export default PortfolioItem;
