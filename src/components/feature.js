import React from "react";

const Feature = ({ index, image, title, description, features }) => {
  return (
    <div className={`feature ${index % 2 === 0 && "reverse"}`}>
      <div className="ui">
        <img alt="title" src={image} />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feature;
