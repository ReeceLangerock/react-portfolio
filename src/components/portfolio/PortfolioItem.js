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
      <h5 key={item + index}>
        {item}
      </h5>
    );
  }

  togglePopup() {
    document.getElementById("projects-container").classList.toggle("portfolio__item-container-blocked");

    this.props.setSelectedProject(this.props.itemName);
  }
  render() {
    return (
      <div>
        <div id={`portfolio-item-${this.props.itemName}`} className="portfolio__item" onClick={this.togglePopup}>
          <img src={require("./../../assets/images/temp.ico")} />
          <div className="portfolio__item-info">
            <h1>
              {this.props.itemName}
            </h1>

            {this.renderBuiltWith()}
          </div>
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
