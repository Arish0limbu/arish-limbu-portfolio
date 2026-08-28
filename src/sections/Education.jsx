import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import { education } from '../data/education';
import SectionTitle from '../components/SectionTitle';
import './Education.css';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <SectionTitle 
          title="MY JOURNEY" 
          subtitle="Education and learning path"
          align="center"
        />

        <motion.div
          className="education__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education__item"
              variants={itemVariants}
              custom={index}
            >
              <div className="education__marker">
                <motion.div
                  className="education__dot"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {edu.current ? <Star size={16} /> : <GraduationCap size={16} />}
                </motion.div>
                {index < education.length - 1 && <div className="education__line" />}
              </div>

              <motion.div
                className="education__card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="education__card-header">
                  <div className="education__degree">
                    <h3 className="education__title">{edu.degree}</h3>
                    {edu.current && (
                      <span className="education__current">Current</span>
                    )}
                  </div>
                  <div className="education__period">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="education__institution">
                  <MapPin size={16} />
                  <div>
                    <h4 className="education__institution-name">{edu.institution}</h4>
                    <span className="education__field">{edu.field}</span>
                  </div>
                </div>

                <p className="education__description">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
