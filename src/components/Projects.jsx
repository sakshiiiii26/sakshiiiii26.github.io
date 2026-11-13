import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { X, Code, ExternalLink } from 'lucide-react';
import './Projects.css';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'agentic-ai', label: 'Agentic AI & GenAI' },
  { id: 'research-ml', label: 'ML & Research' },
  { id: 'frontend-web', label: 'Full-Stack & Web' }
];

const projectData = [
  {
    id: 'reelforge',
    title: 'ReelForge — Autonomous AI Video Platform',
    category: 'agentic-ai',
    description: 'Autonomous pipeline converting text prompts into short-form reels with LLM scene planning, Pexels media routing, and multi-tier TTS.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    tags: ['Celery', 'Redis', 'FFmpeg', 'ElevenLabs', 'WebSockets', 'FastAPI', 'LLM'],
    details: 'Architected an end-to-end autonomous video generation pipeline converting natural-language prompts into short-form video reels with LLM-driven scene planning, viral hook generation, and pacing optimization. Engineered a multi-modal asset routing and resilient audio engine, dynamically fetching relevant stock media via Pexels and implementing a multi-tier TTS fallback system (ElevenLabs, Edge-TTS, TTS) for synchronized voiceovers. Built a distributed headless rendering service using Celery, Redis, and FFmpeg for automated video composition, dynamic caption burning, and audio muxing, streaming real-time stage progress to clients over WebSockets.',
    repo: 'https://github.com/sakshiiiii26/reelfordge',
    live: '',
    video: ''
  },
  {
    id: 'automail',
    title: 'Auto Mail Apply — Agentic AI Job Pipeline',
    category: 'agentic-ai',
    description: 'Autonomous ReAct agent that scrapes job boards, ranks candidate-job fit using NLP, and auto-dispatches tailored outreach emails.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'FastAPI', 'ReAct Agent', 'Selenium', 'spaCy', 'LLM Tool Calling'],
    details: 'Designed and built a fully autonomous multi-step agent that scrapes job listings, ranks candidate-job fit using NLP (cosine similarity + keyword extraction), and auto-composes and sends tailored outreach emails with zero manual input. Implemented tool-use architecture where the agent invokes web scraper, profile matcher, and email composer as sequential tools — a working ReAct-style agentic workflow. Reduced time-per-application from ~20 minutes to under 30 seconds; scales across multiple job boards and candidate profiles.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://mailautomation-azure.vercel.app/',
    video: ''
  },
  {
    id: 'legal',
    title: 'AI-Powered Personal Legal Assistant (RAG)',
    category: 'agentic-ai',
    description: 'Production RAG pipeline combining FAISS vector search with LLMs for legal document summarization, case strategy, and classification.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    tags: ['FastAPI', 'FAISS', 'LangChain', 'Groq / OpenAI', 'PostgreSQL', 'RAG'],
    details: 'Built a production-grade RAG pipeline combining FAISS vector retrieval with LLM generation for legal document summarization, case strategy advisory, and document classification. Implemented multi-turn conversational memory, citation attribution, and streaming responses for real-time responsive UX.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://ai-legal-advocade-ha9l.vercel.app',
    video: ''
  },
  {
    id: 'binjwacost',
    title: 'Binjwa AI Cost & Token Management Platform',
    category: 'agentic-ai',
    description: 'Multi-tenant cost and token management platform that tracks, compares, and optimizes real-time usage across LLMs, Voice, and STT providers.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'FastAPI', 'MongoDB', 'Docker', 'Nginx', 'OpenRouter', 'Token Analytics'],
    details: 'A multi-tenant cost and token management system that tracks, compares, and optimizes real-time usage across various AI model providers (LLMs, Voice, and STT). Empowers organizations to allocate token budgets to teams, monitor employee AI consumption, and route requests dynamically to the most cost-effective AI models. Stack: React (Vite) + FastAPI (Python) + MongoDB, containerized with Docker & Nginx, and integrated with OpenRouter and top LLM APIs.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://tokencomparison.netlify.app/',
    video: ''
  },
  {
    id: 'avcr',
    title: 'Autonomous Rescue AI System (AVCR)',
    category: 'research-ml',
    description: 'Real-time survivability & gas hazard assessment deployed on NVIDIA Jetson Nano with 91% accuracy using ensemble ML.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/450197758/XA/WB/NF/226713088/confined-space-drone-inspection-gps-denied-drone.jpg',
    tags: ['Jetson Nano', 'Ensemble ML', 'LSTM', 'Isolation Forest', 'IoT Sensors'],
    details: 'Deployed ML inference pipeline on NVIDIA Jetson Nano for real-time survivability assessment in disaster-hit confined spaces. Achieved 91% classification accuracy using an ensemble of Isolation Forest, LSTM, and Random Forest models on live sensor streams. Project received institutional funding; selected among top research projects at IPS Academy IES.',
    repo: 'https://github.com/sakshiiiii26/AVCR',
    live: '',
    video: ''
  },
  {
    id: 'carbon',
    title: 'CarbonVault — AI Carbon Credit Platform',
    category: 'research-ml',
    description: 'End-to-end AI platform automating carbon credit issuance across 500+ submission workflows with NDVI satellite validation.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    tags: ['FastAPI', 'React', 'SpacetimeDB', 'PostgreSQL', 'NDVI Analysis', 'Vercel'],
    details: 'Built an end-to-end AI platform automating carbon credit issuance for NGOs, admins, and corporates across 500+ submission workflows — integrating satellite imagery (NDVI analysis) for automated land cover validation. Reduced manual verification turnaround from days to under 2 minutes; features role-based audit workflows and multi-user authentication.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://final-carbon-vault.vercel.app/',
    video: ''
  },
  {
    id: 'rockfall',
    title: 'Rockfall Prediction & Alert System',
    category: 'research-ml',
    description: 'ML classification system predicting rockfall hazards in open-pit mines with 88% precision and a 10–15 min early warning pipeline.',
    image: 'https://www.mdpi.com/mining/mining-02-00019/article_deploy/html/images/mining-02-00019-g015.png',
    tags: ['Python', 'Scikit-learn', 'Sensor Data', 'Real-time Alerting', 'Render'],
    details: 'ML classification system predicting rockfall risk in open-pit mines from geological + vibration sensor data; achieved 88% precision on held-out test sets. Real-time alerting pipeline providing a 10–15 minute early warning ahead of critical risk threshold to protect personnel.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://sih-web-app-pcgw.onrender.com/login',
    video: ''
  },
  {
    id: 'fraud',
    title: 'TrueDoc — AI Document Verification',
    category: 'research-ml',
    description: 'Hash-based document verification and forgery detection platform cutting manual review effort by ~80% for THDCIL / Ministry of Power.',
    image: 'https://developer-blogs.nvidia.com/wp-content/uploads/2024/10/fsi-tech-blog-fraud-detection-blueprint-1920x1080-1.jpg',
    tags: ['Python', 'FastAPI', 'React', 'Hash Security', 'Forgery Detection', 'Docker'],
    details: 'Engineered an automated document verification pipeline using hash-based tamper detection and ML-based forgery scoring, reducing manual review effort by ~80%. Implemented forgery detection models integrated into secure backend workflows for Ministry of Power (THDCIL) documentation.',
    repo: 'https://github.com/sakshiiiii26/subsidy_fraud_detection',
    live: 'https://truedoc-frontend.vercel.app/',
    video: ''
  },
  {
    id: 'pothole',
    title: 'AI-Based Pothole Detection System',
    category: 'research-ml',
    description: 'Real-time computer vision system detecting potholes using fine-tuned YOLOv8 for municipal road safety.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsv5humNRjMoIS5sMDKc_VOmRqaiJJ6mS_Hw&s',
    tags: ['YOLOv8', 'OpenCV', 'Python', 'Computer Vision'],
    details: 'Fine-tuned YOLOv8 object detection model on custom labelled road imagery for real-time severity classification and GPS logging to generate actionable road maintenance reports.',
    repo: 'https://github.com/sakshiiiii26/pathols-detection',
    live: '',
    video: ''
  },
  {
    id: 'smartinterview',
    title: 'SmartInterview — AI Interview Avatar Platform',
    category: 'frontend-web',
    description: 'Interactive React frontend for an AI interview-avatar platform with 3D avatars, real-time feedback, and responsive layouts.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['React 18', 'React Router', 'Tailwind CSS', 'Three.js', 'Spline', 'Axios', 'Google OAuth'],
    details: 'Designed and developed the UI pages of the platform\'s React frontend for an AI interview-avatar experience, with clean, consistent layouts across devices. Implemented interview workflows, responsive form validation with React Hook Form, and interactive 3D avatar animations using Spline and React Three Fiber.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://smartinterview.in',
    video: ''
  },
  {
    id: 'quoqubit',
    title: 'QuoQubit — AI Products & Software Website',
    category: 'frontend-web',
    description: 'Production corporate website for an AI products and custom software company, delivering smooth interactive 3D elements and modern UI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js / OGL', 'shadcn/ui'],
    details: 'Worked in a team on the company\'s live production website (AI products, custom software, data engineering and intelligent automation); designed and built the Home to Services pages and the inner project pages as modular React components with GSAP ScrollTrigger and interactive Three.js 3D visuals.',
    repo: 'https://github.com/sakshiiiii26',
    live: 'https://quoqubit.com',
    video: ''
  },
  {
    id: 'amazon',
    title: 'Amazon Sales Intelligence System',
    category: 'research-ml',
    description: 'Sales trend prediction and customer segmentation engine with interactive Power BI dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Power BI', 'EDA'],
    details: 'Analyzed monthly and daily sales trends to detect seasonal peaks and drops with predictive Scikit-learn models and interactive Power BI dashboards, identifying underperforming regions and retention drivers.',
    repo: 'https://github.com/sakshiiiii26/Amazon_ML_Analysis',
    live: '',
    video: ''
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Showcasing production AI products, autonomous agentic workflows, full-stack applications, and research systems.
        </p>

        {/* Category Filter Tabs */}
        <div className="project-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`project-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                className="project-grid-item"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper" style={{ height: '100%' }}>
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

                      <div className="project-card-footer">
                        {project.live ? (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link-btn live-btn"
                            onClick={e => e.stopPropagation()}
                          >
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        ) : project.repo ? (
                          <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link-btn code-btn"
                            onClick={e => e.stopPropagation()}
                          >
                            <Code size={14} /> View Code
                          </a>
                        ) : null}
                        <span className="card-details-hint">Details &rarr;</span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
                    {selectedProject.live ? (
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    ) : selectedProject.repo ? (
                      <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <Code size={18} /> View Code
                      </a>
                    ) : null}
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
