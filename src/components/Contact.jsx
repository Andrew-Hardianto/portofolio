import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-footer">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2>Let's build something together.</h2>
            <p>
              Currently open to new opportunities, collaborations, or just a friendly chat about software engineering.
            </p>
          </div>
          
          <div className="contact-details">
            <div className="info-group">
              <span className="info-label">Location</span>
              <p className="info-value">Bekasi, West Java<br />(Open to Jakarta hybrid/WFO & remote)</p>
            </div>
            <div className="info-group">
              <span className="info-label">Connect</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/andrew-hardianto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Andrew-Hardianto" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:andrewhardianto@gmail.com">Email</a>
                <a href="https://andrewhardianto.my.id" target="_blank" rel="noopener noreferrer">Website</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="mono-text">© {new Date().getFullYear()} Andrew Hardianto. Designed with minimalism in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
