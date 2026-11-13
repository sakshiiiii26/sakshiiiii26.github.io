import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certCategories = [
  {
    id: 'education',
    title: 'Certifications & Courses',
    icon: <GraduationCap size={24} />,
    items: [
      { name: 'Artificial Intelligence and Machine Learning', issuer: 'NPTEL', link: 'https://drive.google.com/file/d/1snflDnE9gZA9ohsvnGmVLFRMRTc6DjIm/view?usp=sharing' },
      { name: 'AWS Cloud Operations', issuer: 'Training Badge - AWS', link: 'https://drive.google.com/file/d/1kISO_jxvQrBzwqB14B71stIaO3QX7WmZ/view?usp=sharing' },
      { name: 'Python Tutorial Certification', issuer: 'IIT Bombay', link: 'https://drive.google.com/file/d/1EFq66DrQhUaW10xmsdeehePCB_s_YmmB/view?usp=sharing' },
      { name: 'RDBMS PostgreSQL Certification', issuer: 'PostgreSQL Training', link: 'https://drive.google.com/file/d/1WkgDYvOpT1DTMFiFH86B0mShJQFIyXsZ/view?usp=sharing' },
      { name: 'Java Certification', issuer: 'IIT Bombay', link: 'https://drive.google.com/file/d/1umhJYwtnrfwL7-lb98CboS-JzbxAM67v/view?usp=sharing' },
      { name: 'Quantum Computing', issuer: 'IIT Roorkee / IIT Hyderabad', link: 'https://drive.google.com/file/d/1766bY6IvkKF7HpSYuSyb8SG1SpPfzza8/view?usp=sharing' }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    icon: <Trophy size={24} />,
    items: [
      { name: 'Smart India Hackathon (SIH) 2025', issuer: 'National Finalist', link: 'https://drive.google.com/file/d/1KnhYNBfjYOgeImIXmesPAZtebtuZmM2W/view?usp=sharing' },
      { name: 'National Entrepreneurship Challenge (NEC)', issuer: 'Finalist 2024-25 (IIT Bombay)', link: 'https://drive.google.com/file/d/1L6iKfMGUmvQ-_nJ7Xpva-VOsSsKM_crA/view?usp=sharing' },
      { name: 'Bhartiya Antariksha Hackathon', issuer: 'Participant', link: '#' },
      { name: 'Snow Hacks', issuer: 'Participant', link: '#' },
      { name: 'GDSC Codespire', issuer: 'Participant', link: '#' },
      { name: 'Pravah 3.0', issuer: 'Participant', link: '#' },
      { name: 'Hackdata\'25', issuer: 'Participant', link: '#' },
      { name: 'Build with India', issuer: 'Ranked Top 5000 / 25000', link: '#' },
      { name: 'Samsung Solve for Tomorrow', issuer: 'Participant', link: '#' },
      { name: 'Flipkart Grid 6.0 (Robotics)', issuer: 'Participant', link: '#' },
      { name: 'Hack Sungum - IPSA 2024', issuer: 'Participant', link: '#' }
    ]
  },
  {
    id: 'achievements',
    title: 'Excellence & Awards',
    icon: <Award size={24} />,
    items: [
      { name: 'Winner – UDAAN\'26 Phase I & Phase II', issuer: 'Inter-Branch Project Competition', link: 'https://drive.google.com/file/d/17Ua1jdIVI3oi8mf0SHNOAK1s-OlIMfTy/view?usp=sharing' },
      { name: 'Winner – VyaparX Idea Pitching Competition', issuer: '1st Position 2025', link: 'https://drive.google.com/file/d/1M3mJt2EAFq2j8LP0QHWgS3lBEOv8I9pn/view?usp=sharing' },
      { name: '1st Position – Science Exhibition', issuer: 'IPSA 2024', link: 'https://drive.google.com/file/d/1XUD0fdbi9x9WyaIJxpKx2m0XrfbjWCXU/view?usp=sharing' },
      { name: '1st Position – TechnoMaths Presentation', issuer: '2024', link: 'https://drive.google.com/file/d/1M2iyjL_Y5bMd0o-b3YZkqCzqU6CogrBh/view?usp=sharing' },
      { name: 'Top 20 – Clear Skies Innovation Challenge', issuer: 'National Innovation', link: 'https://drive.google.com/file/d/1ulf3PYw53riQwFBJWXwRgHPTMxLLewv4/view?usp=sharing' },
      { name: 'Winner – Inter-College Chess Competition', issuer: '2023, 2025', link: 'https://drive.google.com/file/d/1in4-M4mMb6r18k6WTnSogTFhdpziuoO9/view?usp=sharing' },
      { name: 'Top 100 Campus Ambassador', issuer: 'IIT Bombay (Global Leaderboard)', link: 'https://drive.google.com/file/d/1jzAYNhrgofA30viNvPMYX7kZqDrJkYcr/view?usp=sharing' }
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
