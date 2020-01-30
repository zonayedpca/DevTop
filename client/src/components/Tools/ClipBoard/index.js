import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Content, Item } from '../../common';
import { generateHash } from '../../../utils';

// import { clipboardSend } from '../../../actions';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const ClipBoard = () => {
    const [enable, setEnable] = useState(true);
    useEffect(() => {
        onPlay();
        ipcRenderer.on('clipboard:send', (event, data) => {
            const id = Date.now();
            // clipboardSend({ id, data });
            console.log({ id, data });
            console.log(generateHash(data));
        });
        ipcRenderer.on('clipboard:pause', () => {
            setEnable(false);
        });
        ipcRenderer.on('clipboard:play', () => {
            setEnable(true);
        });
        return () => {
            ipcRenderer.removeAllListeners('clipboard:play');
            ipcRenderer.removeAllListeners('clipboard:pause');
            ipcRenderer.removeAllListeners('clipboard:send');
        };
    });

    const onPlay = () => {
        ipcRenderer.send('clipboard:play');
    };

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
                <Item type="color" content="#1A40FF" />
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
                <Item
                    type="link"
                    content="https://reactjs.org/docs/getting-started.html"
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
