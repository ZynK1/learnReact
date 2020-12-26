import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements'
import {SocialMedia, SocialMediaWrap, WebsiteRights, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

import {animateScroll as scroll} from 'react-scroll'


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to='/'>Submit Videos</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Enquiry</FooterLink>
                                <FooterLink to='/'>Sponsorships</FooterLink>
                                <FooterLink to='/'>Terms of Conditions</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>LinkedIn</FooterLink>
                        </FooterLinkItems>                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome} src={require('../images/home.svg').default} alt="Logo"/>
                        <WebsiteRights>ZZZZ &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" traget="_blank" aria-label="Facebook">
                                <FaFacebook/>
                                </SocialIconLink>
                            <SocialIconLink href="/" traget="_blank" aria-label="Instagram">
                                <FaInstagram/>
                                </SocialIconLink>
                            <SocialIconLink href="/" traget="_blank" aria-label="YouTube">
                                <FaYoutube/>
                                </SocialIconLink>
                            <SocialIconLink href="/" traget="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" traget="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                                </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
