import React from "react";
import "./SkillSection.css";

//Show author information.

export default function Credits() {
  return (
      <div>
          <br></br>
        <p className={"main-grey-text"}>
          {"designed and written by acacia.codes"}
        </p>
        <p className={"main-grey-text"}>
          some CSS from <a href="https://github.com/saadpasta/developerFolio"> developerFolio </a>
        </p>
      </div>
  );
}
