import React from "react";

export class SkillsItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        
      <div className="skills__item flip-vertical-right">
        <img className='skills__item-cover' src={require(`./../../assets/skill-icons/${this.props.skillName}.svg`)}/>
      </div>
     
    );
  }
}
export default SkillsItem;
