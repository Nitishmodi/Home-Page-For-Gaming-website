import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#games">Games</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#community">Community</FooterLink>
          <FooterLink href="#terms">Terms of Service</FooterLink>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
           <FooterParagraph>
            Connect with us on social media for updates, news, and promotions.
          </FooterParagraph>
          <SocialIcons>
            <SocialIcon href="#" className="fa fa-facebook"></SocialIcon>
            <SocialIcon href="#" className="fa fa-twitter"></SocialIcon>
            <SocialIcon href="#" className="fa fa-instagram"></SocialIcon>
            <SocialIcon href="#" className="fa fa-youtube"></SocialIcon>
            <SocialIcon href="#" className="fa fa-linkedin"></SocialIcon>
            <SocialIcon href="#" className="fa fa-pinterest"></SocialIcon>
            {/* Add more social media icons as needed */}
          </SocialIcons>
         
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterInfo>Email: info@playflix.com</FooterInfo>
          <FooterInfo>Phone: +1234567890</FooterInfo>
          <FooterInfo>Address: 123 Street, City, Country</FooterInfo>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ff4500; /* Orange color for titles */
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px; /* Increased gap between icons */
`;

const SocialIcon = styled.a`
  color: #ff4500; /* Changed color to orange */
  font-size: 40px; /* Increased icon size */
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: bold; /* Made the icon bolder */

  &:hover {
    color: #fff; /* Changed hover color to white */
  }
`;

const FooterParagraph = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
`;

const FooterInfo = styled.p`
  margin-bottom: 8px;
`;

export default Footer;
