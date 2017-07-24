import React from 'react';
import './fib.css';

export default (props) => {
    return(
        <div className="fib">
            <p className="fib__text">{props.fib.text}</p>
            <p className="fib__author">{props.fib.author}</p>
        </div>
    );
}