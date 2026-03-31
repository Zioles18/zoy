import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

import img1 from '../assets/douyin hutao.jpg';
import img2 from '../assets/download.jpg';
import img3 from '../assets/download (1).jpg';
import img4 from '../assets/download (2).jpg';
import img5 from '../assets/hutao (1).jpg';
import img6 from '../assets/save=follow.jpg';

const teamMembers = [
  { id: 1, name: 'hutao', role: 'Product Manager', image: img1 },
  { id: 2, name: 'hutao', role: 'UI/UX Designer', image: img2 },
  { id: 3, name: 'hutao', role: 'Frontend Developer', image: img3 },
  { id: 4, name: 'hutao', role: 'Backend Developer', image: img4 },
  { id: 5, name: 'hutao', role: 'QA Engineer', image: img5 },
  { id: 6, name: 'hutao', role: 'Data Analyst', image: img6 },
];

const Team: React.FC = () => {
  return (
    <section id="team">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px', padding: '0 5%' }}>
          <Users className="gradient-text" /> Our Team
        </h2>
        
        <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
          <div className="marquee-container" style={{ padding: '24px 0' }}>
            <div className="marquee-content">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <motion.div
              key={`${member.id}-${index}`}
              className=""
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '16px',
                minWidth: '220px',
                width: '220px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                background: 'var(--glass-bg)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--accent-blue)', fontWeight: 500 }}>
                </p>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
