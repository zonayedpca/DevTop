import React from 'react';

import { Content } from '../../common';

const Image = () => {
    const tools = () => (
        <>
            <li>Loved</li>
            <li>Sort</li>
        </>
    );

    return (
        <Content title="Image" renderTools={tools}>
            <p>Image</p>
        </Content>
    );
};

export default Image;
