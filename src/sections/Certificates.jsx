import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/certificates';
import SectionTitle from '../components/SectionTitle';
import Modal from '../components/Modal';
import Button from '../components/Button';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
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
    <section id="certificates" className="certificates">
      <div className="container">
        <SectionTitle 
          title="CERTIFICATES" 
          subtitle="Professional certifications and achievements"
          align="center"
        />

        <motion.div
          className="certificates__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificates__card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => openModal(cert)}
            >
              <div className="certificates__card-image">
                <div className="certificates__card-placeholder">
                  <Award size={48} />
                </div>
              </div>

              <div className="certificates__card-content">
                <h3 className="certificates__card-title">{cert.name}</h3>
                <div className="certificates__card-meta">
                  <div className="certificates__card-issuer">
                    <span className="certificates__meta-label">Issuer:</span>
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="certificates__card-date">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(cert);
                  }}
                  fullWidth
                >
                  View Certificate
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedCertificate?.name}
        size="medium"
      >
        {selectedCertificate && (
          <div className="certificates__modal-content">
            <div className="certificates__modal-image">
              <div className="certificates__modal-placeholder">
                <Award size={64} />
              </div>
            </div>

            <div className="certificates__modal-details">
              <div className="certificates__modal-info">
                <div className="certificates__modal-row">
                  <span className="certificates__modal-label">Issuer:</span>
                  <span className="certificates__modal-value">{selectedCertificate.issuer}</span>
                </div>
                <div className="certificates__modal-row">
                  <span className="certificates__modal-label">Date:</span>
                  <span className="certificates__modal-value">{selectedCertificate.date}</span>
                </div>
              </div>

              <div className="certificates__modal-description">
                <h4>Description</h4>
                <p>{selectedCertificate.description}</p>
              </div>

              <Button 
                variant="primary" 
                href={selectedCertificate.credential}
                icon="external"
                disabled={selectedCertificate.credential === '#'}
                fullWidth
              >
                View Credential
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;
