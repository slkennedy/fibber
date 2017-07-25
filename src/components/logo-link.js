import React from 'react';
import styled from 'styled-components';

const Link = styled.a``;
const Logo = styled.img``;


export default (props) => {
    return (
        <Link className="willow-logo-link" href={props.url} aria-label={props.urlDescription}>
            <Logo className="willow-logo-link__image" src={props.image} alt={props.imageDescription} />
        </Link>
    );
};

