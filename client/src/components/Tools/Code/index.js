import React from 'react';
import styled from '@emotion/styled';

import { Content } from '../../common';

const CodeContent = styled.div`
    .str {
        color: #ec7600;
    }
    .kwd {
        color: #93c763;
    }
    .com {
        color: #66747b;
    }
    .typ {
        color: #678cb1;
    }
    .lit {
        color: #facd22;
    }
    .pun {
        color: #f1f2f3;
    }
    .pln {
        color: #f1f2f3;
    }
    .tag {
        color: #8ac763;
    }
    .atn {
        color: #e0e2e4;
    }
    .atv {
        color: #ec7600;
    }
    .dec {
        color: purple;
    }
    pre.prettyprint {
        border: 0px solid #888;
    }
    ol.linenums {
        margin-top: 0;
        margin-bottom: 0;
    }
    .prettyprint {
        background: #000;
    }
    li.L0,
    li.L1,
    li.L2,
    li.L3,
    li.L4,
    li.L5,
    li.L6,
    li.L7,
    li.L8,
    li.L9 {
        color: #555;
        list-style-type: decimal;
    }
    li.L1,
    li.L3,
    li.L5,
    li.L7,
    li.L9 {
        background: #111;
    }
    @media print {
        .str {
            color: #060;
        }
        .kwd {
            color: #006;
            font-weight: bold;
        }
        .com {
            color: #600;
            font-style: italic;
        }
        .typ {
            color: #404;
            font-weight: bold;
        }
        .lit {
            color: #044;
        }
        .pun {
            color: #440;
        }
        .pln {
            color: #000;
        }
        .tag {
            color: #006;
            font-weight: bold;
        }
        .atn {
            color: #404;
        }
        .atv {
            color: #060;
        }
    }
`;

const Code = () => {
    const codePrettier = require('../../../utils/highlighter');
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
            <script
                dangerouslySetInnerHTML={{
                    __html: ` 
    ${codePrettier}`,
                }}
            />
        </Content>
    );
};

export default Code;
