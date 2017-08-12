import React from "react";

export class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="test" ref={(input) => { this.textInput = input; }}>
        <footer>
          © {currentYear} <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">Reece Langerock</a>
        </footer>
      </div>
    );
  }
}
export default Footer;
