import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap: Record<string, React.ReactNode> = {
  gmail: <Mail size={24} />,
  whatsapp: <MessageCircle size={24} />,
  instagram: <Instagram size={24} />
};

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ textAlign: 'center', marginBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass"
        style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '36px', marginBottom: '16px', fontWeight: 700 }}>
          Media Social 
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px' }}>
          Berikut Media Social Yang bisa di hubungi
        </p>
        

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {profileData.socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, color: 'var(--accent-blue)' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                background: 'var(--glass-bg)',
                padding: '12px 24px',
                borderRadius: '12px',
                width: '100%',
                maxWidth: '500px',
                transition: 'all 0.3s',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              aria-label={social.label}
            >
              <div style={{ 
                background: 'var(--text-primary)', 
                color: 'var(--bg-color)',
                padding: '10px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {iconMap[social.icon.toLowerCase()]}
              </div>
              <div style={{ textAlign: 'left', minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', textTransform: 'lowercase', marginBottom: '4px' }}>
                  {social.icon === 'gmail' ? 'gmail' : social.icon === 'whatsapp' ? 'wa' : 'intagram'} :
                </div>
                <div style={{ 
                  fontWeight: 600, 
                  wordBreak: 'break-word',
                  fontSize: social.icon === 'gmail' ? '15px' : '18px'
                }}>
                  {social.icon === 'whatsapp' ? '+62 822-9135-5411' : 
                   social.icon === 'instagram' ? '@nurisutiya' : 
                   'nuri.sutiyaningsih4@guru.smk.belajar.id'}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 