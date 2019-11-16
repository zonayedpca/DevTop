import React from 'react';
import styled from '@emotion/styled';

const ContentMain = styled.div`
    padding: 25px;
    height: calc(100vh - 53px);
    margin-top: 53px;
    overflow-y: auto;
`;

const ContentHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #201659;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        li {
            cursor: pointer;
        }
    }
`;

const Content = ({ children, title }) => {
    return (
        <ContentMain>
            <ContentHead>
                <h2>{title}</h2>
                <ul className="actions">
                    <li>Code</li>
                    <li>Copy</li>
                </ul>
            </ContentHead>
            {children}
        </ContentMain>
    );
};

Content.defaultProps = {
    title: 'Title',
};

export { Content };
