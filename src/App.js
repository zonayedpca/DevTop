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
              <li>Github</li>
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
                <p>DevTop</p>
                <span>Some details here!</span>
              </li>
              <li>
                <p>Current Version</p>
                <span>Your OS!</span>
              </li>
              <li>
                <p>Download Button</p>
                <span>Other Downloads</span>
              </li>
              <li></li>
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
            <li>Electron</li>
            <li>
              <a>Links</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Made By Zonayed Ahmed</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
