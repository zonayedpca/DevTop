import React from 'react';

import { Content } from '../../common';

const ClipBoard = () => {
    const tools = () => (
        <>
            <li>Loved</li>
            <li>Sort</li>
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
