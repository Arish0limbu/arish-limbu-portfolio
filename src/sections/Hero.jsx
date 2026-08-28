import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import Button from '../components/Button';
import Scene from '../three/Scene';
import './Hero.css';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="hero">
      <Scene />
      
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__label">
            HELLO, I'M
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="hero__title"
          >
            {profile.name}
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="hero__subtitle"
          >
            {profile.title}
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="hero__roles"
          >
            {profile.roles.map((role, index) => (
              <motion.span
                key={role}
                className={`hero__role ${index === currentRoleIndex ? 'hero__role--active' : ''}`}
                animate={{
                  opacity: index === currentRoleIndex ? 1 : 0.3,
                  scale: index === currentRoleIndex ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="hero__description"
          >
            {profile.description}
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="hero__actions"
          >
            <Button 
              variant="primary" 
              size="large"
              icon="arrow"
              onClick={scrollToNext}
            >
              Explore Projects
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              href={`https://github.com/${profile.github}`}
              icon="github"
            >
              View GitHub
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
