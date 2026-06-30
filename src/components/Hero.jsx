import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <div className="hero-text glass-card">
          <h1>Hi, I'm <span className="highlight">Andrew Hardianto</span>.</h1>
          <h2>Front End Developer (Mobile & Web)</h2>
          <p>
            Front End Developer with experience in developing and maintaining applications using Angular, React Js, React Native, TypeScript, Ionic, and Flutter. Proficient in implementing UI based on business requirements, integrating REST APIs, and optimizing application performance to enhance user experience. Ready to actively contribute to building stable, scalable, and user-oriented digital solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="glass-button">View My Work</a>
            <a href="#experience" className="glass-button outline">Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
