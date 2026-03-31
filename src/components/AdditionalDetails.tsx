import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Calendar, Heart, GraduationCap, ClipboardList } from 'lucide-react';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

const AdditionalDetails: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px' }}>
      {/* Projects Section */}
      <section id="projects">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <h2 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Rocket className="gradient-text" /> <TypewriterText text="Projects" />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {profileData.projects.map((project, idx) => (
              <div key={idx} className="glass" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '14px' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="skill-tag" style={{ fontSize: '12px', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Schedule Section */}
      <section id="schedule">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <h2 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Calendar className="gradient-text" /> <TypewriterText text="Weekly Schedule" />
          </h2>
          <div className="glass" style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>Senin - Jumat</p>
              <p style={{ fontSize: '14px' }}>{profileData.schedule.work}</p>
              <p style={{ fontSize: '14px' }}>{profileData.schedule.study}</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--accent-purple)' }}>Sabtu</p>
              <p style={{ fontSize: '14px' }}>{profileData.schedule.saturday}</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>Minggu</p>
              <p style={{ fontSize: '14px' }}>{profileData.schedule.sunday}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Future Hopes & Memorable Moments */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
        gap: '24px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ padding: '32px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Heart className="gradient-text" /> <TypewriterText text="Harapan & Kebanggaan" />
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {profileData.futureHopes}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ padding: '32px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ClipboardList className="gradient-text" /> <TypewriterText text="Momen Berkesan" />
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {profileData.memorableMoment}
          </p>
        </motion.div>
      </div>

      {/* Extra: Medical AI Journal */}
      <section id="extra">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ 
            padding: '40px', 
            textAlign: 'center',
            border: '1px solid var(--accent-blue)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
          }}
        >
          <GraduationCap size={48} className="gradient-text" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}><TypewriterText text="Scientific Contribution" /></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            {profileData.extra.journal}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AdditionalDetails;
