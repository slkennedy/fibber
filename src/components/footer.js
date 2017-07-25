import React from 'react';
import fibLogo from '../fiblogo.png';
import FooterNav from './footer-nav';
import styled from 'styled-components';
import Logo from './logo-link';

const Footer = styled.footer``;
const Branding = styled.div``;
const Navigation = styled.div``;
const Copyright = styled.small``;


export default () => {
    return(
        <Footer className="willow-page-footer" role="contentinfo">
            <Branding className="willow-page-footer__branding">
                <Logo image={fibLogo} url="http://google.com" urlDescription="link to google" imageDescription="Fibber" />
            </Branding>
            <Navigation className="willow-page-footer__navigation">                    
                <FooterNav />
            </Navigation>
             <Copyright className="willow-page-footer__copyright">@2017 All Rights Reserved</Copyright> 
        </Footer>
    );
}