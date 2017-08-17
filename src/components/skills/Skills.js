import React from "react";
import "./../../style/skills.css";

export class Skills extends React.Component {
  render() {

    return (
      <section id="skills">
        <div className ="skills container">
          <h1>Skills</h1>
          <div className = "skills__icon-container">
            <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/html5.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/css3.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/javascript.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/mongodb.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/react.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/react-router.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/nodejs-1.svg`)}  />
        </div>
        <div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/java-4.svg`)}  />
        </div><div className = "skills__icon">
          <img src = {require(`./../../assets/skill-icons/heroku.svg`)}  />
        </div>
   
        </div>

        </div>
      </section>
    );
  }
}
export default Skills;

// onClick = {()=>this.handleIconClick(this.props.urlLink)}