import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "./../../data/portfolio.json";
import "./../../style/portfolio.css"

export class Portfolio extends React.Component {
  renderPortfolioItems() {

    return Object.keys(portfolio).map(key => <PortfolioItem key = {key} itemName = {key} itemInfo={portfolio[key]} />);
  }
  render() {
    return (
      <section id="section-portfolio">
        <h1>Portfolio</h1>
        
        <div className="portfolio__container">
          {this.renderPortfolioItems()}
        </div>
      </section>
    );
  }
}
export default Portfolio;
