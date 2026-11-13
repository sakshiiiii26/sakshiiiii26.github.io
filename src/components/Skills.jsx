import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Agentic AI & RAG',
    skills: [
      'LangChain', 'LangGraph', 'LlamaIndex', 'Retrieval-Augmented Generation (RAG)',
      'ReAct Agents', 'Multi-Agent Systems', 'Tool Calling', 'Function Calling',
      'Autonomous Workflows', 'MCP (Model Context Protocol)', 'CrewAI', 'AutoGen',
      'Conversational Memory', 'Streaming Responses', 'n8n', 'viasocket'
    ]
  },
  {
    title: 'Generative AI & LLMs',
    skills: [
      'GPT-4', 'Claude', 'Gemini', 'LLaMA', 'Hugging Face Transformers',
      'Prompt Engineering', 'Few-Shot Prompting', 'Chain-of-Thought (CoT)',
      'Instruction Tuning', 'Fine-Tuning (PEFT, SFT)', 'RLHF (Conceptual)',
      'LangSmith', 'Langfuse', 'Guardrails', 'RBAC', 'Hallucination Mitigation'
    ]
  },
  {
    title: 'Frontend & Modern Web',
    skills: [
      'React 19 / 18', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
      'React Router', 'React Hook Form', 'Axios / REST APIs', 'GSAP (ScrollTrigger)',
      'Framer Motion', 'Three.js / React Three Fiber / OGL', 'shadcn/ui', 'Spline',
      'Responsive Design'
    ]
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      'Supervised & Unsupervised Learning', 'Feature Engineering', 'Scikit-learn',
      'XGBoost', 'Deep Learning', 'CNNs', 'RNNs', 'LSTMs', 'Transformers',
      'Attention Mechanisms', 'Reinforcement Learning', 'PyTorch', 'TensorFlow', 'MLflow'
    ]
  },
  {
    title: 'Computer Vision & Multimodal AI',
    skills: [
      'OpenCV', 'YOLOv8', 'MediaPipe', 'Image Segmentation',
      'Object Detection', 'Vision-Language Models (VLMs)'
    ]
  },
  {
    title: 'Backend, MLOps & Real-Time',
    skills: [
      'Python', 'FastAPI', 'Django', 'WebSockets', 'Celery', 'Redis', 'FFmpeg',
      'Docker', 'CI/CD', 'Model Serving', 'Selenium', 'JWT / OAuth',
      'Kubernetes (Basics)', 'Nginx', 'Streamlit'
    ]
  },
  {
    title: 'Databases & Vector Search',
    skills: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'SpacetimeDB', 'FAISS', 'ChromaDB', 'Qdrant',
      'Embedding Models (sentence-transformers, OpenAI)', 'Hybrid Search', 'Semantic Chunking'
    ]
  },
  {
    title: 'Analytics, Cloud & Soft Skills',
    skills: [
      'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Power BI', 'AWS (EC2, S3)',
      'Git / GitHub', 'Vercel', 'Google Colab', 'VS Code',
      'Problem Solving', 'Rapid Prototyping', 'Technical Presentations', 'Hackathon Leadership'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          Comprehensive tech stack spanning Agentic AI, Generative AI, Full-Stack Engineering, and MLOps.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: index * 0.08 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
