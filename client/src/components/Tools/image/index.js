import React from 'react';

import { Content, Item } from '../../common';

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
            <div className="clipboard-content">
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
                <Item
                    type="image"
                    content={require('../../../assets/image/demo.jpg')}
                />
            </div>
        </Content>
    );
};

export default Image;
