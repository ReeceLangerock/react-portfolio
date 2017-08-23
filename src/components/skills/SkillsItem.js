import React from "react";

export class SkillsItem extends React.Component {
  render() {
    return (
      <div className="skills__item flip-vertical-right">
        <img alt={this.props.skillName} className="skills__item-cover" src={require(`./../../assets/skill-icons/${this.props.skillName}.svg`)} />
      </div>
    );
  }
}
export default SkillsItem;
