import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import SnowStorm from "react-snowstorm";
import TitleSection from './sections/TitleSection'
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import './App.css';

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
                    <TitleSection id={"first"} className="first" color={this.state.first}/>
                    <AboutSection id={"second"} className={"second"} color={this.state.second}/>
                    <SkillsSection id={"third"} className={"third"} color={this.state.third}/>
                    <SnowStorm/>
                </div>
            );
        }
    }

export default App;
