import React from 'react';
import { motion } from 'framer-motion';
import './SectionTitle.css';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left', 
  className = '',
  ...props 
}) => {
  const containerClasses = `section-title section-title--${align} ${className}`.trim();

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    }
  };

  return (
    <motion.div 
      className={containerClasses}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      {...props}
    >
      <motion.h2 
        className="section-title__title"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="section-title__subtitle"
          variants={titleVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="section-title__line"
        variants={lineVariants}
        originX={align === 'left' ? 0 : align === 'right' ? 1 : 0.5}
      />
    </motion.div>
  );
};

export default SectionTitle;
