import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Mid-Level Mobile & Front-End Developer",
      company: "PT Gema Inovasi Teknologi",
      duration: "Nov 2021 – Present",
      type: "work",
      description: "Built and shipped 5+ enterprise cross-platform apps (Flutter, React Native, Ionic, Angular) for Adira Finance, Mandiri Tunas Finance, and Astra Credit Company. Reduced crash rate by 80% and load time by 40%. Designed offline-first REST API integration layer. Led an Agile squad of 6+ engineers and consolidated 4+ internal tools into one Superapp.",
      highlights: ["80% crash rate reduction", "Led squad of 6+ engineers", "4+ tools → 1 Superapp"]
    },
    {
      role: "Fullstack Programmer (Intern)",
      company: "PT Bank Negara Indonesia (Persero) Tbk",
      duration: "Mar 2021 – Sep 2021",
      type: "work",
      description: "Built 3+ backend API services for a branch-location management system, improving spatial data retrieval speed by 30%. Ran the full SDLC (requirements, documentation, testing, deployment) in a Tier-1 state-owned bank with zero production incidents.",
      highlights: ["30% faster spatial data", "Zero production incidents"]
    },
    {
      role: "S1 Informatics Engineering",
      company: "STMIK Pranata Indonesia",
      duration: "2015 – 2020",
      type: "education",
      description: "GPA: 3.14"
    },
    {
      role: "Digital Talent Scholarship - Banking IT Backend",
      company: "KOMINFO",
      duration: "2020",
      type: "education",
      description: "Secure API design, enterprise databases."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-eyebrow">01 — Journey</span>
        <h2 className="section-title">My Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-meta">
                <span className="duration">{exp.duration}</span>
                <span className={`timeline-type ${exp.type}`}>
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>
              <div className="timeline-node" aria-hidden="true">
                <span className="node-dot"></span>
                <span className="node-line"></span>
              </div>
              <div className="timeline-content reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                {exp.highlights && (
                  <div className="timeline-highlights">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="highlight-chip">{h}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
