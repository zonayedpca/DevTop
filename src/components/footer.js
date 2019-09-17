import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>Open Source</li>
          <li>
            <a
              target="__blank"
              rel="noopener noreferrer"
              href="https://electronjs.org"
            >
              Electron JS
            </a>
          </li>
          <li>
            <a
              target="__blank"
              rel="noopener noreferrer"
              href="https://reactjs.org"
            >
              React JS
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Made with <span>❤</span> By{" "}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://zonayed.me"
          >
            Zonayed Ahmed
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
