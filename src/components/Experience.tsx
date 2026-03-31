import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Briefcase className="gradient-text" /> <TypewriterText text="Experience" />
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {profileData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '32px',
                borderLeft: '4px solid',
                borderImage: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple)) 1',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>
                    {exp.company}
                  </p>
                </div>
                <div style={{ padding: '6px 16px', borderRadius: '20px', background: 'var(--glass-bg)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {exp.period}
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-primary)' }}>Education</h3>
          <div className="glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {profileData.education.map((edu, idx) => (
              <div key={idx}>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{edu.degree}</p>
                <p style={{ color: 'var(--accent-blue)' }}>{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-primary)' }}>Personal Philosophy</h3>
          <div className="glass" style={{ padding: '24px' }}>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.8 }}>
              "{profileData.philosophy}"
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
