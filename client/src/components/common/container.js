import React from 'react';
import styled from '@emotion/styled';

const ContainerMain = styled.div`
    overflow: hidden;
`;

const Container = ({ children }) => {
    return <ContainerMain>{children}</ContainerMain>;
};

export { Container };
