import React from "react";

//Personal stuff - my favourite programming Youtube channels, books, hobbies outside of CS, etc.

export default function Personal() {
  return (
      <div className="main" id="personal">
          <div>
            <h1 className={"heading main-heading"}>
              {"personal stuff"}
            </h1>
          </div>
        <p>
        <ul>
            {personalStuff.map((desc, i) => {
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
        </p>
      </div>
  );
}

const personalStuff =  [
  
  ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"], 
  ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"],
  ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"]

]