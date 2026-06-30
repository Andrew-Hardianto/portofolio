import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card glass-card">
          <h2>Let's Build Something Amazing</h2>
          <p>
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="contact-info">
            <p className="info-item"><strong>Location:</strong> Bekasi, West Java</p>
            <p className="info-item"><strong>Phone:</strong> +62 857-7879-9301</p>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/andrew-hardianto/" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn">LinkedIn</a>
            <a href="https://github.com/Andrew-Hardianto" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn">GitHub</a>
            <a href="mailto:andrewhardianto@gmail.com" className="glass-panel social-btn">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
