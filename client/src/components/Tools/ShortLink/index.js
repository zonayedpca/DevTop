import React from 'react';

import { Content } from '../../common';

const Shortlink = () => {
    const tools = () => (
        <>
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
        <Content title="Shortlink" renderTools={tools}>
            <p>Shortlink</p>
        </Content>
    );
};

export default Shortlink;
