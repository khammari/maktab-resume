import React, { Component } from "react";
import data from "./data.json";
import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import SnowStorm from "react-snowstorm";
import FullPage from "./components/Fullpage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <FullPage className="first">
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
        <div className="fullpage first">
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
        </div>
        <div className="fullpage second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return (
                <p>
                  {p.content}
                  <br />
                  {p.content2}
                  <br />
                  {p.content3}
                </p>
              );
            })}
          </div>
        </div>
        <div className="fullpage third">
          <div className="card inline">
            <h1>John Doe</h1>
            <img src="/images/css3.png" alt="John"></img>
            <p className="title" />
            <p>Harvard University</p>
          </div>
          <div className="card inline">
            <h1>John Doe</h1>
            <img src="/images/css3.png" alt="John"></img>
            <p className="title" />
            <p>Harvard University</p>
          </div>
          <div className="card inline">
            <h1>John Doe</h1>
            <img src="/images/css3.png" alt="John"></img>
            <p className="title" />
            <p>Harvard University</p>
          </div>
        </div>
        {/* <SnowStorm /> */}
      </div>
    );
  }
}

export default App;
