import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning (MLP, CNN, RNN)', 'NLP', 'LSTM', 'LLM', 'Transformers', 'Hugging Face', 'LangChain',
    'RAG', 'Prompt Engineering', 'Fine-tuning', 'Reinforcement Learning', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras']
  },
  {
    title: 'Computer Vision',
    skills: ['OpenCV', 'YOLOv8', 'MediaPipe', 'Image Segmentation']
  },
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'MS Excel', 'Power BI', 'Big Data', 'Data Analysis', 'EDA', 'MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
  },
  {
    title: 'Cloud & MLOps',
    skills: ['Vercel', 'Docker', 'Google Colab', 'MLflow', 'AWS (familiar)']
  }
  ,
  {
    title: 'Backend & Frameworks',
    skills: ['FastAPI', 'Django', 'React', 'WebSockets','stramlit', 'JWT Authentication']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Docker', 'Jetson Nano', 'VS Code', 'ChromaDB']
  },
  {
    title: 'Languages',
    skills: ['Python', 'C', 'C++', 'HTML', 'CSS']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: index * 0.1 }}
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
