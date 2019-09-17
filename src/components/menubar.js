import React from "react";

import logo from "../assets/logo.png";

const Menubar = () => {
  return (
    <div className="nav">
      <div className="brand">
        <img alt="DevTop" src={logo} />
        <p>DevTop Essentials</p>
      </div>
      <div className="details">
        <ul>
          <li>
            <a
              target="__blank"
              rel="noopener noreferrer"
              href="https://github.com/zonayedpca/DevTop"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
