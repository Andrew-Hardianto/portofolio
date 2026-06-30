import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Starconnect & Starconnect Lite",
      category: "Mobile Developer",
      description: "HRIS Mobile Product. Developed and maintained HRIS mobile applications with a focus on application stability and user experience.",
      tech: ["Mobile App", "Dart", "Flutter", "Ionic", "Angular", "REST API", "UI Implementation"]
    },
    {
      title: "Assist Now",
      category: "Mobile Developer",
      description: "Developed a custom internal chat application based on Rocket.Chat for Android and iOS devices.",
      tech: ["Mobile App", "React Native", "Rocket.Chat", "Android", "iOS"]
    },
    {
      title: "Smile Apps",
      category: "Front-End / Mobile Developer",
      description: "Client: Adira Finance. Developed a Web and Mobile Superapp for internal corporate applications, including UI implementation and feature integration based on business requirements.",
      tech: ["Web", "Mobile App", "REST API", "UI Implementation", "Ionic", "Angular"]
    },
    {
      title: "HC Eazy",
      category: "Front-End / Mobile Developer",
      description: "Clients: Mandiri Tunas Finance. Developed an internal PWA web application and Android HRIS application, implemented UI, and integrated application services in accordance with corporate standards.",
      tech: ["Web", "Mobile App", "REST API", "UI Implementation", "Ionic", "Angular"]
    },
    {
      title: "Banana",
      category: "Front-End / Mobile Developer",
      description: "Client: Astra Credit Company. Developed an internal PWA web application and Android HRIS application, implemented UI, and integrated application services in accordance with corporate standards.",
      tech: ["Web", "Mobile App", "REST API", "UI Implementation", "Ionic", "Angular"]
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
                <span key={i} className="tech-badge glass-panel" style={{background: 'rgba(0,0,0,0.05)', color: '#111827'}}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
