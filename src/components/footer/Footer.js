import React from "react";
import "./../../style/footer.css";
var smoothScroll = require("smoothscroll");

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  scrollToTop() {
    let top = document.getElementById('hero');
    smoothScroll(top,1000)

  }
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer__container">
          <div>
            © {currentYear}{" "}
            <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">
              Reece Langerock
            </a>
          </div>
          <div className="toTop" onClick={this.scrollToTop}>
            <i className="fa fa-arrow-up" aria-hidden="false" />
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
