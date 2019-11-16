import React from 'react';

import { Content } from '../../common';

const Shortlink = () => {
    const tools = () => (
        <>
            <li>Loved</li>
            <li>Sort</li>
        </>
    );

    return (
        <Content title="Shortlink" renderTools={tools}>
            <p>Shortlink</p>
        </Content>
    );
};

export default Shortlink;
