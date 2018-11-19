import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import './App.css';
import data from "./data.json";
import {SocialIcon} from "react-social-icons";
import SnowStorm from "react-snowstorm";
import FullPage from "./components/Fullpage"
import Card from "./components/Card";


let colors = ["burlywood", "darksalmon", "bisque", "coral", "darkgoldenrod", "darkkhaki", "lightcoral"];

    class App extends Component {
        state = {
            first: "burlywood",
            second: "darksalmon",
            third: "bisque"
        };

        changeColor = () => {
            let firstC = Math.floor(Math.random() * (Math.floor(colors.length) + 1));
            let secondC = Math.floor(Math.random() * (Math.floor(colors.length) + 1));
            let thirdC = Math.floor(Math.random() * (Math.floor(colors.length) + 1));

            this.setState(state => ({
                first: colors[firstC],
                second: colors[secondC],
                third: colors[thirdC]
            }))
        };

        render() {
            return (
                <div className="App">
                    <Navbar inverse fixedTop collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#first">React-Resume</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#first">
                                    Start
                                </NavItem>
                                <NavItem eventKey={2} href="#second">
                                    About
                                </NavItem>
                                <NavItem eventKey={2} href="#third">
                                    Skills
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" onClick={this.changeColor}>
                                    Click me!
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <FullPage id={"first"} className="first" color={this.state.first}>
                        <h1 className="title">{data.title}</h1>
                        <div>
                            <h2>{data.subtitle}</h2>
                        </div>
                        <div className="icon-wrapper">
                            {Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]}/>
                                    </div>
                                );
                            })}
                        </div>
                    </FullPage>
                    <FullPage id={"second"} className={"second"} color={this.state.second}>
                        <h3>{data.sections[0].title}</h3>
                        <div className="paragraphs">
                            {data.sections[0].items.map(p => {
                                return (
                                    <p>
                                        {p.content}
                                    </p>
                                );
                            })}
                        </div>
                    </FullPage>
                    <FullPage id={"third"} className={"third"} color={this.state.third}>
                        <h3>{data.sections[1].title}</h3>
                        <div className="flex-grid-thirds">
                            {
                                data.sections[1].items.map(skills => {
                                    return (
                                        <Card title={skills.content.title} pic={skills.content.image}>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </FullPage>
                    <SnowStorm/>
                </div>
            );
        }
    }

export default App;
