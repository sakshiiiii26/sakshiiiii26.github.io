import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, FileSignature } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'THDCIL – Ministry of Power',
    role: 'AI/ML Backend Engineer',
    period: 'September 2025 – Present',
    icon: <FileSignature size={24} />,
    description: 'Working on backend systems and AI/ML pipelines for secure document verification. Government AI Project – Production Level.',
    highlights: [
      'Developed authenticity scoring algorithms for document validation',
      'Built ML-based forgery detection systems',
      'Working on real-world government data pipelines',
      'Designed scalable backend architecture for AI workflows'
    ],
    tags: ['Machine Learning', 'Backend Systems', 'Security']
  },
  {
    id: 2,
    title: 'Autonomous Vehicle for Calamity Rescue',
    role: 'Backend & AI Lead',
    period: '2024 – Present',
    icon: <Briefcase size={24} />,
    description: 'Developed an academic project focused on creating autonomous vehicles for disaster response and rescue operations.',
    highlights: [
      'Handled backend development and system architecture',
      'Designed rescue algorithms and pathfinding systems',
      'Implemented sensor integration for obstacle detection',
      'Developed real-time disaster mapping capabilities'
    ],
    tags: ['Backend', 'AI Algorithms', 'IoT Integration']
  },
  {
    id: 3,
    title: 'E-Cell Founder',
    role: 'IPS Academy',
    period: '2024 – Present',
    icon: <Users size={24} />,
    description: 'Founded and led the Entrepreneurship Cell at IPS Academy in collaboration with IIT Bombay.',
    highlights: [
      'Established official collaboration with IIT Bombay\'s E-Cell program',
      'Served as Campus Ambassador for entrepreneurial events',
      'Led team to become National Entrepreneurship Challenge (NEC) Finalists'
    ],
    tags: ['Leadership', 'Management', 'Startup Ecosystem']
  },
  {
    id: 4,
    title: 'Virtual Internships',
    role: 'Deloitte Australia (Forage)',
    period: '2025 - April',
    icon: <GraduationCap size={24} />,
    description: 'Completed intensive virtual internships with leading organizations to enhance technical skills.',
    highlights: [
      'Built Tableau dashboards for business insights',
      'Performed data cleaning and classification using Excel',
      'Applied analytics for fraud detection scenarios'
    ],
    tags: ['Data Analytics', 'Data Visualization']
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
