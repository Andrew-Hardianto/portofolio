import React, { useEffect, useState } from 'react';
import './Hero.css';

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '5+', label: 'Enterprise Apps' },
  { value: '80%', label: 'Crash Rate Cut' },
  { value: '40%', label: 'Faster Load Time' },
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const roles = [
      'Flutter Engineer',
      'React Native Developer',
      'Angular Front-End',
      'Mobile & Web Developer',
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex += 1;
        setTypedText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
        timeout = setTimeout(tick, 80);
      } else {
        charIndex -= 1;
        setTypedText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
        timeout = setTimeout(tick, 40);
      }
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <span className="hero-eyebrow">Hello, I'm Andrew —</span>
            <h1 className="hero-title">
              Engineering elegant,
              <br />
              <span className="hero-title-accent">human-centric</span> software.
            </h1>
            <p className="hero-typing" aria-label=" roles I cover">
              <span className="typing-prefix">&gt;</span> {typedText}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </p>
            <div className="hero-description">
              <p>
                I am a Mobile & Front-End Developer with over four years of experience crafting enterprise-grade applications. I specialize in building <span className="inline-accent">cross-platform solutions</span> using Flutter, React Native, and Angular, focusing on stability, performance, and offline-first architectures.
              </p>
              <p>
                Whether it's reducing crash rates or optimizing load times, my goal is always to deliver software that feels seamless and intuitive. Currently open to hybrid or remote roles in Jakarta.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="editorial-btn">
                View Selected Work <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="#experience" className="editorial-btn-outline">Read Experience</a>
            </div>
          </div>

          <aside className="hero-monogram" aria-hidden="true">
            <span className="monogram-letter">AH</span>
            <span className="monogram-caption">Portfolio — Vol. 01</span>
          </aside>
        </div>

        <div className="hero-stats">
          {STATS.map((stat, i) => (
            <div key={i} className="stat-item" style={{ animationDelay: `${0.9 + i * 0.15}s` }}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#experience" className="scroll-hint" aria-label="Scroll to experience">
        <span className="scroll-hint-text">Scroll</span>
        <span className="scroll-hint-line" aria-hidden="true"></span>
      </a>
    </section>
  );
};

export default Hero;
