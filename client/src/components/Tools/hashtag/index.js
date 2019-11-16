import React from 'react';

import { Content } from '../../common';

const Hashtag = () => {
    const tools = () => (
        <>
            <li>Loved</li>
            <li>Sort</li>
        </>
    );

    return (
        <Content title="Hashtag" renderTools={tools}>
            <p>Hashtags</p>
        </Content>
    );
};

export default Hashtag;
