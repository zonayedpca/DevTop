import React from "react";

import Download from "./download";

import intro from "../assets/intro.svg";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="img">
          <img alt="DevTop Features" src={intro} />
        </div>
        <Download />
      </div>
      <div className="meta">
        <p>Some Details Should go there!</p>
      </div>
    </>
  );
};

export default Intro;
