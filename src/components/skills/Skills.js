import React from "react";
import "./../../style/skills.css";
import SkillsItem from "./SkillsItem";
import VisibilitySensor from "react-visibility-sensor";

export class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(isVisible) {
    let container1 = this.container1;
    let container2 = this.container2;
    let container3 = this.container3;
    let container4 = this.container4;

    if (isVisible) {
      container1.classList.add("fromLeft");
      container2.classList.add("fromRight");
      container3.classList.add("fromLeft");
      container4.classList.add("fromRight");
    } else {
      container1.classList.remove("fromLeft");
      container2.classList.remove("fromRight");
      container3.classList.remove("fromLeft");
      container4.classList.remove("fromRight");
    }
  }
  render() {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} offset={{ top: 100, bottom: 100 }}>
        <section id="skills">
          <div className="skills">
            <div className="container">
              <div className="skills__title-container">
                <h1 className="skills__title">Skills</h1>
                <span className="skills__subtitle"> here's a few of the things I know</span>
              </div>

              <div className="skills__container">
                <div
                  className="skills__container-child"
                  ref={input => {
                    this.container1 = input;
                  }}
                >
                  <i className="fa fa-code skills__container-icon " />

                  <div className="skills_subcontainer">
                    <div className="skills__container-header">
                      <div className="skills__container-title">
                        <span>Front-End Programming</span>
                      </div>
                    </div>
                    <div className="skills_icon-container">
                      <SkillsItem skillName="react" />
                      <SkillsItem skillName="redux" />
                      <SkillsItem skillName="javascript" />

                      <SkillsItem skillName="html5" />
                      <SkillsItem skillName="css3" />
                    </div>
                  </div>
                </div>

                <div className="skills__container-child" ref={input => {
                    this.container2 = input;
                  }}>
                  <i className="fa fa-server skills__container-icon " />

                  <div className="skills_subcontainer">
                    <div className="skills__container-header">
                      <div className="skills__container-title">
                        <span>Back-End Programming</span>
                      </div>
                    </div>
                    <div className="skills_icon-container">
                      <SkillsItem skillName="nodejs-1" />
                      <SkillsItem skillName="express-109" />

                      <SkillsItem skillName="mongodb" />
                      <SkillsItem skillName="auth0" />
                    </div>
                  </div>
                </div>

                <div className="skills__container-child" ref={input => {
                    this.container3 = input;
                  }}>
                  <i className="fa fa-code skills__container-icon " />

                  <div className="skills_subcontainer">
                    <div className="skills__container-header">
                      <div className="skills__container-title">
                        <span>Dev Ops</span>
                      </div>
                    </div>
                    <div className="skills_icon-container">
                      <SkillsItem skillName="heroku" />
                      <SkillsItem skillName="git-icon" />
                      <SkillsItem skillName="surge" />
                      <SkillsItem skillName="jest" />
                      <SkillsItem skillName="npm" />
                    </div>
                  </div>
                </div>

                <div className="skills__container-child" ref={input => {
                    this.container4 = input;
                  }}>
                  <i className="fa fa-book skills__container-icon " />

                  <div className="skills_subcontainer">
                    <div className="skills__container-header">
                      <div className="skills__container-title">
                        <span>Education </span>
                      </div>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}
export default Skills;

// onClick = {()=>this.handleIconClick(this.props.urlLink)}
