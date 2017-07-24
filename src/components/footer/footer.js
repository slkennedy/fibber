import React from 'react';
import fibLogo from '../../fiblogo.png';
import './footer.css';

export default () => {
    return(
        <footer className="willow-page-footer" role="contentinfo">
            <div className="willow-page-footer__branding">
                <a className="willow-logo-link" href="/" aria-label="go to home page"><img className="willow-logo-link__image" src={fibLogo} alt="" /></a>
            </div>
            <div className="willow-page-footer__navigation">                    
                <nav className="willow-footer-nav" role="navigation" aria-label="footer">
                    <h1 className="willow-footer-nav__heading sr-only">Site Footer Menu</h1>
                    <ul className="willow-footer-nav__list">
                        <li className="willow-footer-nav__item"><a className="willow-footer-nav__link" href="/" aria-label="">Link One</a></li>
                        <li className="willow-footer-nav__item"><a className="willow-footer-nav__link" href="/" aria-label="">Link Two</a></li>
                    </ul>
                </nav>
            </div>
             <small className="willow-page-footer__copyright">@2017 All Rights Reserved</small> 
        </footer>
    );
}