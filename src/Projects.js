import React from "react";
import "./Projects.css";
import logo from './logo.svg';

//Main portfolio section with example projects.

export default function Projects() {
    function openUrlInNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
      }

  return (
      <div className="main" id="projects">
        <div className="achievement-main-div">
          <div>
            <h1
              className={"heading main-heading"}
            >
              {"my projects"}
            </h1>
          </div>
          <div className="project-tiles-div">
            {projectInfos.map((project, i) => {

              return (
                <div key={i} className={"project-tile"}>
                    <div>
                        <h5 className={"project-title"}>
                            {project.title}
                        </h5>
                        <p className={"project-description"}>
                            {project.description}
                        </p>
                    </div>
                    <div className="project-image-div">
                        <img src={project.image} alt="PWA" className="project-image"></img>
                    </div>
                    <div className="project-tile-footer">
                    {
                        <span
                        key={i}
                        className={"project-link"}
                        onClick={() => openUrlInNewTab(project.link)}
                        >
                        {"Click here for more..."}
                        </span>
                    }
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}



const projectInfos = [
    {
      title: "Project Title",
      description:
        "Project description here",
      image: logo,
      link: "https://github.com/acaciarose/HangMan"
    },

    {
      title: "Project 2 Title",
      description: "Project 2 description also goes here",
      image: logo,
      link: 
            "https://github.com/acaciarose/HangMan"
    }
  ]

