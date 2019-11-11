import React from 'react';
import styled from '@emotion/styled';

const ContainerMain = styled.div`
    height: 420px;
    overflow: auto;
`;

const Container = ({ children }) => {
    return <ContainerMain>{children}</ContainerMain>;
};

export { Container };
