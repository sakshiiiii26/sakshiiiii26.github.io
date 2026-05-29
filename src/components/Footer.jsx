import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
            I'm currently available for freelance projects and new opportunities.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:sakshisharma@example.com" className="btn-primary contact-btn">
            Say Hello
          </a>
          
          <div className="social-links">
            <a href="https://github.com/sakshiiiii26" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:sakshisharma@example.com" className="social-icon">
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
