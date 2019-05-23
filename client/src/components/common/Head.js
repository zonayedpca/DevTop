import React from 'react';

import './head.css';

const Head = ({ title, children }) => (
  <div className="head">
    <h3 className="title">{title}</h3>
    <ul className="tools">
      {children}
    </ul>
  </div>
)

export { Head };
