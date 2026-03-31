import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Team from './components/Team';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import AdditionalDetails from './components/AdditionalDetails';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <Header />
      
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Team />
        <Experience />
        <AdditionalDetails />
        <Skills />
        <Documentation />
        <Contact />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '24px', 
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--glass-border)',
        fontSize: '14px'
      }}>
        <p>&copy; {new Date().getFullYear()} Kelompok 6 Siswa Siswi SMK TI BALI GLOBAL DENPASAR.</p>
      </footer>
    </div>
  );
}

export default App;
