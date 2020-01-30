import React from 'react';
import styled from '@emotion/styled';

import { Content } from '../../common';

const CodeContent = styled.div``;

const Code = () => {
    const hello = `.card { 
    position: relative; /* elevate links up */ 
    a { 
        position: relative; 
        z-index: 999;
    } 
}`;
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
            <CodeContent>
                <pre className="prettyprint linenums">{hello}</pre>
            </CodeContent>
        </Content>
    );
};

export default Code;
