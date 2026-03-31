import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/WhatsApp Image 2026-03-10 at 04.58.23.jpeg';
import img2 from '../assets/WhatsApp Image 2026-03-10 at 04.58.24 (1).jpeg';
import img3 from '../assets/WhatsApp Image 2026-03-10 at 04.58.25.jpeg';
import img4 from '../assets/WhatsApp Image 2026-03-10 at 04.58.38.jpeg';
import img5 from '../assets/WhatsApp Image 2026-03-10 at 04.58.39.jpeg';
import img6 from '../assets/WhatsApp Image 2026-03-10 at 23.06.54.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

const Documentation: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Camera className="gradient-text" /> Teaching Documentation
        </h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                width: '100%', 
                height: '280px', 
                borderRadius: '12px', 
                overflow: 'hidden' 
              }}>
                <img 
                  src={img} 
                  alt={`Teaching Documentation ${index + 1}`} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedImageIndex(index)}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '12px',
                borderRadius: '50%',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.img
              key={selectedImageIndex}
              src={images[selectedImageIndex]}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                userSelect: 'none'
              }}
              onClick={(e) => e.stopPropagation()}
              alt="Expanded view"
            />

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Documentation;
