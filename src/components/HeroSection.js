// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section style={heroStyle}>
      <h1 style={titleStyle}>Get Ready To Play, Explore, Conquer</h1>
      <p style={textStyle}>
        Embark on your gaming journey with HydraGaming. Discover exciting games,
        connect with a vibrant gaming community, and dominate your adventures.
      </p>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Explore</button>
        <button style={buttonStyle}>Learn More</button>
      </div>
    </section>
  );
};

const heroStyle = {
  backgroundImage: "url('https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?t=st=1711280935~exp=1711284535~hmac=071ead5573669afff0303731eb8ae7a99f5c00ea36435208b180c721aaba1fe8&w=1380')",
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
  padding: '100px 20px',
};

const titleStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const textStyle = {
  fontSize: '20px',
  lineHeight: '1.5',
  marginBottom: '40px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  backgroundColor: '#ff4500',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default HeroSection;
