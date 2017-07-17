import React, { Component } from 'react';
import fibLogo from '../../fiblogo.png';
import './header.css';


export default ({heading, description}) => {
    return (
        <header className="Header">
            <div className="Header__container">
                <h1 className="Header__heading">{heading}</h1>
                <img src={fibLogo} className="Header__logo" alt="logo" />
            </div>
            <div className="Header__description">{description}</div>
        </header>
    );
}