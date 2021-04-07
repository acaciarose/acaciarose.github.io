import React from "react";
import "./SkillSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//Soft skills - interpersonal skills, industry experience, etc. 

//Todo: remove duplicate code and replace with proper map
//and move data to separate file

export default function SoftSkills() {

  return (
    <div className="main" id="skills">
            <div>
            <h1 className={"heading main-heading"}>
              {"what i do best"}
            </h1>
          </div>
      <div className="skills-main-div">

      <div className="soft-skills-text-div">
            <h1 className={"skills-heading"} >
            <FontAwesomeIcon icon={faCoffee} />
            {" "}{"Skills Section"}{" "}
            </h1>
            <p>
            {skillsSection.skills1.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={"main-grey-text"}>
                    {skills}
                  </p>
                );
              })}
            </p>
          </div>

          <div className="soft-skills-text-div">
            <h1 className={"skills-heading"} >
            <FontAwesomeIcon icon={faCoffee} />
            {" "}{"Skills Section2"}{" "}
            </h1>
            <p>
            {skillsSection.skills2.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={"main-grey-text"}>
                    {skills}
                  </p>
                );
              })}
            </p>
          </div>

          <div className="soft-skills-text-div">
            <h1 className={"skills-heading"} >
            <FontAwesomeIcon icon={faCoffee} />
            {" "}{"Skills Section3"}{" "}
            </h1>
            <p>
            {skillsSection.skills3.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={"main-grey-text"}>
                    {skills}
                  </p>
                );
              })}
            </p>
          </div>

      </div>
    </div>
  );
}

const skillsSection = {
    skills1: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        "eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    ], 
    skills2: [
        "caecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "caecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an"
    
    ],
    skills3: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      "eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt" 
    ]
}
