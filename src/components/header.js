import React from 'react';
import fibLogo from '../fiblogo.png';
import styled from 'styled-components';
const Header = styled.header`
    background-color: #2a668f;
    color: #fff;
`;

const Container = styled.div``;

const Heading = styled.h1`
    padding-top: 3rem;
`;

const Logo = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 25rem;
`;

const Description = styled.div`
    padding-bottom: 3rem;
`;

export default ({heading, description}) => {
    return (
        <Header>
            <Container>
                <Heading>{heading}</Heading>
                <Logo src={fibLogo} alt="logo" />
            </Container>
            <Description>{description}</Description>
        </Header>
    );
}