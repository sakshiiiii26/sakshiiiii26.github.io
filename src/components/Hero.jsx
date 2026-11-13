import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
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
            Available for Full-Time Roles & Opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br/>
            <span className="text-gradient">Sakshi Sharma</span>
          </h1>
          
          <div className="typewriter-container">
            <h2 className="typewriter-text">AIML, Generative AI & Full-Stack Engineer</h2>
          </div>
          
          <p className="hero-description">
            Building production-ready AI products, autonomous agentic workflows (ReAct, LangGraph), RAG pipelines, and high-performance React + FastAPI web applications. Industry experience at <strong>Binjwa IT Solutions</strong> and <strong>THDCIL (Ministry of Power)</strong>; SIH Finalist and government-funded researcher.
          </p>
          
          <div className="hero-achievements">
            <span className="achievement-pill">SIH 2025 Finalist</span>
            <span className="achievement-sep">•</span>
            <span className="achievement-pill">VyaparX Winner</span>
            <span className="achievement-sep">•</span>
            <span className="achievement-pill">NEC Finalist (IIT Bombay)</span>
            <span className="achievement-sep">•</span>
            <span className="achievement-pill">Udaan'26 Winner</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={20} />
            </a>
            <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <FileText size={18} /> Resume
            </a>
            <a href="https://github.com/sakshiiiii26" className="btn-secondary" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sakshi-sharma-01608a303/" className="btn-secondary" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/sakshiiii_26/" className="btn-secondary" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <SiLeetcode size={18} /> LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
