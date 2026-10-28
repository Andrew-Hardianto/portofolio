import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-footer">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header reveal">
            <span className="section-eyebrow">04 — Contact</span>
            <h2>
              Let's build something
              <br />
              <span className="contact-accent">together.</span>
            </h2>
            <p>
              Currently open to new opportunities, collaborations, or just a friendly chat about software engineering.
            </p>
            <a href="mailto:andrewhardianto@gmail.com" className="editorial-btn contact-cta">
              Say Hello <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="contact-details reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="info-group">
              <span className="info-label">Location</span>
              <p className="info-value">Bekasi, West Java<br />(Open to Jakarta hybrid/WFO & remote)</p>
            </div>
            <div className="info-group">
              <span className="info-label">Connect</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/andrew-hardianto/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href="https://github.com/Andrew-Hardianto" target="_blank" rel="noopener noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="mailto:andrewhardianto@gmail.com">
                  Email <span aria-hidden="true">↗</span>
                </a>
                <a href="https://andrewhardianto.my.id" target="_blank" rel="noopener noreferrer">
                  Website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="info-group">
              <span className="info-label">Availability</span>
              <p className="info-value availability">
                <span className="availability-dot" aria-hidden="true"></span>
                Open to work — Hybrid & Remote
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mono-text">© {new Date().getFullYear()} Andrew Hardianto. Designed with minimalism in mind.</p>
          <a href="#about" className="back-to-top mono-text">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
