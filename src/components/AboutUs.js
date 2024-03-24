import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsHeading>About Us</AboutUsHeading>
      <AboutUsContent>
        <AboutSection>
          <AboutTitle>Welcome to Our Company</AboutTitle>
          <AboutText>
            We are a leading company dedicated to providing top-notch services in our industry.
            With a focus on innovation and customer satisfaction, we strive to exceed expectations
            and deliver exceptional results.
          </AboutText>
          <AboutText>
            Our team is comprised of skilled professionals who are passionate about what they do.
            We work tirelessly to ensure that our clients receive the best possible experience
            and achieve their goals.
          </AboutText>
        </AboutSection>
        <LocationSection>
          <LocationTitle>Visit Us</LocationTitle>
          <LocationMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25040.18465708724!2d-0.14188442503807257!3d51.50192692764234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d86738f3cb%3A0x44efc3b2c506a2f8!2sBuckingham%20Palace%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1648551722514!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></LocationMap>
        </LocationSection>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  background-image: url('https://img.freepik.com/free-photo/cool-geometric-triangular-hallway-3d-rendering_181624-11762.jpg?t=st=1711281024~exp=1711284624~hmac=4ad60e609a8e684de92016a80dce2c44977dbf003959272b345e8e864e96b1ac&w=1380'); /* Add your background image URL */
  background-size: cover;
  background-position: center;
  padding: 50px 0;
`;

const AboutUsHeading = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const AboutTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  color: #fff;
  line-height: 1.5;
`;

const LocationSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const LocationTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

const LocationMap = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`;

export default AboutUs;
