import React from 'react';
import styled from 'styled-components';

const Fib = styled.div`
    background-color: #def;
    padding: 20px;
`;

const Text = styled.p`
    font-size: 2em;
    line-height: 1.5;
`;

const Author = styled.p`
    font-style: italic;
`;

export default (props) => {
    return(
        <Fib>
            <Text>{props.fib.text}</Text>
            <Author>{props.fib.author}</Author>
        </Fib>
    );
};