import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

const About: React.FC = () => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <User className="gradient-text" /> <TypewriterText text="About The Teacher" />
        </h2>
        <div className="glass" style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--text-primary)' }}>Who is this teacher?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              {profileData.bio}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {profileData.background}
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-blue)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Location</p>
                <p style={{ fontWeight: 500 }}>{profileData.location}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-purple)' }}>
                <Mail size={24} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Email</p>
                <p style={{ fontWeight: 500, wordBreak: 'break-all', overflowWrap: 'anywhere' }}>{profileData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
