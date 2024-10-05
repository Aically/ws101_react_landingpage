import React from 'react';
import './About.css'; 
import ProfileImage from './images/2.jpg'; 

const About = () => {
  return (
    <section id="about">
      <div className="about-background-animation"></div>
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>We offer a wide variety of web development courses designed to help you build professional websites and applications. Our mission is to make web development accessible to everyone, whether you're a beginner or a seasoned developer.</p>
          <p>Join us today and take your web development skills to the next level!</p>
          <button className="learn-more" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
        </div>
        <img src={ProfileImage} alt="Profile" className="about-image" />
      </div>
    </section>
  );
};

export default About;
