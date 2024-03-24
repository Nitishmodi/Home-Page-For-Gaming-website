
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <ExploreSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
