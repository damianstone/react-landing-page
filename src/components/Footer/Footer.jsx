import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrap, 
    Links, 
    LinkTitle, 
    Link,
    SocialMedia,
    SocialWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons
} from './FooterStyle';

const Footer = (props) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <Links>
                            <LinkTitle>About Us</LinkTitle>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms and Conditions</Link>
                        </Links>
                        <Links>
                            <LinkTitle>About Us</LinkTitle>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms and Conditions</Link>
                        </Links>
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <Links>
                            <LinkTitle>About Us</LinkTitle>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms and Conditions</Link>
                        </Links>
                        <Links>
                            <LinkTitle>About Us</LinkTitle>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms and Conditions</Link>
                        </Links>
                    </FooterLinksWrap>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialWrap>
                        <SocialLogo to='/' onClick={toggleHome}>DVsoft</SocialLogo>
                        <WebsiteRights>Damian Stone © {new Date().getFullYear()} all rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank'aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
