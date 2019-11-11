import React from 'react';
import styled from '@emotion/styled';

const ContentMain = styled.div`
    padding: 35px;
`;

const Content = ({ children }) => {
    return <ContentMain>{children}</ContentMain>;
};

export { Content };
