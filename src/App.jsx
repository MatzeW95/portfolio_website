import React from 'react';
import CardNav from './components/navigation';
import './style.css';

function App() {
  // Konfiguration für die Navigation
  const navItems = [
    {
      label: 'Informationen',
      href: '#informationen',
      links: [
        { label: 'Über mich' },
        { label: 'Skills' }
      ]
    },
    {
      label: 'Projekte',
      href: '#projekte',
      links: [
        { label: 'Webseite A' },
        { label: 'App B' }
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
