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
                                <FooterLink to="/" target="_blank">Beegency </FooterLink>
                                <FooterLink to="/" target="_blank">Cullinary </FooterLink>
                                <FooterLink to="/" target="_blank">PnR </FooterLink>
                                <FooterLink to="/" target="_blank">Tour and Travel </FooterLink>
                                <FooterLink to="/" target="_blank">Yamughni Store </FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Product </FooterLinkTitle>
                                <FooterLinkdir href="https://www.yamughnibandung.org/store/hammayim" target="_blank">Hammayim</FooterLinkdir>
                                <FooterLinkdir href="https://www.yamughnibandung.org/store/habbatussauda" target="_blank">Habbatussauda JMD</FooterLinkdir>
                                <FooterLink to="/" target="_blank">Sheva </FooterLink>
                                <FooterLink to="/" target="_blank">YFC </FooterLink>
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
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
