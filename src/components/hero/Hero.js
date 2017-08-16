import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./../../style/hero.css";

export class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    document.getElementById("text-container").classList.toggle("hero__text-container-visible");
  }
  onChange(isVisible) {
    // Need to figure out best way to pass this to navigation, might have to resort to setting up redux
  }
  render() {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true}>

        <div className="hero">
          <div className="hero__text-container" id="text-container">
            <div className="hero__title" id="page-title">
              Reece Langerock

            </div>
            <div className="hero__subtitle" id="page-title">
              Front End Developer

            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
export default Hero;
