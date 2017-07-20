import React, { Component } from 'react';
import fibLogo from '../../fiblogo.png';
import './header.css';


export default ({heading, description}) => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__heading">{heading}</h1>
                <img src={fibLogo} className="header__logo" alt="logo" />
            </div>
            <div className="header__description">{description}</div>
        </header>
    );
}