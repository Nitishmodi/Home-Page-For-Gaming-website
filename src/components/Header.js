
import React from 'react';
import logoImage from '../assets/logo.png'; 

const Header = () => {
  return (
    <header style={headerStyle}>
      <div>
        <img src={logoImage} alt="PlayFlix Logo" style={logoStyle} />
      </div>
      <nav style={navStyle}>
        <a href="/about" style={navLinkStyle}>About</a>
        <a href="#games" style={navLinkStyle}>Games</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
        <a href="#community" style={navLinkStyle}>Community</a>
      </nav>
      <div style={iconContainerStyle}>
        <div style={searchIconStyle}>&#x1F50D;</div>
        <button style={loginButtonStyle}>Login / Register</button>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#222',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
};

const logoStyle = {
  width: '70px', 
  height: '70px',
};

const navStyle = {
  display: 'flex',
  gap: '40px',
};

const navLinkStyle = {
  fontSize: '24px',
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchIconStyle = {
  fontSize: '24px',
  color: '#fff',
  marginRight: '20px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const loginButtonStyle = {
  padding: '12px 24px',
  fontSize: '18px',
  backgroundColor: 'transparent',
  border: '2px solid #fff',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

export default Header;
