import React, { Component } from 'react';
import fibLogo from './fiblogo.png';
import './Header.css';


export const Header = ({heading, description}) => {
    return (
        <div className="Header">
            <div className="Header__container">
                <h1 className="Header__heading">{heading}</h1>
                <img src={fibLogo} className="Header__logo" alt="logo" />
            </div>
            <div className="Header__description">{description}</div>
        </div>
    );
}