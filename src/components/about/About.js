import React from "react";
import "./../../style/about.css";
import VisibilitySensor from "react-visibility-sensor";

var smoothScroll = require("smoothscroll");

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  scrollToContact() {
    let contact = document.getElementById("contact");
    smoothScroll(contact, 1000);
  }
  onChange(isVisible) {
    let imageContainer = this.imageContainer;
    let image = this.image;
    let text = this.text;

    if (isVisible) {
      imageContainer.classList.add("about__image-animate");
      image.classList.add("about__image-shake");
      text.classList.add("about__text-animate");
    } else {
      imageContainer.classList.remove("about__image-animate");
      image.classList.remove("about__image-shake");

      text.classList.remove("about__text-animate");
    }
  }
  render() {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} offset={{ top: 100, bottom: 250 }}>
        <section id="about">
          <div className="container ">
            <div className="about__container">
              <div
                className="about__text"
                ref={input => {
                  this.text = input;
                }}
              >
                <div className="about__text-hi bounce-in-left">
                  hi! <br />
                </div>
                <div className="about__text-main">
                  my name is <br />
                </div>
                <div className="about__text-emphasis">
                  <b>reece</b>
                  <br />
                </div>
                <div className="about__text-main"> and I'm a chicago based</div>
                <div className="about__text-emphasis ">
                  front-end developer<br />
                </div>{" "}
                <div className="about__text-main">
                  take a look around and let me know below <i className="fa fa-arrow-down toBottom" aria-hidden="false" onClick={this.scrollToContact} /> if you have any questions!
                </div>
              </div>
              <div
                className="about__image"
                ref={input => {
                  this.imageContainer = input;
                }}
              >
                <img
                  alt="about-me"
                  ref={input => {
                    this.image = input;
                  }}
                  src={require("./../../assets/images/rocket.svg")}
                />
              </div>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default About;
