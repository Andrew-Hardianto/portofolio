import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Starconnect & Starconnect Lite",
      category: "HRIS Mobile Product",
      description: "Delivered a full mobile architecture overhaul; resolved cross-platform rendering bugs and optimized large-asset loading.",
      tech: ["Flutter", "Dart", "Angular", "Ionic"]
    },
    {
      title: "AssistNow",
      category: "Internal Secure Messaging",
      description: "Real-time secure messaging with live communication and user-presence tracking for enterprise use.",
      tech: ["React Native", "TypeScript", "WebSocket"]
    },
    {
      title: "Adira Finance Internal Superapp",
      category: "Finance Operational Tool",
      description: "Unified 4+ operational tools for internal finance staff; integrated secure REST APIs and data-visualization modules for complex fintech workflows.",
      tech: ["Angular", "Ionic", "Capacitor", "TypeScript"]
    },
    {
      title: "HRIS Web & Mobile (MTF & ACC)",
      category: "Enterprise HRIS",
      description: "Front-end architecture used by 1,000+ corporate staff, cutting manual HR administration and process cycle time for Mandiri Tunas Finance and ACC.",
      tech: ["Angular", "Ionic", "React Native", "Capacitor"]
    },
    {
      title: "QrQu",
      category: "Personal Project",
      description: "Native Android QR scanner that reads codes from camera or gallery and keeps a local scan history. Code: github.com/Andrew-Hardianto/QrQu",
      tech: ["Kotlin", "Jetpack Compose", "Room", "ML Kit"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 80)}...</p>
                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-badge glass-panel">{tech}</span>
                  ))}
                  {project.tech.length > 3 && <span className="tech-badge glass-panel">+{project.tech.length - 3}</span>}
                </div>
                <a href="#!" className="view-project" onClick={(e) => { e.preventDefault(); setSelectedProject(project); }}>View Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>&times;</button>
            <span className="project-category">{selectedProject.category}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="tech-stack">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-badge glass-panel" style={{ background: 'rgba(0,0,0,0.05)', color: '#111827' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
