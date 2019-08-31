import React from 'react';

import './info.css';

const Info = ({ visible, text }) => (
    <>
        {visible ? (
            <div className="info-float">
                <p>{text}</p>
            </div>
        ) : null}
    </>
);

export { Info };
