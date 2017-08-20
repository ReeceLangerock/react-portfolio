import React from "react";
import "./../../style/about.css";

export class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about__container">
            <div className="about_text">
              <span className="about__text-hi">
                hi! <br />
              </span>
              <span className="about__text-main">my name is <br /></span>
              <span className="about__text-emphasis">
              
                <b>reece</b>
                <br />
              </span>
              <span className="about__text-main"> and I'm a chicago based</span>{" "}
              <span className="about__text-emphasis">
                <br /> front-end developer<br />
              </span>{" "}
              <span className="about__text-main">
                take a look around and let me <a>know</a> if you have any questions!
              </span>
            </div>
            <div className="about__image">
              <img alt = "about-me" src={require("./../../assets/images/temp.ico")} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
