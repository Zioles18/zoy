import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Code className="gradient-text" /> <TypewriterText text="Skills & Tools" />
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Web & Logic */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--text-primary)' }}>Web & Logic</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {profileData.skills.web.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--glass-glow)', borderColor: 'var(--accent-blue)' }}
                  className="skill-tag"
                  style={skill === "PHP" ? { 
                    border: '1px solid var(--accent-purple)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
                  } : {}}
                >
                  {skill} {skill === "PHP" && "(Favorite Backend)"}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Android & Data */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--text-primary)' }}>Mobile & Data Science</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {profileData.skills.specialized.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--glass-glow)', borderColor: 'var(--accent-blue)' }}
                  className="skill-tag"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
