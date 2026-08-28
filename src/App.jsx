import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import GithubSection from './sections/Github';
import Contact from './sections/Contact';
import './styles/responsive.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if device supports custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      setIsCustomCursorActive(true);
      document.body.classList.add('custom-cursor-active');
    }

    return () => {
      clearTimeout(loadingTimer);
      if (isCustomCursorActive) {
        document.body.classList.remove('custom-cursor-active');
      }
    };
  }, [isCustomCursorActive]);

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <>
      {isCustomCursorActive && <CustomCursor />}
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            id="loading-screen"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="loading-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h1 
                className="loading-text"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                ARISH LIMBU
              </motion.h1>
              <motion.div
                className="loading-bar"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certificates />
              <GithubSection />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
