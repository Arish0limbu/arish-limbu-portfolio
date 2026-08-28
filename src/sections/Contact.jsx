import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // In production, integrate with Formspree, EmailJS, or similar service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      Github: () => <span className="social-icon-github">GH</span>,
      Facebook: () => <span className="social-icon-facebook">FB</span>,
      Instagram: () => <span className="social-icon-instagram">IG</span>,
      Linkedin: () => <span className="social-icon-linkedin">LI</span>
    };
    return icons[iconName] || icons.Github;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle 
          title="LET'S BUILD SOMETHING" 
          subtitle="Get in touch with me"
          align="center"
        />

        <motion.div
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="contact__info"
            variants={itemVariants}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-description">
              Feel free to reach out for collaborations, project discussions, or just to say hello!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <Mail size={20} />
                <div>
                  <span className="contact__detail-label">Email</span>
                  <a href={`mailto:${profile.email}`} className="contact__detail-value">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <MapPin size={20} />
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h4 className="contact__social-title">Connect with me</h4>
              <div className="contact__social-links">
                {socialLinks.map((social) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="contact__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            variants={itemVariants}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="contact__form-textarea"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                icon="send"
                disabled={isSubmitting}
                fullWidth
                className="contact__submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
