import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SectionTitle from '../components/SectionTitle';
import './Skills.css';

const Skills = () => {
  const getIconComponent = (iconName) => {
    const icons = {
      Code: () => <span className="skill-icon-code">{'</>'}</span>,
      Globe: () => <span className="skill-icon-globe">🌐</span>,
      Tool: () => <span className="skill-icon-tool">🔧</span>,
      Brain: () => <span className="skill-icon-brain">🧠</span>,
      Box: () => <span className="skill-icon-box">📦</span>
    };
    return icons[iconName] || icons.Code;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle 
          title="TECH STACK" 
          subtitle="Technologies I work with"
          align="center"
        />

        <motion.div
          className="skills__categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent = getIconComponent(category.icon);
            
            return (
              <motion.div
                key={category.name}
                className="skills__category"
                variants={categoryVariants}
                custom={categoryIndex}
              >
                <div className="skills__category-header">
                  <IconComponent />
                  <h3 className="skills__category-title">{category.name}</h3>
                </div>

                <div className="skills__list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skills__skill"
                      variants={skillVariants}
                      custom={skillIndex}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)'
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="skills__skill-header">
                        <h4 className="skills__skill-name">{skill.name}</h4>
                        <span className="skills__skill-level">{skill.level}</span>
                      </div>
                      <p className="skills__skill-description">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
