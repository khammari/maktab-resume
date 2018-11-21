import React, { Component } from "react";
import FullPage from "../components/Fullpage"
import data from "../data.json";
import {SocialIcon} from "react-social-icons";
import './TitleSection.css'
class TitleSection extends Component {
  render() {
    return (
      <FullPage id={"first"} className="first" color={this.props.color}>
        <h1 className="title">{data.title}</h1>
        <div>
          <h2>{data.subtitle}</h2>
        </div>
        <div className="icon-wrapper">
          {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
                <SocialIcon url={data.links[key]} />
              </div>
            );
          })}
        </div>
        <div>
          <img src={data.icons.down} alt="down"/>
        </div>
      </FullPage>
    );
  }
}

export default TitleSection;
