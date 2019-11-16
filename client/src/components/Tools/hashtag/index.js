import React from 'react';

import { Content } from '../../common';

const Hashtag = () => {
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
        <Content title="Hashtag" renderTools={tools}>
            <p>Hashtags</p>
        </Content>
    );
};

export default Hashtag;
