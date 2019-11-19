import React from 'react';

import { Content, Item } from '../../common';

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
            <div className="hashtag-content">
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
                <Item
                    type="hashtag"
                    content="#show #off #incredible #londom #lepra #de #gamma"
                />
            </div>
        </Content>
    );
};

export default Hashtag;
