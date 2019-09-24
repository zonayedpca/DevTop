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
    description: `A Simple Clipboard manager to save you from copying stuff over and over again. It preserves the format and also you can pause it anytime you want. Handy time saver!`,
    image: clipboard,
    features: ["Keep exact Format", "Anytime Pause", "Easy Copy", "Remove All"]
  },
  {
    title: "Gist Manager",
    description: `Do you want to share some pieces of codes with others? Get access to your Gist from here easily. You must have to provide your GitHub personal access token with the scope of 'Create gists'. Your token is safe as we store it inside your device only.`,
    image: code,
    features: [
      "Creating New Gists",
      "Multiple File",
      "View Files Individually",
      "Copy the Link"
    ]
  },
  {
    title: "Bitly Manager",
    description: `Do want to short an URL? But it's a great hassle to go somewhere and short the URL and share it with someone. But we have got you covered. Put your Bitly access token here and we'll make your life easy. Don't get afraid as we store your token in your device only.`,
    image: shortlink,
    features: [
      "Creating new Shortlinks",
      "View Older links",
      "Copy the links",
      "Everything is stored in your account"
    ]
  },
  {
    title: "Todo List",
    description: `You can't make progress without having a todo list. I have got you covered for this one as well. Make a simple todo list and get your job done one by one.`,
    image: todo,
    features: [
      "Adding new todos",
      "Mark todo as complete",
      "Remove individual todo",
      "Remove All todos"
    ]
  },
  {
    title: "Bookmark Manager",
    description: `Liked a website/project/design? But don't have enough time to check it out? Bookmark is your friend in need. Cleanly list your favorite bookmarks and check them out later whenever you want.`,
    image: bookmark,
    features: [
      "Add Websites",
      "Remove Individually",
      "Remove All",
      "One-click to open"
    ]
  },
  {
    title: "Many more to come...",
    description: `Our feature goal is to make all the tools portable. We will create a separate ecosystem in which developers will be able to develop tools as extension and user will have the option to choose from them. Now we have only 5 tools built-in permanently. But we are looking forward to making it portable and tools as an extension based project. But until then, you can always suggest us which feature you would like to see here and also if anything from these tools seems unnecessary. Let us know.`,
    image: more,
    features: [
      "Every tool is an extension",
      "Separate Ecosystem",
      "Users are independent to choose their favorite tools",
      "No more built-in tool(or only few)"
    ],
    action: [
      {
        title: "Suggestions & Problems",
        link: "https://github.com/zonayedpca/DevTop/issues/new"
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
