import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Rocket, Award, Star, MapPin } from 'lucide-react';
import './Journey.css';

const journeySteps = [
  {
    id: 1,
    title: 'Core Team Member',
    organization: 'B.A.D Talks - IPS Academy',
    year: '2024',
    icon: <Flag size={24} />,
    description: 'Started my journey in tech leadership by organizing events and leading discussions. Built confidence in communication, teamwork, and event execution.',
  },
  {
    id: 2,
    title: 'Founder, E-Cell',
    organization: 'IPS Academy x IIT Bombay',
    year: '2024',
    icon: <Rocket size={24} />,
    description: 'Established entrepreneurship cell to foster innovation and startup culture.',
  },
  {
    id: 3,
    title: 'Top 100 Campus Ambassador',
    organization: 'IIT Bombay',
    year: '2024',
    icon: <Star size={24} />,
    description: 'Certificate of Merit: Ranked in the top 100 from IIT Bombay for completing the Campus Ambassador Program and securing a position in the top 100 on the global leaderboard.',
  },
  {
    id: 4,
    title: 'NEC Finalist',
    organization: 'IIT Bombay',
    year: '2024-25',
    icon: <Award size={24} />,
    description: 'National Entrepreneurship Challenge Finalist. Proudly represented our team as a finalist at NEC and took on the role of event lead for CoinDCX, contributing to the fintech community.',
  },
  {
    id: 5,
    title: 'Smart India Hackathon 2025',
    organization: 'Finalist',
    year: '2025',
    icon: <Star size={24} />,
    description: 'Recognized among top teams at national level for innovative AI-based solution.',
  },
  {
    id: 6,
    title: 'Udaan Phase 1 — Winner',
    organization: 'IPS Academy IES, CS Dept',
    year: '2026',
    icon: <Award size={24} />,
    description: 'Won Phase 1 of Udaan, an interbranch minor project competition. Competed against teams across branches with an AI/tech project.',
  },
  {
    id: 7,
    title: 'Udaan Phase 2 — Winner',
    organization: 'IPS Academy IES, CS Dept',
    year: '2026',
    icon: <Award size={24} />,
    description: 'Successfully defended and advanced through Phase 2 of the Udaan interbranch project competition, securing a winning position in the final round.',
  },
  {
    id: 8,
    title: 'Present',
    organization: 'Building AI Systems',
    year: 'Present',
    icon: <MapPin size={24} />,
    description: 'Focused on real-world AI deployment, system design, and scalable solutions. Preparing for top tech roles.',
  }
];

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Journey</span>
        </h2>
        <p className="section-subtitle">
          The path of my growth in tech leadership, hackathons, and innovation.
        </p>

        <div className="journey-timeline">
          <div className="journey-line"></div>
          
          {journeySteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`journey-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            >
              <div className="journey-icon">
                {step.icon}
              </div>
              
              <div className="journey-content glass">
                <div className="journey-header">
                  <h3>{step.title}</h3>
                  <span className="journey-year">{step.year}</span>
                </div>
                <h4 className="journey-org">{step.organization}</h4>
                <p className="journey-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
