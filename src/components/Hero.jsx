import React from 'react';
import './Hero.css'; 

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to Web</h1>
        <h1>Development</h1>
        <p>Learn to create stunning websites with our online courses.</p>
        <button onClick={() => scrollToSection('about')}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
