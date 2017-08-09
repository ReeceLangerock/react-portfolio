import React from "react";
import "./../../style/hero.css"

export class Hero extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className = "hero">
        <div className = "hero__title">
        <h1>Reece Langerock</h1>
          
           </div>
          </div>

    );
  }
}
export default Hero;