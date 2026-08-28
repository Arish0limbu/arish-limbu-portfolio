import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  href, 
  onClick, 
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const widthClasses = fullWidth ? 'btn--full-width' : '';
  const disabledClasses = disabled ? 'btn--disabled' : '';
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${disabledClasses} ${className}`.trim();

  const getIcon = () => {
    if (icon === 'arrow') return <ArrowRight size={18} />;
    if (icon === 'external') return <ExternalLink size={18} />;
    if (icon === 'github') return <Github size={18} />;
    return icon;
  };

  const buttonContent = (
    <>
      <span className="btn__content">{children}</span>
      {icon && <span className="btn__icon">{getIcon()}</span>}
    </>
  );

  const motionProps = {
    whileHover: !disabled ? { scale: 1.05 } : {},
    whileTap: !disabled ? { scale: 0.95 } : {},
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        disabled={disabled}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
