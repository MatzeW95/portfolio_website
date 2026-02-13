import React from 'react';
import { HiEnvelope } from "react-icons/hi2";
import './css/contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="kontakt">
      
      <h3 className="section-title">Kontakt</h3>
      <div className="contact-option-1">
        <div className="contact-card-minimal">
          <h2 className="contact-title">Lass uns sprechen!</h2>
          <p className="contact-text">
            Ich bin immer offen für neue Projekte, kreative Ideen oder einfach einen netten Austausch. 
            Schreib mir gerne eine Nachricht.
          </p>
          <a href="mailto:kontakt@example.com" className="contact-button-primary">
            <HiEnvelope />
            Hallo sagen
          </a>
        </div>
      </div>

      {/* Zusätzliches E-Mail Feld (aus Option 3) */}
      <div className="contact-email-wrapper">
        <a href="mailto:kontakt@example.com" className="contact-detail-item">
          <HiEnvelope className="contact-detail-icon" />
          <div>
            <span className="contact-detail-label">Email</span>
            <span className="contact-detail-value">kontakt@example.com</span>
          </div>
        </a>
      </div>

    </section>
  );
};

export default Contact;