import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass"
        style={{
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          border: '1px solid var(--accent-blue)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(64, 64, 64, 0.05))'
        }}
      >
        <Quote 
          size={80} 
          style={{ 
            position: 'absolute', 
            top: '-10px', 
            left: '20px', 
            opacity: 0.1, 
            color: 'var(--text-primary)',
            transform: 'rotate(180deg)'
          }} 
        />
        
        <h2 style={{ fontSize: '24px', marginBottom: '30px', fontWeight: 600 }}>
          <TypewriterText text="Philosophy & Mindset" />
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(18px, 4vw, 24px)', 
          lineHeight: 1.8, 
          color: 'var(--text-primary)', 
          fontStyle: 'italic',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          "{profileData.philosophy}"
        </p>

        <Quote 
          size={80} 
          style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            right: '20px', 
            opacity: 0.1, 
            color: 'var(--text-primary)'
          }} 
        />
      </motion.div>
    </section>
  );
};

export default Philosophy;
