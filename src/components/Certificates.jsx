import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certCategories = [
  {
    id: 'education',
    title: 'Languages & Courses',
    icon: <GraduationCap size={24} />,
    items: [
      { name: 'Python Certification', issuer: 'IIT Bombay', link: 'https://drive.google.com/file/d/1xftfH34or6aajPJ7850bBiwPMDuLj7UK/view?usp=drive_link' },
      { name: 'Java Certification', issuer: 'IIT Bombay', link: 'https://drive.google.com/file/d/1umhJYwtnrfwL7-lb98CboS-JzbxAM67v/view?usp=sharing' },
      { name: 'Quantum Computing', issuer: 'IIT Roorkee/Hyderabad', link: 'https://drive.google.com/file/d/1766bY6IvkKF7HpSYuSyb8SG1SpPfzza8/view?usp=sharing' },
      { name: 'RDBMS PostgreSQL Certification', issuer: 'Self Paced', link: '#' }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    icon: <Trophy size={24} />,
    items: [
      { name: 'Smart India Hackathon (SIH) 2025', issuer: 'Finalist', link: '#' },
      { name: 'Hack Sungum - IPSA 2024', issuer: 'Participant', link: '#' },
      { name: 'Flipkart-grid 6.0 Robotics Challenge', issuer: 'Participant', link: '#' },
      { name: 'NationalBuild Case Study Quiz', issuer: 'Participant', link: '#' },
      { name: 'Hackdata\'25', issuer: 'Participant', link: '#' },
      { name: 'Pravah 3.0', issuer: 'Participant', link: '#' },
      { name: 'Samsung Solve for Tomorrow', issuer: 'Participant', link: '#' },
      { name: 'Build With India', issuer: 'Ranked 5000 among 25000', link: '#' }
    ]
  },
  {
    id: 'achievements',
    title: 'Excellence & Achievements',
    icon: <Award size={24} />,
    items: [
      { name: '1st position in Science Exhibition', issuer: 'IPSA 2024', link: '#' },
      { name: '1st Position - TechnoMaths Presentation', issuer: '2024', link: '#' },
      { name: 'Winner – VyaparX Idea Pitching', issuer: '2025', link: '#' },
      { name: 'Top 20 – Clear Skies Innovation Challenge', issuer: '2025', link: '#' },
      { name: 'Winner - Chess Nodal', issuer: '2025', link: '#' },
      { name: 'Merit Campus Ambassador', issuer: 'Top 100 CA IIT Bombay', link: '#' }
    ]
  }
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">
          Certificates & <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="cert-tabs">
          {certCategories.map(cat => (
            <button 
              key={cat.id} 
              className={`cert-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span className="hidden md:inline">{cat.title}</span>
            </button>
          ))}
        </div>

        <div className="cert-content glass">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="cert-list"
          >
            {certCategories.find(c => c.id === activeTab).items.map((item, index) => (
              <a 
                key={index}
                href={item.link} 
                target={item.link !== '#' ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className="cert-item"
              >
                <div className="cert-item-info">
                  <h4 className="cert-item-title">{item.name}</h4>
                  <span className="cert-item-issuer">{item.issuer}</span>
                </div>
                {item.link !== '#' && <ExternalLink size={18} className="cert-icon" />}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
