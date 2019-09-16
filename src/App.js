import React from "react";

import logo from "./assets/logo.png";
import intro from "./assets/intro.svg";

import clipboard from "./assets/clipboard.png";
import code from "./assets/code.png";
import shortlink from "./assets/shortlink.png";
import todo from "./assets/todo.png";
import bookmark from "./assets/bookmark.png";
import more from "./assets/more.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
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
        <div className="intro">
          <div className="img">
            <img alt="DevTop Features" src={intro} />
          </div>
          <div className="download">
            <ul>
              <li>
                <p>DevTop Essentials</p>
                <span>Download Now</span>
              </li>
              <li>
                <p>v0.7.0-beta</p>
                <span>
                  <a href="#">See Release Notes</a>
                </span>
              </li>
              <li>
                <p>Windows (64-bit)</p>
                <span>Your Platform</span>
              </li>
              <li>
                <p>
                  <a className="btn" href="#">
                    Download
                  </a>
                </p>
                <span>
                  <a href="#">Other Downloads</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meta">
          <p>Some Details Should go there!</p>
        </div>
      </header>
      <div className="features">
        <div className="feature">
          <div className="ui">
            <img alt="clipboard" src={clipboard} />
          </div>
          <div className="description">
            <h2>Clipboard Manager</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
        <div className="feature reverse">
          <div className="ui">
            <img alt="code" src={code} />
          </div>
          <div className="description">
            <h2>Gist Manager</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
        <div className="feature">
          <div className="ui">
            <img alt="shortlink" src={shortlink} />
          </div>
          <div className="description">
            <h2>Bitly Shortener</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
        <div className="feature reverse">
          <div className="ui">
            <img alt="todo" src={todo} />
          </div>
          <div className="description">
            <h2>Todo List</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
        <div className="feature">
          <div className="ui">
            <img alt="bookmark" src={bookmark} />
          </div>
          <div className="description">
            <h2>Bookmark Manager</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
        <div className="feature reverse">
          <div className="ui">
            <img alt="more" src={more} />
          </div>
          <div className="description">
            <h2>Many more to come...</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <ul>
              <li>One Feature</li>
              <li>One Feature</li>
              <li>One Feature</li>
            </ul>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
