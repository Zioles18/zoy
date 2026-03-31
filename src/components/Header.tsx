import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('About');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Skills', href: '#skills' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Determine initial theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy for active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = section;
            break;
          }
        }
      }
      if (current) {
         const matchingLink = navLinks.find(link => link.href === `#${current}`);
         if (matchingLink) setActiveSection(matchingLink.label);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`header-outer ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          transition: 'padding 0.4s ease',
          pointerEvents: 'none',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="navbar-inner"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: isScrolled ? '1000px' : '1200px',
            borderRadius: '100px',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: isScrolled ? '0 20px 40px var(--glass-glow)' : '0 10px 30px rgba(0,0,0,0.02)',
            border: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxSizing: 'border-box'
          }}
        >
          <a href="#" className="navbar-logo" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            Kelompok <span className="gradient-text navbar-logo-number" style={{ fontWeight: 800 }}>6</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Desktop Nav */}
            <nav style={{ display: 'none' }} className="desktop-nav">
              <ul style={{ display: 'flex', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.label} style={{ position: 'relative' }}>
                    {activeSection === link.label && (
                      <motion.div
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(59, 130, 246, 0.15)',
                          borderRadius: '100px',
                          zIndex: 0
                        }}
                      />
                    )}
                    <a 
                      href={link.href} 
                      onClick={() => setActiveSection(link.label)}
                      className="nav-link"
                      style={{ 
                        position: 'relative',
                        zIndex: 1,
                        fontSize: '14px', 
                        fontWeight: activeSection === link.label ? 600 : 500, 
                        color: activeSection === link.label ? 'var(--accent-blue)' : 'var(--text-secondary)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                        textDecoration: 'none'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button 
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{
                background: 'transparent',
                border: '1px solid transparent',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="theme-toggle-icon" /> : <Moon size={18} className="theme-toggle-icon" />}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="mobile-nav-toggle" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} className="mobile-toggle-icon" /> : <Menu size={24} className="mobile-toggle-icon" />}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '20px',
              right: '20px',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              borderRadius: '24px',
              boxShadow: '0 20px 40px var(--glass-glow)',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ 
                      fontSize: '16px', 
                      fontWeight: 500, 
                      color: 'var(--text-primary)', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.03)',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .header-outer { padding: 24px 20px; }
        .header-outer.scrolled { padding: 16px 20px; }
        .navbar-inner { padding: 12px 32px; }
        .navbar-logo { font-weight: 700; font-size: 20px; }
        .navbar-logo-number { font-size: 22px; }
        
        @media (max-width: 768px) {
          .header-outer { padding: 16px 12px; }
          .header-outer.scrolled { padding: 10px 12px; }
          .navbar-inner { padding: 10px 20px; }
          .navbar-logo { font-size: 18px; }
          .navbar-logo-number { font-size: 20px; }
          .theme-toggle-btn { width: 32px !important; height: 32px !important; }
        }
        @media (max-width: 480px) {
          .navbar-inner { padding: 8px 16px; }
          .header-outer { padding: 12px 10px; }
          .header-outer.scrolled { padding: 8px 10px; }
          .navbar-logo { font-size: 16px; }
          .navbar-logo-number { font-size: 18px; }
          .mobile-toggle-icon { width: 20px; height: 20px; }
          .theme-toggle-icon { width: 16px; height: 16px; }
        }

        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .mobile-nav-toggle { display: none !important; }
        }
        .nav-link:hover {
          color: var(--accent-blue) !important;
          background: rgba(100, 150, 255, 0.08);
        }
        .theme-toggle-btn:hover {
          background: rgba(100, 150, 255, 0.08) !important;
          color: var(--accent-blue) !important;
        }
      `}</style>
    </>
  );
};

export default Header;
