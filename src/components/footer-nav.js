import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav``;
const Heading = styled.h1``;
const List = styled.ul``;
const Item = styled.li``;
const Link = styled.a``;

export default () => {
    return(
        <Navigation className="willow-footer-nav" role="navigation" aria-label="footer">
            <Heading className="willow-footer-nav__heading sr-only">Site Footer Menu</Heading>
            <List className="willow-footer-nav__list">
                <Item className="willow-footer-nav__item"><Link className="willow-footer-nav__link" href="/" aria-label="">Link One</Link></Item>
                <Item className="willow-footer-nav__item"><Link className="willow-footer-nav__link" href="/" aria-label="">Link Two</Link></Item>
            </List>
        </Navigation>
    );
};