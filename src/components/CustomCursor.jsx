import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Check if device supports hover
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  const dotVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1
    },
    hovering: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.5
    },
    clicking: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 0.3
    }
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: 0.5
    },
    hovering: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.5,
      opacity: 0.8
    },
    clicking: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 1.2,
      opacity: 1
    }
  };

  const getVariant = () => {
    if (isClicking) return 'clicking';
    if (isHovering) return 'hovering';
    return 'default';
  };

  return (
    <>
      <motion.div
        ref={dotRef}
        className="custom-cursor-dot"
        variants={dotVariants}
        animate={getVariant()}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        ref={cursorRef}
        className="custom-cursor-ring"
        variants={ringVariants}
        animate={getVariant()}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  );
};

export default CustomCursor;
