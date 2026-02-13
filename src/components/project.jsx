import React from 'react';
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";
import './css/project.css';

const Projects = () => {
  // Platzhalter-Daten für deine Projekte
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Ein umfassendes Dashboard zur Verwaltung von Online-Shops mit Echtzeit-Datenvisualisierung und Bestandsmanagement.",
      tags: ["React", "Chart.js", "Tailwind"],
      image: "https://placehold.co/600x400/1e1e1e/ededed?text=Project+1",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Eine responsive Social-Media-Plattform mit Chat-Funktion, Feed und Benutzerprofilen.",
      tags: ["Vue.js", "Firebase", "SCSS"],
      image: "https://placehold.co/600x400/1e1e1e/ededed?text=Project+2",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Template",
      description: "Ein minimalistisches Portfolio-Template für Entwickler mit Dark Mode und flüssigen Animationen.",
      tags: ["React", "GSAP", "CSS Modules"],
      image: "https://placehold.co/600x400/1e1e1e/ededed?text=Project+3",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Produktivitäts-App zum Organisieren von Aufgaben nach der Kanban-Methode.",
      tags: ["TypeScript", "Redux", "Styled Components"],
      image: "https://placehold.co/600x400/1e1e1e/ededed?text=Project+4",
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <section className="projects-section" id="projekte">
      <h3 className="section-title">Ausgewählte Projekte</h3>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectItem key={`list-${project.id}`} project={project} />
        ))}
      </div>
    </section>
  );
};

// Eigene Komponente für das Item, um den Hover-State zu verwalten
const ProjectItem = ({ project }) => {
  return (
    <article className="project-list-item">
      <div className="project-list-image-wrapper">
        <img src={project.image} alt={project.title} className="project-list-image" />
      </div>
      <div className="project-list-content">
        <h4 className="project-list-title">{project.title}</h4>
        <p className="project-list-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={`l-${tag}`} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="project-list-actions">
        {/* Live Demo (Zuerst) */}
        <div className="project-action-item">
          <span className="project-action-label">Live Demo</span>
          <a href={project.liveUrl} className="project-list-action" aria-label="Live Demo">
            <HiArrowTopRightOnSquare aria-hidden="true" />
          </a>
        </div>

        {/* Code Repository (Danach) */}
        <div className="project-action-item">
          <span className="project-action-label">Code</span>
          <a href={project.repoUrl} className="project-list-action" aria-label="Code">
            <HiCodeBracket aria-hidden="true" /> 
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;