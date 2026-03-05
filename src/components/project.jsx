import React from 'react';
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";
import './css/project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tankstellen Finder",
      description: "Die Anwendung verarbeitet Standortdaten im Umkreis von 5 km und ermöglicht Nutzern den direkten Vergleich von Diesel, E5 und E10. Durch die Implementierung einer automatischen Distanzberechnung und einer nahtlosen Google Maps API-Anbindung wird die Route zum günstigsten Anbieter mit nur einem Klick visualisiert. Ein besonderer Fokus lag auf der Performance der Filter- und Sortierfunktionen, um eine intuitive und effiziente User Experience zu gewährleisten.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "/projekt1.png",
      liveUrl: "https://matthias-wagner-dev.de/tanken/",
      repoUrl: "https://github.com/MatzeW95/fuel-price"
    },
    {
      id: 2,
      title: "Formularvalidierung - Frontend Mentor Challenge",
      description: (
        <>
          Umsetzung eines responsiven Registrierungsformulars basierend auf einer professionellen Design-Vorlage. Ziel war die präzise visuelle Implementierung und eine benutzerfreundliche Validierung.
          <div style={{ marginTop: '1rem' }}>
            <strong>Key Features:</strong>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '0.5rem', marginBottom: 0 }}>
              <li>Pixel-Perfect Design: Exakte Umsetzung der Bildvorgaben in sauberen Code.</li>
              <li>Client-Side Validation: Logik zur Prüfung von E-Mail-Formaten und Pflichtfeldern.</li>
              <li>Responsive Layout: Optimiert für Mobile, Tablet und Desktop.</li>
              <li>Interactive UI: Dynamische Fehlermeldungen und Fokus-Zustände.</li>
            </ul>
          </div>
        </>
      ),
      tags: ["JavaScript", "HTML", "CSS"],
      image: "/projekt2.png",
      liveUrl: "https://matzew95.github.io/frontendmentor/Intro%20component%20with%20sign-up%20form/",
      repoUrl: "https://github.com/MatzeW95/frontendmentor/tree/main/Intro%20component%20with%20sign-up%20form"
    },
    {
      id: 3,
      title: "Portfolio Webseite",
      description: "Eine moderne Portfolio-Webseite, entwickelt mit React und GSAP, die auf eine klare Ästhetik und eine performante User Experience setzt. Besondere Merkmale sind die flüssig animierte Navigation und ein dynamischer Tech-Stack-Marquee, verpackt in einem vollständig responsiven Design.",
      tags: ["React", "GSAP", "JavaScript", "CSS", "HTML"],
      image: "/projekt3.png",
      liveUrl: "#",
      repoUrl: "https://github.com/MatzeW95/portfolio_website"
    }
  ];

  return (
    <section className="projects-section" id="projekte">
      <style>{`
        @media (max-width: 768px) {
          .project-list-image-wrapper {
            height: auto !important;
            aspect-ratio: 16/9;
          }
          .project-list-image {
            height: 100% !important;
          }
        }
      `}</style>
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
        <div className="project-list-description">{project.description}</div>
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