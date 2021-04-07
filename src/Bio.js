import React from "react";
import logo from './logo.svg';
import "./Bio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


//Show title text, biography and image.
//Todo: Add proper email form for "request my CV"

export default function Bio() {
  return (
      <div className="bio-main" id="greeting">
        <div className="bio-main">
            <div>
              <h1 className={"bio-title"}>
                {"hello."}
              </h1>
              <p className={"bio-text-paragraph"}>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              </p>
              <p className = {"bio-text-contact"}>
              {"Get in touch via my LinkedIn:"}{"  "} 
                {
                <a href="https://www.linkedin.com/in/acacia-rudd/">
                <FontAwesomeIcon icon={faCoffee}  />
                </a>
                }
              </p>
              <p className = {"bio-text-contact"}>
              {"Request my CV:"}{"  "} 
                {
                <a href="https://www.linkedin.com/in/acacia-rudd/">
                <FontAwesomeIcon icon={faCoffee}  />
                </a>
                }
              </p>
            </div>
          <div className="bio-image-div">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
  );
}
