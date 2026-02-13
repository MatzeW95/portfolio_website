import React from 'react';
import CardNav from './components/navigation';
import './style.css';

function App() {
  // Konfiguration für die Navigation
  const navItems = [
    {
      label: 'Projekte',
      bgColor: '#2d2d2d',
      textColor: '#EDEDED',
      links: [
        { label: 'Webseite A', href: '#project-a' },
        { label: 'App B', href: '#project-b' }
      ]
    },
    {
      label: 'Info',
      bgColor: '#2d2d2d',
      textColor: '#EDEDED',
      links: [
        { label: 'Über mich', href: '#about' },
        { label: 'Skills', href: '#skills' }
      ]
    },
    {
      label: 'Kontakt',
      bgColor: '#2d2d2d',
      textColor: '#EDEDED',
      links: [
        { label: 'Email', href: 'mailto:kontakt@example.com' },
        { label: 'LinkedIn', href: '#' }
      ]
    }
  ];

  return (
    <div className="App">
      <CardNav items={navItems}/>

      <main className="container">
        <h1>Willkommen auf meinem Portfolio</h1>
        <p>Hier werden bald meine Projekte zu sehen sein.</p>
        
        {/* Beispiel für die responsive Steuerung */}
        <div className="desktop-only">
          <p><em>(Du bist auf einem Desktop-Gerät)</em></p>
        </div>
        <div className="mobile-only">
          <p><em>(Du bist auf einem mobilen Gerät)</em></p>
        </div>
      </main>
    </div>
  );
}

export default App
