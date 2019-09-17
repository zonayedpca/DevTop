import React from "react";

import clipboard from "../assets/clipboard.png";
import code from "../assets/code.png";
import shortlink from "../assets/shortlink.png";
import todo from "../assets/todo.png";
import bookmark from "../assets/bookmark.png";
import more from "../assets/more.png";
import Feature from "./feature";

const contents = [
  {
    title: "Clipboard Manager",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: clipboard,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  },
  {
    title: "Gist Manager",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: code,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  },
  {
    title: "Bitly Manager",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: shortlink,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  },
  {
    title: "Todo List",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: todo,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  },
  {
    title: "Bookmark Manager",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: bookmark,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  },
  {
    title: "Many more to come...",
    description: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    in laying out print, graphic or web designs. The passage is
    attributed to an unknown typesetter in the 15th century who is
    thought to have scrambled parts of Cicero's De Finibus Bonorum et
    Malorum for use in a type specimen book.`,
    image: more,
    features: [
      "One Features",
      "Another Features",
      "One Features",
      "Another Features",
      "One Features"
    ],
    action: [
      {
        title: "info",
        link: "https://zonayed.me"
      }
    ]
  }
];

const Features = () => {
  return (
    <div className="features">
      {contents.map((content, index) => (
        <Feature key={index} {...content} index={index} />
      ))}
    </div>
  );
};

export default Features;
