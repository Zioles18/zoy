import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import TypewriterText from './TypewriterText';

import profileImg from '../assets/profile.png';
import lightProfileImg from '../assets/WhatsApp Image 2026-03-13 at 01.25.05 (1).jpeg';

const Hero: React.FC = () => {
  const [theme, setTheme] = useState(
    typeof document !== 'undefined' 
      ? document.documentElement.getAttribute('data-theme') || 'light' 
      : 'light'
  );

  useEffect(() => {
    // Sync immediately on mount to catch any changes Header made before this observer was set up
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme') || 'light');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="hero-content-wrapper" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <p style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', marginBottom: '16px', textTransform: 'uppercase' }}>
            Welcome, we are Group 6.
          </p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
          <TypewriterText text={profileData.name} loop={true} />.<br />
          <span className="gradient-text">
            <TypewriterText 
              text={["Guru Produktif RPL", "IT Developer Freelance"]} 
              loop={true} 
            />.
          </span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', marginBottom: '40px' }}>
          {profileData.bio}
        </p>
        
        <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'var(--btn-primary-bg)', 
              color: 'var(--btn-primary-text)', 
              padding: '12px 24px', 
              borderRadius: '8px',
              fontWeight: 500,
              boxShadow: '0 4px 14px var(--glass-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass"
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '8px'
            }}
          >
            View Experience
          </motion.a>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-image-wrapper"
          style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="hero-orbit-container">
            
            {/* Orbital Loop */}
            <motion.div
              className="hero-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            >
              <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ overflow: 'visible' }}>
                {/* Glowing ring */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="var(--accent-blue)" strokeWidth="0.5" strokeOpacity="0.3" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent-blue)" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4 4" />
                
                <path
                  id="textPath"
                  d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                  fill="none"
                />
                <text fontSize="13" fontWeight="bold" letterSpacing="4px" style={{ textTransform: 'uppercase', fill: 'var(--accent-blue)', opacity: 0.8 }}>
                  <textPath href="#textPath" startOffset="0" textLength="560">
                    Nuri Sutiyaningsih ✦ Nuri Sutiyaningsih ✦ Nuri Sutiyaningsih ✦
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Profile Image Container */}
            <div className="hero-profile-image">
            
            {/* The base image is the NEW theme's image */}
            <img 
              src={theme === 'dark' ? profileImg : lightProfileImg} 
              alt="Profile Base" 
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'
              }}
            />

            {/* The overlay image is the OLD theme's image, which gets WIPPED AWAY by clipPath */}
            <motion.img 
              key={theme === 'dark' ? 'light' : 'dark'}
              src={theme === 'dark' ? lightProfileImg : profileImg} 
              alt="Profile Overlay" 
              initial={{ clipPath: 'inset(0 0 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 100%)' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'
              }}
            />

            {/* The sweeping line that acts as the scanner beam */}
            <motion.div
              key={`line-${theme}`}
              initial={{ left: '0%', opacity: 1 }}
              animate={{ left: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                width: '4px',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1), transparent)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(59, 130, 246, 0.5)',
                zIndex: 10,
                marginLeft: '-2px'
              }}
            />
          </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-orbit-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 480px;
          height: 480px;
        }
        .hero-orbit-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .hero-profile-image {
          position: relative;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--glass-border);
          box-shadow: 0 20px 60px var(--glass-glow);
          z-index: 1;
          background: var(--bg-primary);
        }

        @media (max-width: 1024px) {
          .hero-orbit-container {
            width: 400px;
            height: 400px;
          }
        }
        @media (max-width: 768px) {
          .hero-orbit-container {
            width: 340px;
            height: 340px;
            margin: 40px 0;
          }
        }
        @media (max-width: 480px) {
          .hero-orbit-container {
            width: 300px;
            height: 300px;
            margin: 20px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
