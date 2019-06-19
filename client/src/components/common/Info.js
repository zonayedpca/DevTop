import React from 'react';

import './info.css';

const Info = ({ visible, text }) => (
  <React.Fragment>
    {visible ? <div className="info-float">
      <p>{text}</p>
    </div> : null}
  </React.Fragment>
)

export { Info };
