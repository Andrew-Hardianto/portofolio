import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Engineering elegant, human-centric software.</h1>
          <div className="hero-description">
            <p>
              I am a Mobile & Front-End Developer with over four years of experience crafting enterprise-grade applications. I specialize in building <span className="inline-accent">cross-platform solutions</span> using Flutter, React Native, and Angular, focusing on stability, performance, and offline-first architectures.
            </p>
            <p>
              Whether it's reducing crash rates or optimizing load times, my goal is always to deliver software that feels seamless and intuitive. Currently open to hybrid or remote roles in Jakarta.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="editorial-btn">View Selected Work</a>
            <a href="#experience" className="editorial-btn-outline">Read Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
