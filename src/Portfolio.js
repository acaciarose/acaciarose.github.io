import "./Portfolio.css"
import React, {Component} from "react";
import Header from "./Header";
import Bio from "./Bio";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Projects from "./Projects";
import Credits from "./Credits.js";
import Personal from "./Personal.js";

//Main "mission control".

export default class Portfolio extends Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Bio />
            <SoftSkills />
             <HardSkills /> 
             <Projects />
             <Personal />
             <Credits />
            </div>
          );
    }
}