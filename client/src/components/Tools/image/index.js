import React from 'react';

import { Content } from '../../common';

const Image = () => {
    const tools = () => (
        <>
            <li>
                <img
                    alt="favorite"
                    src={require('../../../assets/icon/grid.svg')}
                />
            </li>
            <li>
                <img
                    alt="favorite"
                    src={require('../../../assets/icon/love.svg')}
                />
            </li>
            <li>
                <img
                    alt="favorite"
                    src={require('../../../assets/icon/down.svg')}
                />
            </li>
        </>
    );

    return (
        <Content title="Image" renderTools={tools}>
            <p>Image</p>
        </Content>
    );
};

export default Image;
