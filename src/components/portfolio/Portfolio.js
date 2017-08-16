import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "./../../data/portfolio.json";
import "./../../style/portfolio.css";

export class Portfolio extends React.Component {
  renderPortfolioItems() {
    return Object.keys(portfolio).map(key => <PortfolioItem key={key} itemName={key} itemInfo={portfolio[key]} />);
  }
  render() {
    return (
      <section id="portfolio">
        <div className="">
          <div className="portfolio__container">

            <div className="container">
              <div className ="portfolio__title">
              <h1>Portfolio</h1>
            </div>

              <div className="portfolio__item-container">
                {this.renderPortfolioItems()}
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
export default Portfolio;
