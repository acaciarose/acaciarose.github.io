import React from "react";
import "./SkillSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//Display "hard skills" - specific languages and technologies and proficiency rating. 

export default function HardSkills() {

    return (
      <div className="main" id="hardskills">
      <div className="skills-main-div">
        <div className="hard-skills-text-div">
          <ul className="dev-icons">
            {hardSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <FontAwesomeIcon icon={skills.skillIcon} />
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
          <div> 
          <ul className="hard-skills-list-div">
            {hardSkillDescriptions.map((desc, i) => {
              return (
                <li
                  key={i}
                  className="bullet-points"
                  name={desc}
                >
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
          </div>
        </div>


        <div className="hard-skills-text-div">
          <ul className="dev-icons">
            {hardSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <FontAwesomeIcon icon={skills.skillIcon} />
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
          <div> 
          <ul className="hard-skills-list-div">
            {hardSkillDescriptions.map((desc, i) => {
              return (
                <li
                  key={i}
                  className="bullet-points"
                  name={desc}
                >
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
          </div>
        </div>


        <div className="hard-skills-text-div">
          <ul className="dev-icons">
            {hardSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <FontAwesomeIcon icon={skills.skillIcon} />
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
          <div> 
          <ul className="hard-skills-list-div">
            {hardSkillDescriptions.map((desc, i) => {
              return (
                <li
                  key={i}
                  className="bullet-points"
                  name={desc}
                >
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
          </div>
        </div>

</div>
      </div>
    );
  }


//todo: duplicate these for each skill div and separate from code properly 

const hardSkills = [
  {
    skillName: "Skill1",
    skillIcon: faCoffee
  },
  {
    skillName: "Skill2",
    skillIcon: faCoffee
  },
  {
    skillName: "Skill3",
    skillIcon: faCoffee
  }
]

const hardSkillDescriptions =  [
  
    ["one"], 
    ["two", "three"],
    ["four", "five", "six"]

]
