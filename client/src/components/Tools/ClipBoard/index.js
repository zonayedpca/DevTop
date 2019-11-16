import React from 'react';

import { Content } from '../../common';

const ClipBoard = () => {
    const tools = () => (
        <>
            <li>
                <img
                    alt="favorite"
                    src={require('../../../assets/icon/lovefilled.svg')}
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
        <Content title="Clipboard" renderTools={tools}>
            <p>
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard Clipboard Clipboard Clipboard Clipboard
                Clipboard Clipboard{' '}
            </p>
        </Content>
    );
};

export default ClipBoard;
