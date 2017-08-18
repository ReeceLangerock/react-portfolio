import React from "react";
import PortfolioItem from "./PortfolioItem";
import Project from "./Project";
import portfolio from "./../../data/portfolio.json";
import "./../../style/portfolio.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedProject } from "../../actions/actions";

export class Portfolio extends React.Component {
  renderProjects() {
    return Object.keys(portfolio).map(key => <PortfolioItem key={key} itemName={key} itemInfo={portfolio[key]} />);
  }

  renderExpandedProject() {
    if (this.props.selectedProject !== 'NONE') {
      
    }
  }
  render() {
    return (
      <section id="portfolio">
        <div className="test">
          
          <div className="portfolio__container">
                <Project  projectName = {this.props.selectedProject}/>
            
            <div className="container">
              <div className="portfolio__title">
                <h1>Portfolio</h1>
              </div>

              <div id = "projects-container" className="portfolio__item-container">
                {this.renderProjects()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  selectedProject: state.portfolioProjectReducer.selectedProject
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSelectedProject
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

