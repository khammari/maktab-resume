import React, { Component } from "react";
import FullPage from "../components/Fullpage";
import data from "../data.json";
import Card from "../components/Card"
import './SkillsSection.css'
class SkillsSection extends Component {
  render() {
    return (
      <FullPage id={"third"} className={"third"} color={this.props.color}>
        <h3>{data.sections[1].title}</h3>
        <div className="flex-grid-thirds">
          {data.sections[1].items.map(skills => {
            return (
              <Card title={skills.content.title} pic={skills.content.image} />
            );
          })}
        </div>
      </FullPage>
    );
  }
}

export default SkillsSection;
