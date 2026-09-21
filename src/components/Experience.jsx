import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Mid-Level Mobile & Front-End Developer",
      company: "PT Gema Inovasi Teknologi",
      duration: "Nov 2021 – Present",
      description: "Built and shipped 5+ enterprise cross-platform apps (Flutter, React Native, Ionic, Angular) for Adira Finance, Mandiri Tunas Finance, and Astra Credit Company. Reduced crash rate by 80% and load time by 40%. Designed offline-first REST API integration layer. Led an Agile squad of 6+ engineers and consolidated 4+ internal tools into one Superapp."
    },
    {
      role: "Fullstack Programmer (Intern)",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Mar 2021 – Sep 2021",
      description: "Built 3+ backend API services for a branch-location management system, improving spatial data retrieval speed by 30%. Ran the full SDLC (requirements, documentation, testing, deployment) in a Tier-1 state-owned bank with zero production incidents."
    },
    {
      role: "S1 Informatics Engineering",
      company: "STMIK Pranata Indonesia",
      duration: "2015 – 2020",
      description: "GPA: 3.14"
    },
    {
      role: "Digital Talent Scholarship - Banking IT Backend",
      company: "KOMINFO",
      duration: "2020",
      description: "Secure API design, enterprise databases."
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
