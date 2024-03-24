
import React from 'react';
import styled from 'styled-components';

const ExploreSection = () => {
  return (
    <ExploreSectionContainer backgroundImageUrl="url('https://img.freepik.com/premium-vector/techno-ray-tech-shine-neon-glowing-future-futuristic-speed-science-effect-shiny-round-graphic_597121-4924.jpg?w=1380')"> {/* Add your background image URL */}
      <ExploreTitle>Explore HydraGaming</ExploreTitle>
      <CardContainer>
        <Card className="card1">
          <h3>Explore Game Library</h3>
          <p>Browse through our extensive game collection and discover new adventures.</p>
        </Card>
        <Card className="card2">
          <h3>Cross Platform Play</h3>
          <p>Connect with friends across different platforms and play together seamlessly.</p>
        </Card>
        <Card className="card3">
          <h3>Exclusive Content Play</h3>
          <p>Access exclusive content and unlock special rewards only available to HydraGaming members.</p>
        </Card>
        <Card className="card4">
          <h3>Ultra-HD Graphics Play</h3>
          <p>Experience breathtaking visuals with our ultra-HD graphics support for select games.</p>
        </Card>
      </CardContainer>
    </ExploreSectionContainer>
  );
};

const ExploreSectionContainer = styled.section`
  padding: 50px 10px;
  text-align: center;
  background-color: #f0f0f0;
  background-image: ${({ backgroundImageUrl }) => backgroundImageUrl}; 
  background-size: cover;
  background-position: center;
`;

const ExploreTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #FF4500;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: #333333; 
  background-image: linear-gradient(to right bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff; 
  }

  p {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export default ExploreSection;
