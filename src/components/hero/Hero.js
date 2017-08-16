import React from "react";
import "./../../style/hero.css"

export class Hero extends React.Component {
  componentDidMount(){
    document.getElementById("text-container").classList.toggle('hero__text-container-visible');
  }
  render() {

    return (
      <div className = "hero">
        <div className = "hero__text-container" id = "text-container">
        <div className = "hero__title" id ="page-title">
         Reece Langerock

           </div>
           <div className = "hero__subtitle" id ="page-title">
         Front End Developer

           </div>
          </div>
           </div>
          

    );
  }
}
export default Hero;
