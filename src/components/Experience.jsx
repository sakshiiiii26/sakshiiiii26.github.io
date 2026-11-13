import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, FileSignature } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Binjwa IT Solutions',
    role: 'AI/ML Intern',
    period: 'July 2026 – Sept 2026',
    icon: <Briefcase size={24} />,
    description: 'Engineered production AI assistants, unified cost management platforms, and multi-platform automation pipelines.',
    highlights: [
      'Engineered an intelligent, multi-turn AI assistant for a CRM using Python and LangChain, featuring a robust Role-Based Access Control (RBAC) engine to securely automate and filter employee queries',
      'Built a unified cost comparison and token management platform for LLM, TTS & STT providers (React, FastAPI, MongoDB, Docker, Nginx, OpenRouter)',
      'Integrated third-party automation workflows (Canva, Discord) within the Social Media Management (SMM) platform to streamline content creation and communication'
    ],
    tags: ['Python', 'LangChain', 'FastAPI', 'RBAC', 'MongoDB', 'Docker', 'Automation']
  },
  {
    id: 2,
    title: 'THDCIL – Ministry of Power',
    role: 'AI/ML Backend Engineer (Intern)',
    period: 'Sep 2025 – Aug 2026',
    icon: <FileSignature size={24} />,
    description: 'Engineered enterprise-grade backend systems and ML pipelines for secure document verification for a major government PSU.',
    highlights: [
      'Engineered an automated document verification pipeline using hash-based tamper detection, reducing manual review effort by ~80%',
      'Implemented forgery detection models integrated into secure backend workflows for tamper-proof document processing',
      'Built scalable REST APIs and data validation pipelines using FastAPI and Docker for production government workflows'
    ],
    tags: ['Python', 'FastAPI', 'ML Verification', 'Hash Security', 'Docker', 'Backend']
  },
  {
    id: 3,
    title: 'Autonomous Vehicle for Calamity Rescue (AVCR)',
    role: 'ML Systems Developer – Funded Research Project',
    period: 'Aug 2024 – June 2026',
    icon: <Briefcase size={24} />,
    description: 'Government/institutionally funded research project developing autonomous disaster response vehicles for confined, GPS-denied spaces.',
    highlights: [
      'Deployed real-time ML inference pipeline on NVIDIA Jetson Nano for survivability assessment in disaster-hit confined spaces',
      'Achieved 91% classification accuracy using an ensemble of Isolation Forest, LSTM, and Random Forest models on live sensor streams',
      'Selected among top research projects at IPS Academy IES with full institutional funding'
    ],
    tags: ['Jetson Nano', 'Ensemble ML', 'LSTM', 'Isolation Forest', 'IoT Sensors']
  },
  {
    id: 4,
    title: 'E-Cell — IPS Academy',
    role: 'Founder & President',
    period: '2024 – Present',
    icon: <Users size={24} />,
    description: 'Founded and led the Entrepreneurship Cell in official collaboration with IIT Bombay to foster innovation and startup incubation.',
    highlights: [
      'Established the entrepreneurship cell; organized pitching competitions, mentorship sessions, and hackathons',
      'Led the team to become National Entrepreneurship Challenge (NEC) Finalists at IIT Bombay',
      'Ranked among Top 100 Campus Ambassadors globally by IIT Bombay'
    ],
    tags: ['Leadership', 'Management', 'IIT Bombay', 'Startup Ecosystem']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          Key professional experiences that shaped my skills and expertise.
        </p>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-role">{exp.role}</h4>
                <p className="timeline-desc">{exp.description}</p>
                
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="timeline-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
