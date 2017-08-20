import React from "react";
import "./../../style/skills.css";

export class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <div className="skills">
          <div className="container">
            <div className="skills__title-container">
              <h1 className="skills__title">Skills</h1>
              <span className="skills__subtitle"> here's a few of the things I know</span>
            </div>
            <div className="skills__icon-container">
              <div className="skills__icon">
                <img alt="html 5" src={require(`./../../assets/skill-icons/html5.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="css" src={require(`./../../assets/skill-icons/css3.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="javascript" src={require(`./../../assets/skill-icons/javascript.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="mongo DB" src={require(`./../../assets/skill-icons/mongodb.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="react" src={require(`./../../assets/skill-icons/react.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="react router" src={require(`./../../assets/skill-icons/react-router.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="node js" src={require(`./../../assets/skill-icons/nodejs-1.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="java" src={require(`./../../assets/skill-icons/java-4.svg`)} />
              </div>
              <div className="skills__icon">
                <img alt="heroku" src={require(`./../../assets/skill-icons/heroku.svg`)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Skills;

// onClick = {()=>this.handleIconClick(this.props.urlLink)}
