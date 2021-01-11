import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinkContainer, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRight, 
    SocialIcons, 
    SocialIconLink,
    FooterLinkdir 
    } from './FooterElement'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to="/CompanyProfile" onClick={toggleHome}>Company Profile </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Division </FooterLinkTitle>
                                <FooterLink to="/">Beegency </FooterLink>
                                <FooterLink to="/">Cullinary </FooterLink>
                                <FooterLink to="/">PnR </FooterLink>
                                <FooterLink to="/">Tour and Travel </FooterLink>
                                <FooterLink to="/">Yamughni Store </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Product </FooterLinkTitle>
                                <FooterLinkdir href="https://www.yamughnibandung.org/store/hammayim">Hammayim</FooterLinkdir>
                                <FooterLinkdir href="https://www.yamughnibandung.org/store/habbatussauda">Habbatussauda JMD</FooterLinkdir>
                                <FooterLink to="/">Sheva </FooterLink>
                                <FooterLink to="/">YFC </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>
                           Yamughni 
                        </SocialLogo>
                        <WebsiteRight>Beegency © 2020 All rights reserved</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
