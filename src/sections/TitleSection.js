import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import FullPage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import data from "../data.json";
import "./TitleSection.css";
class TitleSection extends Component {
  render() {
    return (
      <div>
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
        </FullPage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={5}
        >
          <DownIcon icon={data.icons.down} onClik={() => console.log("sd")} />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitleSection;
