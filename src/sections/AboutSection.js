import React, { Component } from "react";
import FullPage from "../components/Fullpage";
import data from "../data.json";
import './AboutSection.css'
class AboutSection extends Component {
  render() {
    return (
      <FullPage id={"second"} className={"second"} color={this.props.color}>
        <h3>{data.sections[0].title}</h3>
        <div className="paragraphs">
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
      </FullPage>
    );
  }
}

export default AboutSection;
