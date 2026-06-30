import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Front End Developer (Mobile & Web)",
      company: "PT Gema Inovasi Teknologi",
      duration: "Nov 2021 – Present",
      description: "Developed and maintained 5+ web and mobile applications using Angular, TypeScript, Ionic, React Native, and Flutter. Implemented UI based on business designs, integrated REST APIs, and optimized performance to improve application stability and user experience."
    },
    {
      role: "Fullstack Programmer (Internship)",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Mar 2021 – Sep 2021",
      description: "Developed 3+ backend features for an internal branch location system using integrated API architecture and databases. Managed databases and API endpoints to ensure internal applications operated in a stable and structured manner."
    },
    {
      role: "Bachelor’s in Informatics Engineering",
      company: "STMIK Pranata Indonesia",
      duration: "2015 – 2020",
      description: "GPA: 3.14 Focused on software development, web programming, and information systems fundamentals."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4 className="highlight">{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
