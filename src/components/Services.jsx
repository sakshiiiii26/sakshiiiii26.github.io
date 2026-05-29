import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { BrainCircuit, BarChart3, Settings, Database, CheckCircle2 } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Custom ML Model Development',
    icon: <BrainCircuit size={32} />,
    description: 'End-to-end machine learning solutions — from data preprocessing and model training to deployment-ready APIs. Specializing in classification, anomaly detection, and prediction systems.'
  },
  {
    id: 2,
    title: 'Data Analytics & Dashboards',
    icon: <BarChart3 size={32} />,
    description: 'Transform raw data into actionable insights using Python, Power BI, and interactive dashboards. Ideal for sales analytics, performance tracking, and business intelligence.'
  },
  {
    id: 3,
    title: 'AI-Powered Automation',
    icon: <Settings size={32} />,
    description: 'Automate repetitive workflows using AI, NLP, and scripting. From email automation to document processing and intelligent task pipelines.'
  },
  {
    id: 4,
    title: 'Backend + AI Integration',
    icon: <Database size={32} />,
    description: 'Build and deploy Flask/FastAPI backends that serve ML models in production. REST APIs, real-time monitoring dashboards, and role-based access systems.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">
          What I <span className="text-gradient">Offer</span>
        </h2>
        <p className="section-subtitle">
          Freelance services tailored for startups and enterprises looking to leverage AI and Data Science.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 14, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper" style={{ height: '100%' }}>
                <div className="service-card glass" style={{ height: '100%' }}>
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="why-hire-me glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="why-hire-title">Why Hire Me</h3>
          <p className="why-hire-text">
            I don't just build models — I build complete AI systems. From data pipelines to deployment, 
            I focus on solving real-world problems with scalable and production-ready solutions.
          </p>
          <div className="why-hire-badges">
            <span className="hire-badge"><CheckCircle2 size={18} /> Real-world projects</span>
            <span className="hire-badge"><CheckCircle2 size={18} /> Government experience</span>
            <span className="hire-badge"><CheckCircle2 size={18} /> Strong ML + Backend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
