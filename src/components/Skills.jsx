import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      label: "Mobile",
      title: "Mobile Development",
      description: "Cross-platform and native applications engineered for enterprise scale, stability, and offline-first reliability.",
      skills: ["Flutter", "Dart", "React Native", "Ionic", "Capacitor", "Kotlin", "Jetpack Compose"]
    },
    {
      label: "Front-End",
      title: "Front-End Engineering",
      description: "Type-safe, maintainable interfaces that make complex business workflows feel simple and intuitive.",
      skills: ["Angular", "TypeScript", "JavaScript (ES6+)", "React", "HTML5 & CSS3", "Bootstrap"]
    },
    {
      label: "Architecture",
      title: "Architecture & Integration",
      description: "The plumbing behind fast, resilient enterprise apps — from secure APIs to real-time data and offline sync.",
      skills: ["REST API Integration", "WebSocket & Real-time", "Offline-first Architecture", "Provider State Management", "Data Visualization"]
    },
    {
      label: "Practice",
      title: "Tooling & Practice",
      description: "How I deliver: disciplined SDLC, Agile squad leadership, and a relentless focus on performance and crash reduction.",
      skills: ["Git & Version Control", "Agile / Scrum Leadership", "SDLC & Documentation", "Secure API Design", "Enterprise Databases", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <p className="skills-intro">
          Four years of shipping enterprise software has taught me that a tech stack is only as good as the
          problems it solves. These are the tools I reach for, grouped by the way I actually use them.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-card">
              <span className="skill-label">{group.label}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
