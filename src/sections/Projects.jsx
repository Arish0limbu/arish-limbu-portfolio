import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Modal from '../components/Modal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle 
          title="SELECTED PROJECTS" 
          subtitle="Some of my recent work"
          align="center"
        />

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="projects__card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => openModal(project)}
            >
              <div className="projects__card-image">
                <div className="projects__card-placeholder">
                  <span className="projects__card-icon">{project.name.charAt(0)}</span>
                </div>
                <div className="projects__card-overlay">
                  <Button 
                    variant="primary" 
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>

              <div className="projects__card-content">
                <div className="projects__card-category">{project.category}</div>
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projects__card-actions">
                  <Button 
                    variant="ghost" 
                    size="small"
                    href={project.github}
                    icon="github"
                    disabled={project.github === '#'}
                  >
                    GitHub
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="small"
                    href={project.demo}
                    icon="external"
                    disabled={project.demo === '#'}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.name}
        size="large"
      >
        {selectedProject && (
          <div className="projects__modal-content">
            <div className="projects__modal-image">
              <div className="projects__modal-placeholder">
                <span className="projects__modal-icon">{selectedProject.name.charAt(0)}</span>
              </div>
            </div>

            <div className="projects__modal-details">
              <div className="projects__modal-category">{selectedProject.category}</div>
              
              <h4>Description</h4>
              <p>{selectedProject.fullDescription}</p>

              <h4>Features</h4>
              <ul className="projects__modal-features">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h4>Technologies</h4>
              <div className="projects__modal-technologies">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projects__modal-actions">
                <Button 
                  variant="primary" 
                  href={selectedProject.github}
                  icon="github"
                  disabled={selectedProject.github === '#'}
                  fullWidth
                >
                  View on GitHub
                </Button>
                <Button 
                  variant="secondary" 
                  href={selectedProject.demo}
                  icon="external"
                  disabled={selectedProject.demo === '#'}
                  fullWidth
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
