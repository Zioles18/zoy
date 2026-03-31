import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string | string[];
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  loop?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = "", 
  style = {},
  once = true,
  loop = false
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const targetText = Array.isArray(text) ? text[currentTextIndex] : text;

  useEffect(() => {
    if (!isTyping) return;

    const speed = isDeleting ? 30 : 50;
    const type = () => {
      if (!isDeleting && displayText === targetText) {
        if (loop) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        if (Array.isArray(text)) {
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
        }
        return;
      }

      const nextText = isDeleting
        ? targetText.slice(0, displayText.length - 1)
        : targetText.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [isTyping, displayText, isDeleting, targetText, loop, text]);

  return (
    <motion.span
      className={className}
      style={style}
      onViewportEnter={() => setIsTyping(true)}
      viewport={{ once }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ borderRight: '2px solid var(--accent-blue)', marginLeft: '2px' }}
      />
    </motion.span>
  );
};

export default TypewriterText;
