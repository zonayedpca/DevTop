import React from 'react';

import Item from './item';

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
            <div className="clipboard-content">
                <Item
                    type="text"
                    content="738de633-5792-46c1-baeb-b6a591f7f2ad"
                />
                <Item
                    type="text"
                    content="https://www.twenty20.com/photos/5f22-nature-tree"
                />
                <Item
                    type="text"
                    content="Creative Commons licenses are a much better and simpler way for image photographers and creators to assign..."
                />
                <Item
                    type="text"
                    content="The quick brown fox jumps over the lazy dog!"
                />
                <Item
                    type="code"
                    content=".card { position: relative;  /* elevate links up */  a { position: relative; z-index: 999; } }"
                />
            </div>
        </Content>
    );
};

export default ClipBoard;
