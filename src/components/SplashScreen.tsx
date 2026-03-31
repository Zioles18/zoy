import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const stars = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1, // 1px to 3px
  delay: Math.random() * 2,
  duration: Math.random() * 1.5 + 1.5,
  opacityPeak: Math.random() * 0.5 + 0.3
}));

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = 'hidden';
    
    // Auto-complete after 2.5 seconds
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 2500);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--bg-color)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-primary)',
        overflow: 'hidden'
      }}
    >
      {/* Animated Stars Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, star.opacityPeak, 0] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'var(--text-primary)',
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px var(--text-primary)`,
            zIndex: 0
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}
      >
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '4px', marginBottom: '30px', textTransform: 'uppercase', textShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
          Kelompok <span className="gradient-text">6</span>
        </h1>
        
        {/* Loading Bar */}
        <div style={{ width: '250px', height: '4px', backgroundColor: 'var(--glass-border)', borderRadius: '4px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            style={{ height: '100%', background: 'linear-gradient(to right, var(--accent-blue), var(--accent-purple))' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
