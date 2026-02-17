import React from 'react';
import { HiCodeBracket, HiSwatch, HiBolt } from "react-icons/hi2";
import './css/information.css';

const Information = () => {
  // Erweiterte Liste für den Infinity Scroll
  const techStack = [ 'HTML', 'CSS / SCSS', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'JQuery', 'REST API', 'WordPress', 'Elementor', 'Git', 'SEO', 'Vite' ];

  return (
    <div className="information-wrapper">
      <section className="hero-container" id="informationen">
        <div className="hero-content">
          <span className="hero-greeting">Hallo, ich bin</span>
          <h1 className="hero-title">Matthias Wagner</h1>
          <h2 className="hero-subtitle">Frontend Developer & Creative Coder</h2>
          <p className="hero-text">
            Ich gestalte digitale Erlebnisse mit Fokus auf Design, Interaktion und Performance. 
            Willkommen in meinem Portfolio, wo Code auf Kreativität trifft.
          </p>
          
          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-number">3+</span>
              <span className="stat-label">Jahre Erfahrung</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projekte</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Leidenschaft</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          {/* Platzhalter für ein Bild oder eine Animation */}
          <div className="hero-placeholder-shape"></div>
        </div>
      </section>

      {/* Neue Sektion: Services / Was ich mache */}
      <section className="info-section">
        <h3 className="section-title">Was ich mache</h3>
        <div className="services-grid">
          <div className="service-card">
            <HiCodeBracket className="service-icon" />
            <h4>Frontend Development</h4>
            <p>Entwicklung moderner, responsiver Webseiten mit React und sauberem CSS.</p>
          </div>
          <div className="service-card">
            <HiSwatch className="service-icon" />
            <h4>UI/UX Implementation</h4>
            <p>Umsetzung von Designs in interaktive Interfaces mit Liebe zum Detail.</p>
          </div>
          <div className="service-card">
            <HiBolt className="service-icon" />
            <h4>Performance</h4>
            <p>Optimierung von Ladezeiten und Animationen für ein flüssiges Nutzererlebnis.</p>
          </div>
        </div>
      </section>

      {/* Neue Sektion: Tech Stack */}
      <section className="info-section">
        <h3 className="section-title">Tech Stack</h3>
        
        <div className="tech-stack-marquee">
          {/* Erste Gruppe */}
          <div className="tech-stack-group">
            {techStack.map((tech, index) => (
              <span key={`t1-${index}`} className="tech-badge">{tech}</span>
            ))}
          </div>
          {/* Zweite Gruppe (Duplikat für nahtlosen Loop) */}
          <div className="tech-stack-group" aria-hidden="true">
            {techStack.map((tech, index) => (
              <span key={`t2-${index}`} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;