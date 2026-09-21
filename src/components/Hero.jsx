import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container hero-content">
        <div className="hero-text glass-card">
          <h1>Hi, I'm <span className="highlight">Andrew Hardianto</span>.</h1>
          <h2>Mobile & Front-End Developer</h2>
          <p>
            Mobile & Front-End Developer with 4+ years building cross-platform applications for multifinance and banking clients (Adira Finance, Mandiri Tunas Finance, Astra Credit Company). Reduced crash rate by 80% and load time by 40% across enterprise apps used by 1,000+ staff, and built offline-first architecture for field operations. Experienced in Flutter, React Native, and Angular/Ionic, with hands-on squad leadership in Agile teams. Open to Jakarta hybrid/WFO and remote roles.
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
