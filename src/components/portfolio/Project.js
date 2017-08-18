import React from "react";
import "./../../style/project.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedProject } from "../../actions/actions";

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    console.log("close");

    document.getElementById("projects-container").classList.toggle("portfolio__item-container-blocked");

    this.props.setSelectedProject("NONE");
  }

  render() {
    let style = this.props.projectName === "NONE" ? "project__hidden" : "project__visible";
    return (
      <div className={`project ${style}`} id={`project${this.props.projectName}`}>
        <div className="modal-close" onClick={this.handleClose}>
          X
        </div>
        <div className="project__container">
          <div className="project__image">
            <img src={require("../../assets/test.png")} />
          </div>
          <div className="project__info">
            <h1>
              {this.props.projectName}
            </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
