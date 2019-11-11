import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const RootMain = styled.div`
    border-bottom: dotted 2px #333;
`;

const Root = ({ children }) => {
    return (
        <RootMain>
            <Global
                styles={css`
                    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap');

                    :root {
                        --primary-color: #201659;
                        --primary-light-color: #9087c0;
                        --secondary-color: #6040ff;
                        --secondary-light-color: #00ffea;
                    }

                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        font-family: 'Open Sans', sans-serif;
                        font-weight: 400;
                    }
                `}
            />
            {children}
        </RootMain>
    );
};

export { Root };
