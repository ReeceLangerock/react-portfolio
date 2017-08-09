import React from "react";
import PortfolioItem from './PortfolioItem'
export class Portfolio extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <section id="section-portfolio">
        <div className ="">
          <h1>Portfolio</h1>

          <PortfolioItem item = "test"/>

          <PortfolioItem item = "test2"/>
        </div>
      </section>
    );
  }
}
export default Portfolio;
