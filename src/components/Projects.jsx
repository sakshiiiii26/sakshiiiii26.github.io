import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { X, Code } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 'avcr',
    title: 'Autonomous Rescue AI System (AVCR)',
    description: 'AI rescue system reducing response time by 30% — real-time gas detection and danger prediction deployed on Jetson Nano for mining and disaster environments.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/450197758/XA/WB/NF/226713088/confined-space-drone-inspection-gps-denied-drone.jpg',
    tags: ['Jetson Nano', 'LSTM', 'ESP32', 'Flask'],
    details: 'In disaster-hit environments, detecting hazardous gas leaks and assessing survivability is extremely difficult. Designed an autonomous IoT-based rescue vehicle equipped with multiple gas sensors. Implemented LSTM model for real-time gas level prediction and Isolation Forest for anomaly detection.',
    repo: 'https://github.com/sakshiiiii26/AVCR',
    live: '',
    video: ''
  },
  {
    id: 'automail',
    title: 'Auto Mail Apply',
    description: 'Intelligent automation platform that uses AI and NLP to analyze job opportunities and auto-apply through email.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2',
    tags: ['FastAPI', 'React', 'Selenium', 'NLP', 'Python'],
    details: 'Built an agentic workflow that scrapes job listings, uses NLP to match candidate profiles, and orchestrates email workflows to apply automatically.',
    repo: '',
    live: 'https://mailautomation-83tzikwxc-sakshiiiii26s-projects.vercel.app',
    video: ''
  },
  {
    id: 'rockfall',
    title: 'Rockfall Prediction System',
    description: 'ML system predicting rockfall risks in open-pit mines before they happen — sensor-driven safety for industrial environments.',
    image: 'https://www.mdpi.com/mining/mining-02-00019/article_deploy/html/images/mining-02-00019-g015.png',
    tags: ['Python', 'ML', 'Sensor Data'],
    details: 'Rockfalls in open-pit mines pose serious risks. Analyzed geological and vibration sensor data, built an ML model for risk classification, and implemented a real-time alert system to improve worker safety.',
    repo: '',
    live: 'https://sih-web-app-pcgw.onrender.com/login',
    video: ''
  },
  {
    id: 'legal',
    title: 'AI Legal Assistant',
    description: 'Automates legal document drafting and analysis using NLP, cutting document preparation time for legal workflows.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    tags: ['NLP', 'Flask', 'Python'],
    details: 'Built an NLP pipeline using spaCy and Hugging Face Transformers to extract key clauses. Developed an AI-powered document drafting module that generates NDAs and agreements, reducing document review time by ~70%.',
    repo: '',
    live: 'https://ai-legal-advocade-ha9l.vercel.app',
    video: ''
  },
  {
    id: 'carbon',
    title: 'CarbonVault — AI Carbon Credit Platform',
    description: 'Full-stack real-time sustainability platform with AI-driven carbon credit automation and NDVI satellite analysis.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
    tags: ['FastAPI', 'React', 'SpacetimeDB', 'PostgreSQL', 'ML'],
    details: 'Developed a platform for NGOs, admins, and corporates to automate carbon credit issuance. Integrated satellite imagery analysis (NDVI) for automated verification.',
    repo: '',
    live: 'https://final-carbon-vault.vercel.app/',
    video: ''
  },
  {
    id: 'pothole',
    title: 'AI-Based Pothole Detection System',
    description: 'Real-time computer vision system detecting potholes using YOLO — deployable for smart city infrastructure monitoring.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsv5humNRjMoIS5sMDKc_VOmRqaiJJ6mS_Hw&s',
    tags: ['YOLO', 'OpenCV', 'Python'],
    details: 'Fine-tuned YOLOv8 object detection model on a labelled pothole dataset for real-time detection. Built severity classification and GPS logging to generate actionable reports for municipal road authorities.',
    repo: 'https://github.com/sakshiiiii26/pathols-detection',
    live: '',
    video: ''
  },
  {
    id: 'amazon',
    title: 'Amazon Sales Intelligence System',
    description: 'Data-driven sales prediction and customer segmentation system with Power BI dashboards and ML models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Power BI'],
    details: 'Analyzed Monthly and Daily Sales trends to detect seasonal peaks and drops. Suggested strategies to drive repeat purchases and identified underperforming regions and categories.',
    repo: 'https://github.com/sakshiiiii26/Amazon_ML_Analysis',
    live: '',
    video: ''
  },
  {
    id: 'fraud',
    title: 'AI Subsidy Fraud Detection System',
    description: 'End-to-end ML system catching fraudulent government subsidy claims with 95% accuracy, reducing manual verification by 60%.',
    image: 'https://developer-blogs.nvidia.com/wp-content/uploads/2024/10/fsi-tech-blog-fraud-detection-blueprint-1920x1080-1.jpg',
    tags: ['Python', 'NLP', 'XGBoost', 'Flask'],
    details: 'Built a robust anomaly detection pipeline combining XGBoost and NLP to flag inconsistencies in subsidy applications, significantly improving government resource allocation.',
    repo: 'https://github.com/sakshiiiii26/subsidy_fraud_detection',
    live: '',
    video: ''
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          A showcase of my recent work in AI, Machine Learning, and Data Science.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 14, delay: (index % 3) * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper">
                <div 
                  className="project-card glass clickable"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <button className="view-details-btn" onClick={e => { e.stopPropagation(); setSelectedProject(project); }}>
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="modal-content glass"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              
              <div className="modal-body">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                
                  <div className="modal-details">
                  <h4>Overview</h4>
                  <p>{selectedProject.details}</p>
                  
                  <h4>Technologies</h4>
                  <div className="project-tags">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="modal-actions">
                    {selectedProject.repo && (
                      <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <Code size={18} /> View Code
                      </a>
                    )}

                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Live Demo
                      </a>
                    )}

                    {selectedProject.video ? (
                      <a href={selectedProject.video} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Video Demo
                      </a>
                    ) : (
                      <span className="video-coming">Video demo coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
