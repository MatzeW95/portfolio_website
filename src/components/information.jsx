import React from 'react';
import './css/information.css';

const Information = () => {
  return (
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
  );
};

export default Information;