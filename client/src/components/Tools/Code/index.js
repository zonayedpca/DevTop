import React from 'react';

import { Content } from '../../common';

const Code = () => {
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
        <Content title="Code" renderTools={tools}>
            <p>Code</p>
        </Content>
    );
};

export default Code;
