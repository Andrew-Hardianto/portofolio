import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Starconnect & Starconnect Lite",
      category: "HRIS Mobile Product",
      description: "Delivered a full mobile architecture overhaul; resolved cross-platform rendering bugs and optimized large-asset loading.",
      tech: ["Flutter", "Provider", "Dart", "Angular", "Ionic", "Capacitor"]
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
      tech: ["Angular", "Ionic", "Capacitor"]
    },
    {
      title: "QrQu",
      category: "Personal Project",
      description: "Native Android QR scanner that reads codes from camera or gallery and keeps a local scan history. Code: github.com/Andrew-Hardianto/QrQu",
      tech: ["Kotlin", "Jetpack Compose", "ML Kit"]
    },
    {
      title: "BPO Payroll",
      category: "Enterprise Web App",
      description: "Developed a comprehensive payroll management system for Business Process Outsourcing (BPO), streamlining salary calculations and administrative workflows.",
      tech: ["Angular", "Bootstrap"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-eyebrow">03 — Selected Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card reveal"
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="project-content">
                <div className="project-top">
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 80)}...</p>
                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 3 && <span className="tech-badge">+{project.tech.length - 3}</span>}
                </div>
                <a
                  href="#!"
                  className="view-project"
                  onClick={(e) => { e.preventDefault(); setSelectedProject(project); }}
                >
                  Read more <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setSelectedProject(null)} aria-label="Close dialog">&times;</button>
            <span className="project-category">{selectedProject.category}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="tech-stack">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <p className="modal-hint mono-text">Press ESC or click outside to close</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
