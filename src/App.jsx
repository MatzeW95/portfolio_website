import React from 'react';
import CardNav from './components/navigation';
import Information from './components/information';
import Projects from './components/project';
import Contact from './components/contact';
import './style.css';

function App() {
  // Konfiguration für die Navigation
  const navItems = [
    {
      label: 'Informationen',
      href: '#informationen',
      links: [
        { label: 'Über mich' },
        { label: 'Tech Stack' }
      ]
    },
    {
      label: 'Projekte',
      href: '#projekte',
      links: [
        { label: 'Tankstellen Finder' },
        { label: 'Formularvalidierung' },
        { label: 'Portfolio Webseite' }
      ]
    },
    {
      label: 'Kontakt',
      href: '#kontakt',
      links: [
        { label: 'Email' }
      ]
    }
  ];

  return (
    <div className="App">
      <CardNav items={navItems}/>

      <main className="container">
        <Information />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App
