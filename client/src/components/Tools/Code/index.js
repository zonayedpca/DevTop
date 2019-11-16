import React from 'react';

import { Content } from '../../common';

const Code = () => {
    const tools = () => (
        <>
            <li>Loved</li>
            <li>Sort</li>
        </>
    );

    return (
        <Content title="Code" renderTools={tools}>
            <p>Code</p>
        </Content>
    );
};

export default Code;
