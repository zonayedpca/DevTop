import React from "react";

import Menubar from "./menubar";
import Intro from "./intro";

const Header = () => {
  return (
    <header className="header">
      <Menubar />
      <Intro />
    </header>
  );
};

export default Header;
