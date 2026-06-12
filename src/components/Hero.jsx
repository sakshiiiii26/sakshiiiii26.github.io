import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="bg-glow" style={{ top: '10%', left: '-10%' }}></div>
      <div className="bg-glow-blue" style={{ bottom: '10%', right: '-5%' }}></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge glass">
            <span className="dot"></span>
            Available for Freelance Projects
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br/>
            <span className="text-gradient">Sakshi Sharma</span>
          </h1>
          
          <div className="typewriter-container">
            <h2 className="typewriter-text">AI Engineer & Data Scientist</h2>
          </div>
          
          <p className="hero-description">
            I build production-ready AI systems that solve real-world problems — from fraud detection and disaster rescue to secure document verification. 
            Currently working with <strong>Ministry of Power (THDCIL)</strong> on AI-driven verification systems.
          </p>
          
          <div className="hero-achievements">
            🏆 SIH 2025 Finalist &nbsp;|&nbsp; 🥇 VyaparX Winner &nbsp;|&nbsp; 🎯 NEC Finalist
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={20} />
            </a>
            <a href="sakshiiiii26.github.io\public\AIML SAKSHI SHARMA Resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <FileText size={20} /> Resume
            </a>
            <a href="https://github.com/sakshiiiii26" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </motion.div>
        
        {/* <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-border">
            <img src="/images/Profile pic.jpg" alt="Sakshi Sharma" className="hero-image" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
