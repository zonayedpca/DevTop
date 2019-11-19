import React from 'react';

import { Content, Item } from '../../common';

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
            <div className="shortlink-content">
                <Item
                    type="link"
                    content="https://www.twenty20.com/photos/5f22-nature-tree"
                />
                <Item
                    type="link"
                    content="https://reactjs.org/docs/getting-started.html"
                />
                <Item
                    type="link"
                    content="https://www.twenty20.com/photos/5f22-nature-tree"
                />
                <Item
                    type="link"
                    content="https://reactjs.org/docs/getting-started.html"
                />
            </div>
        </Content>
    );
};

export default Shortlink;
