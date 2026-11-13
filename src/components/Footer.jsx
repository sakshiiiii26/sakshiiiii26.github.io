import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-title text-gradient">Let's Connect</h2>
          <p className="footer-text">
            I'm currently available for AI/ML engineering, Generative AI agent development, and Full-Stack opportunities.
            Whether you have a project in mind, an opportunity, or just want to connect, feel free to reach out!
          </p>
          
          <a href="mailto:sakshi26sharma56@gmail.com" className="btn-primary contact-btn">
            Say Hello
          </a>
          
          <div className="social-links">
            <a href="https://github.com/sakshiiiii26" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sakshi-sharma-01608a303/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/sakshiiii_26/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode">
              <SiLeetcode size={22} />
            </a>
            <a href="mailto:sakshi26sharma56@gmail.com" className="social-icon" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sakshi Sharma. Built with React.</p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
