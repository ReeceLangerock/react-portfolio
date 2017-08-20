import React from "react";
import "./../../style/portfolio.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedProject } from "../../actions/actions";

export class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopup = this.togglePopup.bind(this);
  }
  renderBuiltWith() {
    return this.props.itemInfo["built-with"].map((item, index) =>
      <h4 key={item + index}>
        {item}
      </h4>
    );
  }

  togglePopup() {
    document.getElementById("projects-container").classList.toggle("portfolio__item-container-blocked");

    this.props.setSelectedProject(this.props.itemName);
  }
  render() {
    return (
  
        <div  id={`portfolio-item-${this.props.itemName}`} className="portfolio__item" onClick={this.togglePopup}>
          <img alt = {this.props.itemName} src={require(`./../../assets/projectImages/${this.props.itemName}.png`)} />
          <div className="portfolio__item-info">
            <h2>
              {this.props.itemName}
            </h2>

            {this.renderBuiltWith()}
          </div>
        </div>
    
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);
