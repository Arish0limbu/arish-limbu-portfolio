import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import './Footer.css';

const Footer = () => {
  const getSocialIcon = (iconName) => {
    const icons = {
      Github: () => <span className="footer-social-icon-github">GH</span>,
      Facebook: () => <span className="footer-social-icon-facebook">FB</span>,
      Instagram: () => <span className="footer-social-icon-instagram">IG</span>,
      Linkedin: () => <span className="footer-social-icon-linkedin">LI</span>
    };
    return icons[iconName] || icons.Github;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="footer__name">ARISH LIMBU</h2>
            <p className="footer__tagline">Building. Learning. Creating.</p>
          </motion.div>

          <motion.div
            className="footer__social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="footer__social-links">
              {socialLinks.map((social) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ '--social-color': social.color }}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="footer__bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="footer__copyright">
              © {currentYear} Arish Limbu. All rights reserved.
            </p>
            <p className="footer__made-with">
              Made with <Heart size={16} className="footer__heart" /> by Arish Limbu
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
