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
        <p>
          An essential desktop tool for the developers. Easy access to the
          necessary tools like copy-paste history, gist manager , short-link
          manager, todos and bookmarks. Just one click away! Supported in all
          the major platform. Many more to come!
        </p>
      </div>
    </>
  );
};

export default Intro;
