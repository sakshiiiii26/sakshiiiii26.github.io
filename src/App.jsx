import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Journey />
        <Services />
        <Certificates />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
