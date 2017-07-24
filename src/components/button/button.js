import React from 'react';
import './button.css';

export default (props) => {
    console.log(props);
    return (
        <button className="button" onClick={props.action}>{props.text}</button>
    );
}