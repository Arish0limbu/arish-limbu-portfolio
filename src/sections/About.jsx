import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Zap, Target } from 'lucide-react';
import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import './About.css';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects', value: profile.stats.projects },
    { icon: Database, label: 'Technologies', value: profile.stats.technologies },
    { icon: Globe, label: 'Repositories', value: profile.stats.repositories },
    { icon: Cpu, label: 'Experience', value: profile.stats.experience }
  ];

  const interests = [
    { icon: Zap, title: 'Software Development', description: 'Building robust and scalable applications' },
    { icon: Globe, title: 'Web Development', description: 'Creating modern and responsive websites' },
    { icon: Target, title: 'AI / ML', description: 'Exploring artificial intelligence and machine learning' },
    { icon: Code, title: 'Programming', description: 'Solving problems through code' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle 
          title="ABOUT ME" 
          subtitle="Get to know me better"
          align="center"
        />

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div 
            className="about__text"
            variants={itemVariants}
          >
            <p className="about__intro">
              I'm a passionate BIT student and software developer with a deep interest in building modern, 
              efficient, and user-friendly applications. My journey in technology has been driven by curiosity 
              and a desire to create solutions that make a difference.
            </p>
            <p className="about__description">
              Currently pursuing my Bachelor's degree in Information Technology, I focus on expanding my 
              knowledge in software development, web technologies, and emerging fields like AI and machine learning. 
              I believe in continuous learning and staying updated with the latest technological advancements.
            </p>
            <p className="about__philosophy">
              My approach to development combines technical expertise with creative problem-solving. I enjoy 
              tackling complex challenges and transforming ideas into functional, elegant solutions. Whether it's 
              building a web application, developing software, or exploring new technologies, I'm always driven by 
              the desire to learn and create.
            </p>
          </motion.div>

          <motion.div 
            className="about__visual"
            variants={itemVariants}
          >
            <div className="about__stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="about__stat"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon size={32} className="about__stat-icon" />
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="about__interests">
              <h3 className="about__interests-title">What I Love</h3>
              <div className="about__interests-grid">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    className="about__interest-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <interest.icon size={24} className="about__interest-icon" />
                    <h4 className="about__interest-title">{interest.title}</h4>
                    <p className="about__interest-description">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
